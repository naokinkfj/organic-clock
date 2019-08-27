import React from 'react';

export const composeContextProviders = (contexts, component) => (
  contexts.reduce((acc, [Provider, value]) => {
    return (
      <Provider value={value}>{acc}</Provider>
    );
  }, component)
);
