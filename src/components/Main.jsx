import React from 'react';
import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

export default function Main({
  average,
  tempWatchedData,
  movies,
}) {
  return (
    <main className='main'>
      <ListBox movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
}
