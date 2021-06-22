import './index.css';

import { Button, Badge } from 'react-bootstrap';

const Dashboard = () => {

    return (
        <div className="app-page">

            <div className="status-panel">
                <div className="status-panel-item">
                    New Requests
                    <h1>9</h1>
                </div>

                <div className="status-panel-item">
                    Pending Requests
                    <h1>0</h1>
                </div>

                <div className="status-panel-item">
                    Book Returns
                    <h1>2</h1>
                </div>

                <div className="status-panel-item">
                    Books Available
                    <h1>120</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;