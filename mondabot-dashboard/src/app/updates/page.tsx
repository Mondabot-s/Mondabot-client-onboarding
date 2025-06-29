"use client";

export default function UpdatesPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Recent Updates</h2>
            <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start">
                        <div className="p-2 rounded-full bg-green-100 mr-4">
                            <i className="fas fa-check text-green-600"></i>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">Lead Qualification Bot Deployed</h4>
                            <p className="text-gray-600">Your lead qualification automation is now live and processing incoming leads.</p>
                            <p className="text-sm text-gray-500 mt-1">2 days ago</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start">
                        <div className="p-2 rounded-full bg-blue-100 mr-4">
                            <i className="fas fa-cog text-blue-600"></i>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900">WhatsApp Bot Configuration</h4>
                            <p className="text-gray-600">We&apos;ve configured your WhatsApp bot with your business information and conversation flows.</p>
                            <p className="text-sm text-gray-500 mt-1">4 days ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 