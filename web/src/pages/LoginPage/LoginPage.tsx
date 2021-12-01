import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoginPage = () => {
  return (
    <>
      <MetaTags
        title="Login"
        // description="Login description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.tsx</code>
      </p>
      <p>
        My default route is named <code>login</code>, link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>
    </>
  )
}

export default LoginPage
