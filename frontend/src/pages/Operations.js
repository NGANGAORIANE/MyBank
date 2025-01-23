import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OperationList from '../components/Operations/OperationList';
import OperationForm from '../components/Operations/OperationForm';

function Operations() {
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/operations')
            .then(response => setOperations(response.data))
            .catch(error => console.error('Error fetching operations', error));
    }, []);

    return (
        <div>
            <h2>Operations</h2>
            <OperationForm />
            <OperationList operations={operations} />
        </div>
    );
}

export default Operations;
