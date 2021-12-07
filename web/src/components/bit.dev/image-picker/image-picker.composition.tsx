import React from 'react'
import { ImagePicker } from './image-picker'
import { ImageType } from 'react-images-uploading'

const images: ImageType[] = [
  {
    dataURL:
      'https://images.pexels.com/photos/7147284/pexels-photo-7147284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
]

const onChange = console.log

export const BasicImagePicker = () => <ImagePicker images={images} />

export const BasicNoImagePicker = () => <ImagePicker images={[]} />

export const BasicCloudImagePicker = () => (
  <ImagePicker
    inputProps={{ onChange }}
    firebaseConfigOptions={{
      apiKey: 'AIzaSyAyelDKkmeb7cUo4k31JG7pZCviz9jx0nw',

      authDomain: 'buildcities-members-app.firebaseapp.com',

      projectId: 'buildcities-members-app',

      storageBucket: 'buildcities-members-app.appspot.com',

      messagingSenderId: '492048766181',

      appId: '1:492048766181:web:13f8adde329c815be5b00c',

      measurementId: 'G-Y805R45SPY',
    }}
    folderPath="testFolder"
    images={[]}
  />
)
