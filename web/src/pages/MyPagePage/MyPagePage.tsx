import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyPagePage = () => {
  return (
    <>
      <MetaTags
        title="MyPage"
        // description="MyPage description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>MyPagePage</h1>
      <p>
        Find me in <code>./web/src/pages/MyPagePage/MyPagePage.tsx</code>
      </p>
      <p>
        My default route is named <code>myPage</code>, link to me with `
        <Link to={routes.myPage()}>MyPage</Link>`
      </p>
    </>
  )
}

export default MyPagePage
