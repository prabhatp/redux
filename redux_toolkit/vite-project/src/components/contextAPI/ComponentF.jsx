import React from 'react';
import { UserContext, ChannelContext } from '../../../src/App';

function ComponentF() {
    return(
        <div>
            <UserContext.Consumer>
                {
                    (test) => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    (channel) => {
                                        return <div>Channel : {channel} and user {test}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF;