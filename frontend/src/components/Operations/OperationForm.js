import React, { useState } from 'react';

function OperationForm() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Add Operation</h2>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                Add Operation
            </button>
        </form>
    );
}

export default OperationForm;
