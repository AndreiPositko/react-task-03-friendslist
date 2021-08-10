import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styled';

const FriendItem = (props) => {
    const { name, avatar, isOnline } = props
    return (
        <Styled.Item>
            <Styled.Status isOnline={ isOnline }></Styled.Status>
            <Styled.Avatar src={ avatar } />
            <Styled.Name>{ name }</Styled.Name>
        </Styled.Item>
    )
}


FriendItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
export default FriendItem;
