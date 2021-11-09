import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

const P = styled.p`
  color: coral;
`;

export interface Services {
  getCharacterCount: () => Promise<number>;
}

export const Greeting: FC<{ services: Services }> = ({ services: { getCharacterCount } }) => {
  const [numberOfCharacters, setNumberOfCharacters] = useState<number | undefined>(undefined);
  const [didError, setDidError] = useState(false);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <p>loading</p>;
  }

  if (didError) {
    return <p>Oh no something went wrong!</p>;
  }

  return (
    <div>
      <h2>Welcome!</h2>
      <P>Learn about random characters and their encounters</P>
      <button
        type="button"
        disabled={loading}
        onClick={() => {
          setLoading(true);
          getCharacterCount()
            .then((count) => {
              setLoading(false);
              setNumberOfCharacters(count);
            })
            .catch(() => {
              setLoading(false);
              setDidError(true);
            });
        }}
      >
        Squantch!
      </button>
    </div>
  );
};

// useEffect(() => {
//   axios.get('https://rickandmortyapi.com/api').then(console.log).catch(console.error);
// }, []);
