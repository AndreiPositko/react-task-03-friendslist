import styled from 'styled-components';

export const Item = styled.div`
   display: flex;
   align-items: center;
   padding: 10px;
   margin-bottom: 10px;
   box-shadow: 0 0 10px rgba(34, 60, 80, 0.4);
`;

export const Status = styled.span`
   display: block;
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
   margin-right: 15px;
`;

export const Avatar = styled.img`
   border-radius: 10px;
   width: 50px;
   margin-right: 15px;
`;

export const Name = styled.p`
   font-size: 22px;
   font-weight: bold;
`;
