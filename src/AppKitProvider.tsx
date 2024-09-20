import React from 'react'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.reown.com
const projectId = '63cbe8d7afec3c56263a71a76533afca' // Replace with your actual Project ID

// 2. Create a metadata object - optional
const metadata = {
	name: 'AppKit',
	description: 'AppKit Example',
	url: 'https://web3modal.com', // Origin must match your domain & subdomain
	icons: ['https://avatars.githubusercontent.com/u/179229932']
}

export const networks = [mainnet, arbitrum]

// 3. Create Wagmi Adapter
const wagmiConfig = new WagmiAdapter({
	ssr: true,
	networks,
	projectId
})

// 4. Create modal
createAppKit({
	adapters: [wagmiConfig],
	networks: [mainnet, arbitrum],
	metadata,
	projectId,
	features: {
		analytics: true // Optional - defaults to your Cloud configuration
	}
})

export function AppKitProvider({ children }: { children: React.ReactNode }) {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</WagmiProvider>
	)
}
