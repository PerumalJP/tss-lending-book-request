
import './index.css';
import { Button } from 'react-bootstrap';
import { AppContext } from '../../appContext';
import { useContext } from 'react';


const Header = () => {

    const { setUser } = useContext(AppContext);

    const handleLogout = () => {
        localStorage.setItem('isLoggedIn', false);
        setUser({ isLoggedIn: false });
    }

    return (
        <div className="app-header">
            <header>
                <img className="app-logo" src="tss-logo.png" alt="logo" />
                <h5>LENDING BOOKS REQUEST APPROVAL</h5>
                <div>
                    <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
                </div>
            </header>
        </div>
    )
}

export default Header;