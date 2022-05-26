import './App.css'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Logout from './Logout'
import TestFunctions from './TestFunctions'

function App() {
	const [session, setSession] = useState(null)

	useEffect(() => {
		setSession(supabase.auth.session())

		supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	}, [])
	return (
		<div className='App'>
			<header className='App-header'>
				<p>Supabase Custom Claims Demo Application</p>
			</header>
			<div>
				{!session ? 
          <Auth /> 
          : 
          <>
            <Logout />
            <TestFunctions session={session} />
          </>
        }
			</div>
		</div>
	)
}

export default App