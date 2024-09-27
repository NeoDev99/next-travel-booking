import React from "react";

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen bg-gray-800">
            {/* Background video */}
            <video
                src="/hero.mp4"
                muted
                autoPlay
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            />
            {/* Content overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Our Travel Site</h1>
                    <p className="text-lg mb-6">Discover amazing places with us</p>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
