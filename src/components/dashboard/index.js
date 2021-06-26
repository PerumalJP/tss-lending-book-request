import './index.css';
import { MetaTags } from 'react-meta-tags';
import { Button, Badge } from 'react-bootstrap';

const Dashboard = () => {

    return (
        <div className="app-page">

            <MetaTags id="3">
                <title>Dashboard | Lending Books</title>
                <meta name="description" content="Lending books for students dashboard" />
                <meta name="keywork" content="Books, Lending books, Search books"/>
                <meta property="og:title" content="Lending books dashboard" />

            </MetaTags>

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