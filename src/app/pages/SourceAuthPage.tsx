import React, { useState } from 'react';
import WebView from '../components/WebView';
import { useSelector } from 'react-redux';
import { PAGES } from '.';

export const SourceAuthPage = () => {
  const [showWebView, setShowWebView] = useState(false);
  const service = useSelector<any>((state) => state.pages[PAGES.SOURCESELECTION].selected);

  return <>
    {service}
    {showWebView && <WebView />}
  </>
}