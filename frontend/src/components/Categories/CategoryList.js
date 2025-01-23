import React from 'react';

function CategoryList() {
    const categories = ['Food', 'Rent', 'Salary', 'Leisure'];

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <li key={index} className="p-2 bg-gray-100 rounded">
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CategoryList;
