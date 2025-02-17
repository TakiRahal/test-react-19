import {Suspense} from 'react'
import './App.css'
import Header from "./config/shared/header/components/Header.tsx";
import Footer from "./config/shared/footer/Footer.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import RoutesApp from "./config/routes/components/RoutesApp.tsx";

// Create a client
const queryClient = new QueryClient()

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <main>
                    <RoutesApp />
                </main>
                <Footer />
            </Suspense>
        </QueryClientProvider>
    )
}

export default App
