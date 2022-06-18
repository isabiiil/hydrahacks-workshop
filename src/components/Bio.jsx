import React from 'react'

export default function Bio({ name, bio }) {
  return (
    <div style={styles.bio}>
      <h1>{name}</h1>
      <p>
        {bio}
      </p>
      <a href='#'>Read more</a>
    </div>
  )
}

const styles = {
  bio: {
    backgroundColor: 'pink',
  }
}