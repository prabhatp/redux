import React from 'react';
import ComponentF from './ComponentF';
import { UserContext, ChannelContext } from '../../../src/App';
import { useContext } from 'react';

function ComponentE() {
    const user = useContext(UserContext);
    const chanel = useContext(ChannelContext);
    return (
        <>
        Component E: user: {user} and channel : {chanel}
        <ComponentF />
        </>
    )
}

export default ComponentE;