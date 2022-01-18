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
   * callback for when images are changed or get added
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
  /**
   * callback before an image is deleted from cloud
   */
  onBeforeImageRemove?: (payload: {
    onImageRemove: (index: number) => void
    deletedIndex: number
    images: ImageType[]
  }) => void
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
  onBeforeImageRemove,
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
      const images = _images.filter((_, indx) => _deletedIndex != indx)
      //console.log(_images[_deletedIndex])
      //console.log(images)
      //console.log(_images)
      //console.log(_deletedIndex)
      onBeforeImageRemove
        ? onBeforeImageRemove({ onImageRemove, deletedIndex: index, images })
        : onImageRemove(index)
      //console.log(_deletedIndex)
      //onImageRemove(index)
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

    publishOnChangeEvent(payloadAsPath ? _folderPath : imageList)
  }

  const publishOnChangeEvent = (
    payload?: string | Record<string, unknown>[]
  ) => {
    //console.log(payload)
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
            <ul className={classNames('grid sm:grid-cols-2 grid-cols-1 gap-5')}>
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
              <div
                className={classNames(
                  imageList.length ? 'col-span-1' : 'col-span-2'
                )}
              >
                <ImageCard source={''} onClick={onImageUpload} />
              </div>
            </ul>
          </>
        )}
      </ImageUploading>
    </div>
  )
}
