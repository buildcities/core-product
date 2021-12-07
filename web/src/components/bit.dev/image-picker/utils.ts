/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from 'firebase/storage'

export const getImageListFromCloud = async (folderPath: string) => {
  const storage = getStorage()
  //console.log(storage);
  const listRef = ref(storage, folderPath)
  const { items } = await listAll(listRef)
  return Promise.all(
    items.map(async (ref) => ({ dataURL: await getDownloadURL(ref) }))
  )
}

export const uploadImageToCloud = async (path: string, file: File) => {
  const storage = getStorage()
  const filePath = file ? `${path}/${file.name}` : path
  const imageRef = ref(storage, filePath)
  const result = await uploadBytes(imageRef, file)
  return { dataURL: await getDownloadURL(result.ref) }
}

export const removeImageFromCloud = async (path: string) => {
  const storage = getStorage()
  const imageRef = ref(storage, path)
  return deleteObject(imageRef)
}

export const setImage = (
  imageList: any[],
  edit: Record<string, unknown>,
  idx: number[],
  overwrite?: boolean
) => {
  imageList[idx[0]] = overwrite ? edit : { ...imageList[idx[0]], ...edit }
  return imageList
}

/* export const addUpdateToCloud = async (file: File, folderPath: string) => {
  const result = await uploadImageToCloud(folderPath, file);
  setImage(imageList, { dataURL: result }, idx, true);
  setImages([...[], ...imageList]);
}; */
