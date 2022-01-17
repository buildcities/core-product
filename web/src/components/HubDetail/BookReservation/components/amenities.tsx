import React from 'react'
import { Card, Heading } from '@buildcities/build-ui.components.all'

import {
  amenities as orderedAmenities,
  amenitiesProps,
} from 'src/components/ListHubs/ListHubsStep3/presets'
import { capitalize, omit, pick, without } from 'lodash'
import { iconMap } from './presets'

const prepareAmenties: (props: amenitiesProps) => amenitiesProps = (
  amenities: amenitiesProps
) => {
  if (amenities) {
    const toBeMerged = pick(amenities, ['custom', 'other'])
    const toBeDisplayed = omit(amenities, ['custom'])
    const OtherMergedWithCustom = [
      ...toBeMerged.other,
      ...toBeMerged.custom.map((item) => item.label),
    ]
    toBeDisplayed.other = OtherMergedWithCustom
    return toBeDisplayed
  }
  return null
}

type AmenitiesProps = {
  amenities: amenitiesProps
}

export default function Amenities({ amenities }: AmenitiesProps) {
  const _amenities = prepareAmenties(amenities)
  return _amenities ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.keys(omit(orderedAmenities, ['custom'])).map((key) => (
        <Card key={key} text={capitalize(key)} icon={iconMap[key]}>
          <div className="flex space-x-2 mt-[10px]">
            {without(_amenities[key], null).map((item, indx) => (
              <div
                key={indx}
                className="border p-2 rounded-lg border-outline bg-cardBackground"
              >
                <Heading text={item} type="H5" />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  ) : (
    <></>
  )
}
