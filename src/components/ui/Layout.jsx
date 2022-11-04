import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" className='p-3'>
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export const Layout = () => {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Header />
                <section className='layout container-fluid' style={{ minHeight: '650px', paddingTop: '20px' }}>
                    <Outlet />
                </section>
                <Footer />
            </ErrorBoundary>
        </>
    )
}
