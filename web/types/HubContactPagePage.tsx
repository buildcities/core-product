import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HubContactPagePage = () => {
  return (
    <>
      <MetaTags
        title="HubContactPage"
        // description="HubContactPage description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>HubContactPagePage</h1>
      <p>
        Find me in <code>./web/src/pages/HubContactPagePage/HubContactPagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>hubContactPage</code>, link to me with `
        <Link to={routes.hubContactPage()}>HubContactPage</Link>`
      </p>
    </>
  )
}

export default HubContactPagePage
