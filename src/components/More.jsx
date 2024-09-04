import React from 'react';
import '../css/more.css';

function More() {
    return (
        <div className="more-container">
            <div className="h3">
                <h3>Explore more content</h3>
                <p>Discover new features, articles, and tools that will <br />help you manage your finances more effectively.</p>
                <div>
                    <button className="but">
                        <svg
                            viewBox="0 0 16 16"
                            className="bi bi-lightning-charge-fill"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
                            />
                        </svg>
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default More;
