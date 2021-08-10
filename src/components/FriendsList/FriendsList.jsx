import React from 'react';

import FriendItem from '../FriendItem';

import * as Styled from './styled';

const FriendsList = (props) => {
    const { friends } = props;

    return (
        <Styled.Container>
            <Styled.Profile>
                {friends.map((friend) =>
                    <FriendItem
                        key={ friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )}
            </Styled.Profile>
        </Styled.Container>
    )
}

export default FriendsList;
