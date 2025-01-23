import React from 'react';

function OperationList() {
    const operations = [
        { id: 1, description: 'Grocery shopping', amount: -50 },
        { id: 2, description: 'Salary', amount: 1500 },
    ];

    return (
        <div className="p-6 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Operations</h2>
            <ul className="space-y-2">
                {operations.map((operation) => (
                    <li key={operation.id} className="flex justify-between p-2 bg-gray-100 rounded">
                        <span>{operation.description}</span>
                        <span
                            className={`font-semibold ${operation.amount > 0 ? 'text-green-500' : 'text-red-500'
                                }`}
                        >
                            {operation.amount} €
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default OperationList;
