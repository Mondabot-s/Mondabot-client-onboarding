"use client";

export default function AutomationsPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Active Automations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900">Lead Qualification Bot</h3>
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">Live</span>
                    </div>
                    <p className="text-gray-600 mb-2">Qualifies leads from web forms and routes them to sales reps.</p>
                    <p className="text-sm text-gray-500">Processed 47 leads today</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-yellow-500">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900">WhatsApp Support Bot</h3>
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">Testing</span>
                    </div>
                    <p className="text-gray-600 mb-2">Handles customer support inquiries via WhatsApp.</p>
                    <p className="text-sm text-gray-500">Ready for launch July 1st</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-900">CRM Integration</h3>
                        <span className="px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">Building</span>
                    </div>
                    <p className="text-gray-600 mb-2">Syncs lead data with your existing CRM system.</p>
                    <p className="text-sm text-gray-500">70% complete</p>
                </div>
            </div>
        </div>
    );
} 