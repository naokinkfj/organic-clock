import React from 'react'

export const PartyContext = React.createContext({})

export interface PartyPropsType {
  place: string | undefined;
  number: number | undefined;
}

export const PartyProvider = PartyContext.Provider;
export const PartyConsumer = PartyContext.Consumer;
