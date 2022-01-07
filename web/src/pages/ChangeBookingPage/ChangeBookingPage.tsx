/* eslint-disable react-hooks/exhaustive-deps */
import ChangeBookingCell from 'src/components/ChangeBookingCell'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'

const ChangeBookingPage = ({ id }) => {
  return (
    <SingleColumnLayout metaTitle="Change booking">
      <ChangeBookingCell id={id} />
    </SingleColumnLayout>
  )
}

export default ChangeBookingPage
