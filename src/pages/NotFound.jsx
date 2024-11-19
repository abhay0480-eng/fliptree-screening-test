import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-2xl my-4">Page Not Found</p>
            <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;