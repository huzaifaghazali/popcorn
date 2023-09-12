import React from 'react';
import ListBox from './ListBox';
import WatchedBox from './WatchedBox';

export default function Main({ average, tempMovieData, tempWatchedData }) {
  return (
    <main className='main'>
      <ListBox tempMovieData={tempMovieData} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
}
