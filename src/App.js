import React from 'react';

import FriendsList from './components/FriendsList';

import friends from './mocks/friends.json';

function App() {
   console.log('App', friends);
   return <FriendsList friends={friends} />;
}

export default App;
