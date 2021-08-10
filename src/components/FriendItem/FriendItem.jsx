import React from 'react';

import * as Styled from './styled';

const FriendItem = (props) => {
    const { id, name, avatar, isOnline } = props
    return (
        <Styled.Item>
            <Styled.Status isOnline={ isOnline }></Styled.Status>
            <Styled.Avatar src={ avatar } />
            <Styled.Name>{ name }</Styled.Name>
        </Styled.Item>
    )
}

export default FriendItem;
