import React from 'react'
import ControlledInput from 'src/components/ControlledInput/ControlledInput'
import { FilterButton } from 'src/components/bit.dev/filter-button'

type CustomAmenitiesProps = {
  name: string
  fields?: Record<'id', string>[]
  onDelete?: (index: number) => void
}

export const CustomAmenities = ({
  name,
  fields,
  onDelete,
}: CustomAmenitiesProps) => {
  const _onDelete = (indx: number) => () => {
    onDelete && onDelete(indx)
  }
  return (
    <>
      {fields.length ? (
        fields.map((field, index) => (
          <div key={index} className="mr-2 mb-2">
            <ControlledInput key={field.id} name={`${name}.${index}.label`}>
              {(inputProps) => (
                <FilterButton
                  showDeleteButton
                  isActive={true}
                  onDelete={_onDelete(index)}
                  type="large"
                  {...field}
                  inputProps={inputProps}
                />
              )}
            </ControlledInput>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  )
}
