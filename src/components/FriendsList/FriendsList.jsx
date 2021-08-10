import React from 'react';
import PropTypes from 'prop-types';

import FriendItem from '../FriendItem';

import * as Styled from './styled';

const FriendsList = (props) => {
    const { friends } = props;

    return (
        <Styled.Container>
            <Styled.Profile>
                {friends.map((friend) =>
                    <FriendItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                )}
            </Styled.Profile>
        </Styled.Container>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}

export default FriendsList;
