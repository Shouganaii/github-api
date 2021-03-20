import React from 'react';

import {  useSelector } from 'react-redux';

const UserInfo = () => {

    const { user_data: { login, avatar_url }, user_data } = useSelector(state => state.user)
    
    return (
        <div>{login}</div>
    )
}

export default UserInfo;
