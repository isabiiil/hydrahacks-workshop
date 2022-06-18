import React from 'react';
import Bio from './components/Bio';

export default function App() {
  return (
    <div style={styles.container}>
      <div>App</div>
      <Bio />
      {arr.map(
        (arr) => <Bio name={arr.name} bio={arr.bio} />
      )}
    </div>
  )
}

const arr = [
  { name: 'John', bio: 'John is a developer' },
  { name: 'Jane', bio: 'Jane is a designer' },
  { name: 'Bob', bio: 'Bob is a manager' },
];

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
}

