import ListGroup from 'react-bootstrap/ListGroup';

import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Link to="/dashboard">Dashboard</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/userType">User Type</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/userMaster">User Master</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/booksMaster">Books Master</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/author">Author</Link>
                </ListGroup.Item>
            </ListGroup>
        </nav>
    )
}

export default NavBar;