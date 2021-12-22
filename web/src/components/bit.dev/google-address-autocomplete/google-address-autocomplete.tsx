/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import { TextInput } from '@buildcities/build-ui.ui.base.text-input'
import { Paragraph } from '@buildcities/build-ui.ui.base.paragraph'
import { IconItem } from '@buildcities/build-ui.ui.base.icon-item'
import { Loader, DEFAULT_ID } from '@googlemaps/js-api-loader'
import classNames from 'classnames'
import { continentsByCountry } from './presets'

export type GoogleAddressAutoCompleteResultProps = {
  title?: string
  lat?: string
  lng?: string
}

export type GoogleAddressAutocompleteProps = {
  apiKey?: string
  inputProps?: any
  defaultValue?: GoogleAddressAutoCompleteResultProps
}

const renderFunc =
  () =>
  ({ getInputProps, getSuggestionItemProps, suggestions, loading }) => {
    return (
      <div className="autocomplete-root relative">
        <TextInput
          icon="search"
          name="address-search"
          placeholder="Search for a location"
          inputProps={getInputProps()}
        />
        <div
          className={classNames(
            'bg-cardBackground absolute z-10 block w-full sm:text-sm text-paragraph',
            suggestions?.length && 'p-3'
          )}
        >
          {loading && <Paragraph text="...loading" />}
          {suggestions.map((suggestion) => (
            <div
              {...getSuggestionItemProps(suggestion)}
              key={suggestion.placeId}
              className="h-6 group  my-2 cursor-pointer  flex"
            >
              <IconItem
                className="w-5 h-5 mr-3 group-hover:text-selected"
                icon="pin"
              />
              <Paragraph
                className="truncate  group-hover:text-white "
                text={suggestion.description}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

export function GoogleAddressAutocomplete({
  apiKey,
  inputProps,
  defaultValue,
}: GoogleAddressAutocompleteProps) {
  const loader = new Loader({
    apiKey,
    id: DEFAULT_ID,
    version: 'weekly',
    libraries: ['places'],
  })

  const [isLoaded, setIsLoaded] = useState(false)
  const [address, setAddress] = useState(
    inputProps?.value?.title || defaultValue?.title
  )

  const prepareResult = async (address) => {
    const results = await geocodeByAddress(address)
    const country = results[0].address_components.find(
      (item) => item.types[0] == 'country'
    ).long_name
    const continent = continentsByCountry[country]
    const { lat, lng } = await getLatLng(results[0])
    return { title: address, lat, lng, country, continent }
  }

  useEffect(() => {
    loader
      .load()
      .then(() => {
        setIsLoaded(true)
      })
      .catch((e) => {
        console.log(e)
      })
    return () => {}
  }, [])

  const _onChange = (address) => {
    setAddress(address)
  }

  const _onSelect = async (address) => {
    setAddress(address)
    const value = await prepareResult(address)
    inputProps?.onChange && inputProps.onChange(value)
  }

  return isLoaded ? (
    <>
      <PlacesAutocomplete
        onChange={_onChange}
        value={address}
        onSelect={_onSelect}
      >
        {renderFunc()}
      </PlacesAutocomplete>
    </>
  ) : (
    <></>
  )
}

GoogleAddressAutocomplete.defaultProps = {
  defaultValue: { title: '', lat: '', lng: '' },
}
