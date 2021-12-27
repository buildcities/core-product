import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import MessagesLeft from '../../components/MessagesLeft/MessagesLeft'
import MessagesRight from '../../components/MessagesRight/MessagesRight'
import { messagesData } from '../../components/MessagesLeft/presets'
import {
  dataRightSide,
  dataContact,
} from '../../components/MessagesRight/presets'
import locationImage from './locationImage.png'

console.log(dataRightSide, messagesData)

const HubContactPage = () => {
  return (
    <>
      <TwoColumnLayoutLayout
        metaTitle="Hub Contact Page"
        sideBar={<MessagesLeft data={messagesData} />}
      >
        <MetaTags title="HubContact" />
        <MessagesRight
          data={dataRightSide}
          locationImage={locationImage}
          dataContact={dataContact}
        />
      </TwoColumnLayoutLayout>
    </>
  )
}

export default HubContactPage
