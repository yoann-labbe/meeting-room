import React from 'react';
// import Picker from '../Calendar/Picker';

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