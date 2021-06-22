import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AppContext } from '../../../appContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AppContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.isLoggedIn ? (children) : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            }
        />
    );
}

export default PrivateRoute;