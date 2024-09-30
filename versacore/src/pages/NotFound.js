import React from "react";

function NotFound() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <p className="fs-3">
                    <span className="text-danger">Oops!</span> Page not found.
                </p>
                <p className="lead mb-4">
                    The page you're looking for doesn't exist.
                </p>
                <a href="/" className="btn btn-primary btn-lg">Go Home</a>
            </div>
        </div>
    );
}

export default NotFound;