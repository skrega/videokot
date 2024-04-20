import NextNProgress from 'nextjs-progressbar'
import '../src/styles/global.scss';
//import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import CartProvider from '@/context/CartContext';
import { Provider } from 'react-redux'
import store from '../src/store/index'

// const queryClient = new QueryClient()

const App = ({ Component, pageProps }) => {
	return ( <>
			<NextNProgress
				color='#E71F2A'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
			/>
			<Provider store={store}>
				<CartProvider>
					<Component {...pageProps} />
				</CartProvider>
			</Provider>
        </>
	)
}
export default App