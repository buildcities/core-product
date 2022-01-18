import React from 'react'
import { Card, Heading } from '@buildcities/build-ui.components.all'
import { motion } from 'framer-motion'

import {
  amenities as orderedAmenities,
  amenitiesProps,
} from 'src/components/ListHubs/ListHubsStep3/presets'
import { omit, pick, without } from 'lodash'
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
  let delay = 1.2
  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  // Fade in each card
  return _amenities ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {Object.keys(omit(orderedAmenities, ['custom'])).map((key) => {
        delay += 0.2
        return (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.7,
              delay: delay,
            }}
            key={key}
          >
            <Card text={capitalizeFirstLetter(key)} icon={iconMap[key]}>
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
          </motion.div>
        )
      })}
    </div>
  ) : (
    <></>
  )
}
