import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TwoColumnLayoutLayout from 'src/layouts/TwoColumnLayoutLayout/TwoColumnLayoutLayout'
import Messages from '../../components/Messages/Messages'
import { messagesData } from '../../components/Messages/presets'

const HubContactPage = () => {
  return (
    <>
      <TwoColumnLayoutLayout
        metaTitle="Hub Contact Page"
        sideBar={<Messages data={messagesData} />}
      >
        <MetaTags title="HubContact" />
        <p>
          Find me in{' '}
          <code>./web/src/pages/HubContactPage/HubContactPage.tsx</code>
        </p>
        <p>
          My default route is named <code>hubContact</code>, link to me with `
          <Link to={routes.hubContact()}>HubContact</Link>`
        </p>
      </TwoColumnLayoutLayout>
    </>
  )
}

export default HubContactPage
