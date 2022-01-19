import ApprovedReservationsCell from 'src/components/ApprovedReservationsCell'
import NftDetail from 'src/components/NftDetail/NftDetail'
import SplitContainer from 'src/components/SplitContainer/SplitContainer'
import SingleColumnLayout from 'src/layouts/SingleColumnLayout/SingleColumnLayout'

const TITLE = 'My Profile'

const ProfilePage = () => {
  return (
    <SingleColumnLayout
      className="w-full"
      metaDescription="Your profile"
      metaTitle="Profile"
    >
      <SplitContainer title={TITLE} renderRight={() => <NftDetail />}>
        <ApprovedReservationsCell />
      </SplitContainer>
    </SingleColumnLayout>
  )
}

export default ProfilePage
