import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { Toaster } from '@redwoodjs/web/toast'
import { MoralisProvider } from 'react-moralis'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
//import '@buildcities/build-ui.tailwind-styles/dist/styles.css'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={supabaseClient} type="supabase">
        <MoralisProvider
          appId={process.env.MORALIS_APP_ID}
          serverUrl={process.env.MORALIS_SERVER_URL}
        >
          <RedwoodApolloProvider>
            <Toaster
              toastOptions={{
                className: 'bg-cardBackground text-white min-w-sm',
              }}
            />
            <Routes />
          </RedwoodApolloProvider>
        </MoralisProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
