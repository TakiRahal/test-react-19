import {Suspense} from 'react'
import './App.css'
import Header from "./components/template/header/components/Header";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import RoutesApp from "./config/routes/components/RoutesApp";
import Footer from "./components/template/footer/Footer";

// Create a client
const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header data-testid="header"/>
                <main data-testid="main">
                    <RoutesApp />
                </main>
                <Footer data-testid="footer"/>
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
