import React, { useState } from 'react';

const Requests: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [floor, setFloor] = useState('');
    const [room, setRoom] = useState('');
    const [block, setBlock] = useState('');
    const [guestName, setGuestName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service, setService] = useState('');
    const [department, setDepartment] = useState('');
    const [priority, setPriority] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const [requests, setRequests] = useState<any[]>([]);

    // Handle form submission
    const handleSubmit = () => {
        if (floor && room && guestName && phoneNumber) {
            const newRequest = {
                id: requests.length + 1,
                floor,
                room,
                block,
                guestName,
                phoneNumber,
                service,
                department,
                priority,
                status: 'NEW', // Set a default status for now
                createdOn: new Date().toLocaleDateString(), // Example date format
                location: `${floor}-${room}`
            };

            setRequests([...requests, newRequest]);
            setIsModalOpen(false); // Close modal after submission
            // Clear the form fields after submission
            setFloor('');
            setRoom('');
            setBlock('');
            setGuestName('');
            setPhoneNumber('');
            setService('');
            setDepartment('');
            setPriority('');
            setFile(null);
        }
    };

    // Handle file upload
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    // Utility function to get status color
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'NEW':
                return 'text-green-600';
            // Add more status cases if needed
            default:
                return 'text-gray-600';
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-700">Requests Management</h1>
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 mb-4"
            >
                Create New Request
            </button>

            {/* Modal for New Request Form */}
            {isModalOpen && (
                <>
                    {/* Background Overlay */}
                    <div className="fixed inset-0 bg-gray-900 opacity-50 backdrop-blur-sm z-40"></div>
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="bg-white shadow-lg rounded-lg p-10 max-w-md w-[80%] my-8 mx-auto">
                            <h2 className="text-xl font-bold mb-4">Create New Request</h2>

                            <div className="grid grid-cols-1 gap-4">
                                {/* Form Input Fields */}
                                <input type="text" placeholder="Floor" value={floor} onChange={(e) => setFloor(e.target.value)} className="border p-2 rounded" />
                                <input type="text" placeholder="Room / Unit" value={room} onChange={(e) => setRoom(e.target.value)} className="border p-2 rounded" />
                                <input type="text" placeholder="Block" value={block} onChange={(e) => setBlock(e.target.value)} className="border p-2 rounded" />
                                <input type="text" placeholder="Guest Name" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="border p-2 rounded" />
                                <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border p-2 rounded" />
                                <input type="text" placeholder="Service" value={service} onChange={(e) => setService(e.target.value)} className="border p-2 rounded" />
                                <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} className="border p-2 rounded" />

                                {/* Priority Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                                    <select
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                        className="border-gray-300 p-2 w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select Priority</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
                                    <input type="file" onChange={handleFileChange} className="border-gray-300 p-3 w-full rounded-md shadow-sm" />
                                </div>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 mt-4"
                            >
                                Submit
                            </button>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 mt-4"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* List of requests as a table */}
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto mt-6">
                <h2 className="text-xl font-semibold mb-4">Requests</h2>
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr className="bg-yellow-100 text-gray-700">
                            <th className="p-3">SL No.</th>
                            <th className="p-3">Request ID</th>
                            <th className="p-3">Created On</th>
                            <th className="p-3">Location</th>
                            <th className="p-3">Guest Name</th>
                            <th className="p-3">Service</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Priority</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.length > 0 ? (
                            requests.map((request, index) => (
                                <tr key={request.id} className="border-b">
                                    <td className="p-3">{index + 1}</td>
                                    <td className="p-3">{request.id}</td>
                                    <td className="p-3">{request.createdOn}</td>
                                    <td className="p-3">{request.location}</td>
                                    <td className="p-3">{request.guestName}</td>
                                    <td className="p-3">{request.service}</td>
                                    <td className={`p-3 font-semibold ${getStatusColor(request.status)}`}>
                                        {request.status}
                                    </td>
                                    <td className="p-3 font-semibold">{request.priority}</td>
                                    <td className="p-3">
                                        <button className="text-blue-500 hover:underline">View</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={9} className="p-3 text-center text-gray-500">No requests available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Requests;
