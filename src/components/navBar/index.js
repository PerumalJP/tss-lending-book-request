import ListGroup from 'react-bootstrap/ListGroup';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-bar .d-none">
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/userType">User Type</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/userMaster">User Master</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/booksMaster">Books Master</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                    <NavLink to="/author">Author</NavLink>
                </ListGroup.Item>
            </ListGroup>
        </nav>
    )
}

export default NavBar;