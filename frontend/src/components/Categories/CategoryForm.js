import React, { useState } from 'react';

function CategoryForm() {
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <form className="p-6 bg-white rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-4">Add Category</h2>
            <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">Category Name</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
                Add Category
            </button>
        </form>
    );
}

export default CategoryForm;
