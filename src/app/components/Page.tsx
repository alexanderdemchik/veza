import React, { PropsWithChildren } from 'react';

export const Page: React.FunctionComponent<PropsWithChildren<{id: string}>> = ({children, id}) => {
  
  return <>
    {children}
  </>
}