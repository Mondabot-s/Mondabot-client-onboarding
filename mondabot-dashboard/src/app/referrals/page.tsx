"use client";

export default function ReferralsPage() {
    const handleReferralSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Referral submitted.');
        e.currentTarget.reset();
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Refer & Win</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Refer a Friend</h3>
                    <p className="text-gray-600 mb-6">Get $500 credit for each successful referral!</p>
                    <form onSubmit={handleReferralSubmit} className="space-y-4">
                        <input type="text" placeholder="Friend's Name" className="w-full p-3 border border-gray-300 rounded-lg" required />
                        <input type="email" placeholder="Friend's Email" className="w-full p-3 border border-gray-300 rounded-lg" required />
                        <textarea placeholder="Why would they benefit from our service?" className="w-full p-3 border border-gray-300 rounded-lg h-24" required></textarea>
                        <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors">
                            Send Referral
                        </button>
                    </form>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Your Referrals</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>John Smith</span>
                            <span className="px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">Pending</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                            <span>Sarah Johnson</span>
                            <span className="px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">Approved</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 