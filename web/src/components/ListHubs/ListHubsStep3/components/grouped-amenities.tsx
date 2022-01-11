import {
  Card,
  CardProps,
  FilterButtonProps,
} from '@buildcities/build-ui.components.all'
import SelectButtons from 'src/components/SelectButtons/SelectButtons'

type GroupedAmenitiesProps = {
  label?: string
  className?: string
  name: string
  amenities?: FilterButtonProps[] | string[]
  cardProps?: CardProps
}

export const GroupedAmenities: React.FC<GroupedAmenitiesProps> = ({
  label,
  className,
  amenities,
  name,
  cardProps,
  children,
}) => {
  return (
    <div className={className}>
      <Card {...cardProps} text={label}>
        <SelectButtons
          selectProps={amenities}
          name={name}
          renderPeer={() => children}
        />
      </Card>
    </div>
  )
}
