import React from 'react';


import Room from './Room';
import SearchBar from './SearchBar';

function RoomList(props) {
  return (
    <div>
      <SearchBar />
      <Room />
    </div>
  );
}

export default RoomList;