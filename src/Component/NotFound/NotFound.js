import React from 'react';

const NotFound = () => {
    return (
        <div className="h-screen bg-white text-center">
            <img className="h-5/6 w-screen" src="https://i.ibb.co/jGgqbYZ/istockphoto-1149316411-612x612.jpg" alt="" />
            <h1 className="fw-bold">Page Not Found!</h1>
            <p className="text-muted">The page you are looking for has not been found on our server.</p>
        </div>
    );
};

export default NotFound;