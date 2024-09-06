import React from 'react'
import Header from './Header'

function NotFound() {
    return (
        <div>
            <Header />
            <div className="container text-center">
                <dotlottie-player src="https://lottie.host/ff513abc-3863-446e-8d6a-c944a3a757df/IzkiYIeyKX.json" background="transparent" speed="1" style={{ width: "300px", height: "300px",margin:"7rem auto 0rem auto" }} loop autoplay></dotlottie-player>
                <p>The page you're looking for doesn't exist.</p>
            </div>
        </div>
    )
}

export default NotFound
