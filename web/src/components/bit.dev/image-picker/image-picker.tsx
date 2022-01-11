/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import ImageUploading, { ImageType } from 'react-images-uploading'
import { ImageCard } from './components'
import { initializeApp, FirebaseOptions, getApp, getApps } from 'firebase/app'
import {
  getImageListFromCloud,
  removeImageFromCloud,
  setImage,
  uploadImageToCloud,
} from './utils'
import classNames from 'classnames'

export type ImagePickerProps = {
  /**
   * maximum number of images
   */
  maxNumber?: number

  /**
   * default images to load
   */
  images?: ImageType[] | []
  /**
   * maximum image size
   */
  maxFileSize?: number
  /**
   * callback for when images are change or get added
   */
  onChange?: (images: ImageType[] | string) => void
  /**
   * firebase cloud storage folder path
   */
  folderPath?: string
  /**
   * firebase config options
   */
  firebaseConfigOptions?: FirebaseOptions

  /**
   * props for form input field
   */
  inputProps?: any
  /**
   * return onchange value as path rather than array of url
   */
  payloadAsPath?: boolean
  /**
   * imageCard styling class
   */
  imageCardClassname?: string
}

export function ImagePicker({
  images,
  maxFileSize,
  maxNumber,
  folderPath,
  firebaseConfigOptions,
  inputProps,
  payloadAsPath,
  imageCardClassname,
}: ImagePickerProps) {
  const defaultImages =
    typeof (!inputProps || inputProps?.value) == 'string'
      ? images
      : inputProps?.value

  const _folderPath =
    typeof inputProps?.value == 'string' ? inputProps?.value : folderPath

  const [_images, setImages] = React.useState(defaultImages)

  let _deletedIndex = -1
  const _onImageRemove =
    (onImageRemove: (index?: number) => void, index: number) => () => {
      _deletedIndex = index
      onImageRemove(index)
    }

  const _onChange = async (imageList: any[], idx?: number[]) => {
    let result = null
    if (idx) {
      //add and update to cloud
      //
      if (firebaseConfigOptions && _folderPath) {
        //set loading property on image
        setImage(imageList, { loading: true }, idx)
        setImages(imageList)
        //get path for update or adding
        const path = _images[idx[0]]?.dataURL || _folderPath
        const file = imageList[idx[0]]?.file
        //upload to cloud
        result = await uploadImageToCloud(path, file)
      }
    } else {
      //remove from cloud
      if (firebaseConfigOptions && _folderPath) {
        //get path
        const path = _images[_deletedIndex]?.dataURL
        //remove from cloud
        path && (await removeImageFromCloud(path))
      }
    }
    if (result) {
      setImage(imageList, result, idx, true)
    }

    setImages([...[], ...imageList])

    publishOnChangeEvent(payloadAsPath ? _folderPath : _images)
  }

  const publishOnChangeEvent = (
    payload?: string | Record<string, unknown>[]
  ) => {
    inputProps.onChange(payload)
  }

  useEffect(() => {
    if (firebaseConfigOptions && _folderPath) {
      if (getApps().length === 0) {
        initializeApp(firebaseConfigOptions)
      } else {
        getApp()
      }
      //list images
      if (!_images?.length) {
        getImageListFromCloud(_folderPath).then((results) => {
          setImages(results)
          publishOnChangeEvent(results)
        })
      }
    }
    return () => {}
  }, [])

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={_images}
        onChange={_onChange}
        maxNumber={maxNumber}
        maxFileSize={maxFileSize}
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          // write your building UI
          <>
            <ul
              className={classNames(' sm:columns-2 columns-xl gap-5 space-y-5')}
            >
              {imageList.map((image: ImageType, index) => (
                <ImageCard
                  loading={image.loading}
                  key={index}
                  onRemove={_onImageRemove(onImageRemove, index)}
                  onEdit={() => onImageUpdate(index)}
                  source={image.dataURL}
                  className={imageCardClassname}
                />
              ))}
              <ImageCard
                className={imageCardClassname}
                source={''}
                onClick={onImageUpload}
              />
            </ul>
          </>
        )}
      </ImageUploading>
    </div>
  )
}
