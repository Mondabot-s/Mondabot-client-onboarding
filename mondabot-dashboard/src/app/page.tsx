"use client";

import Image from 'next/image';

export default function HomePage() {
    return (
        <div>
            <div className="space-y-6">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Left column */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Welcome Video */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Welcome to your Dashboard!</h3>
                            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                                <iframe 
                                    src="https://player.vimeo.com/video/1068762817?h=1234567890abcdef&title=0&byline=0&portrait=0" 
                                    frameBorder="0" 
                                    allow="autoplay; fullscreen; picture-in-picture" 
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                ></iframe>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">A personal message from our CEO explaining the automation process.</p>
                        </div>

                        {/* Action Required Alert */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                            <div className="flex items-start">
                                <i className="fas fa-exclamation-triangle text-yellow-500 text-lg mr-3"></i>
                                <div>
                                    <h4 className="font-bold text-yellow-800">Action Required</h4>
                                    <p className="text-yellow-700 mt-1 mb-2">We need your feedback on the WhatsApp bot conversation flows before we can proceed to launch.</p>
                                    <button className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors font-semibold">
                                        <i className="fas fa-comment-dots mr-2"></i>Provide Feedback
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                                <div className="p-3 rounded-full bg-blue-100"><i className="fas fa-rocket text-lg text-blue-600"></i></div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">4</p>
                                    <p className="text-gray-500">Automations</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                                <div className="p-3 rounded-full bg-green-100"><i className="fas fa-check-circle text-lg text-green-600"></i></div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">12</p>
                                    <p className="text-gray-500">Tasks Done</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                                <div className="p-3 rounded-full bg-purple-100"><i className="fas fa-plug text-lg text-purple-600"></i></div>
                                <div className="ml-4">
                                    <p className="text-2xl font-bold text-gray-900">8</p>
                                    <p className="text-gray-500">Integrations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Project Manager */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Your Project Manager</h3>
                            <div className="flex flex-col items-center text-center">
                                <Image 
                                    src="/Sergio_Bernal.jpg" 
                                    alt="Sergio Bernal" 
                                    width={96} 
                                    height={96} 
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <h4 className="text-xl font-bold text-gray-900">Sergio Bernal</h4>
                                <p className="text-gray-500 mb-4">CEO & Lead Strategist</p>
                                <div className="space-y-2 w-full text-left">
                                    <a href="mailto:sergio@mondabot.com" className="flex items-center text-gray-700 hover:text-pink-600">
                                        <i className="fas fa-envelope w-6 text-center text-gray-400 mr-2"></i> sergio@mondabot.com
                                    </a>
                                    <a href="tel:+34634800790" className="flex items-center text-gray-700 hover:text-pink-600">
                                        <i className="fas fa-phone w-6 text-center text-gray-400 mr-2"></i> +34 634 800 790
                                    </a>
                                </div>
                                <a href="https://calendly.com/mondabot/30min?month=2025-06" target="_blank" rel="noopener noreferrer" 
                                   className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors w-full mt-4 inline-block text-center">
                                    <i className="fas fa-calendar-alt mr-2"></i>Schedule a Call
                                </a>
                            </div>
                        </div>

                        {/* Next Milestone */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4">Next Milestone</h3>
                            <div className="text-center">
                                <p className="text-4xl font-bold text-pink-600">July 1st</p>
                                <p className="text-gray-500 mb-3">in 3 days</p>
                                <p className="font-semibold text-lg text-gray-900">Launch WhatsApp Support Bot</p>
                                <p className="text-gray-600 text-sm">Automated customer support with AI-powered responses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 