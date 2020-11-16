import React from 'react';
import { PAGES } from '.';
import { useSelector } from 'react-redux';
import SourceSelectionPage from './SourceSelectionPage';
import DestinationSelectionPage from './DestinationSelectionPage';

const getPage = (page: PAGES) => {
  switch (page) {
    case PAGES.SOURCESELECTION: return <SourceSelectionPage />;
    case PAGES.DESTINATIONSELECTION: return <DestinationSelectionPage />;
    default: return 'Hello';
  }
}

const Routes: React.FunctionComponent<{}> = () => {
  const page = useSelector((state: RootState) => state.pages.current);

  return <>
    {
      getPage(page)
    }
  </>
}

export default Routes;