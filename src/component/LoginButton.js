import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'semantic-ui-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button color="green" onClick={() => loginWithRedirect()}>Log In</Button>
        )
    )
};

export default LoginButton;