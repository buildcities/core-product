import { MetaTags } from '@redwoodjs/web'
import React from 'react'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import MessagesLeft from '../../components/MessagesLeft/MessagesLeft'
import MessagesRight from '../../components/MessagesRight/MessagesRight'
import { messagesData } from '../../components/MessagesLeft/presets'
import {
  dataOwner,
  dataUser,
  dataContact,
} from '../../components/MessagesRight/presets'
import locationImage from './locationImage.png'

const HubContactPage = () => {
  return (
    <>
      <TwoColumnLayoutLayout
        metaTitle="Hub Contact Page"
        sideBar={<MessagesLeft data={messagesData} />}
      >
        <MetaTags title="HubContact" />
        <div>
          <MessagesRight
            data={[dataUser, dataOwner]}
            locationImage={locationImage}
            dataContact={dataContact}
          />
        </div>
      </TwoColumnLayoutLayout>
    </>
  )
}

export default HubContactPage
