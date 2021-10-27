import React from 'react';
import {useSelector} from "react-redux";

export const Profile = () => {
    const login = useSelector(state => state.form.login)

    return (
        <h1>{login}</h1>
    );
};