import React from 'react';
import { useSelector } from 'react-redux';

const Navigator: React.FunctionComponent<{}> = ({children}) => {
  const page = useSelector((state: any) => state.navigator.current);
  return <>
    navigator
  </>
}

export default Navigator;