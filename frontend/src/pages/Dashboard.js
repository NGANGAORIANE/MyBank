import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h1>Welcome to myBank</h1>
            <nav>
                <ul>
                    <li><Link to="/operations">Manage Operations</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;
