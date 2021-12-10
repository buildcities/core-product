import React from 'react'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout'
import MapHubsCell from 'src/components/MapHubsCell'

const MapViewPage = () => {
  return (
    <SingleColumnLayout metaTitle="Home">
      <div className="text-white">
        <MapHubsCell />
      </div>
    </SingleColumnLayout>
  )
}

export default MapViewPage
