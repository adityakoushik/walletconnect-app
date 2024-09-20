import React from 'react'
import ReactDOM from 'react-dom/client' // Notice the new import
import './index.css'
import App from './App.tsx'

// Get the root element
const rootElement = document.getElementById('root')

if (rootElement) {
	// Create a root
	const root = ReactDOM.createRoot(rootElement)

	// Initial render
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}