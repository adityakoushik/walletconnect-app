import React from 'react'
import { AppKitProvider } from './AppKitProvider.tsx'
import ConnectButton from './ConnectButton.tsx'

const App: React.FC = () => {
	return (
		<AppKitProvider>
			<div className="App">
				<header className="App-header">
					<h1>Welcome to WalletConnect App</h1>
					<ConnectButton />
				</header>
			</div>
		</AppKitProvider>
	)
}

export default App
