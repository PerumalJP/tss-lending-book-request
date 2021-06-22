import { useState } from "react";

const useAuth = () => {
    let user = localStorage.getItem('isLoggedIn');
    user = (user === 'true') ? true : false;

    const [isLoggedIn] = useState(user);
    return isLoggedIn;
}

export default useAuth;