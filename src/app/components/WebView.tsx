import React, { forwardRef, MutableRefObject, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import ArrowBackIcon from '../icons/arrow_back.svg';
import ArrowForwardIcon from '../icons/arrow_forward.svg';
import CloseIcon from '../icons/close.svg';
import RefreshIcon from '../icons/refresh.svg';

const useStyles = createUseStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    background: theme.palette.background.default
  },
  webview: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    height: 40,
    boxShadow: theme.shadows[3],
    background: theme.palette.background.paper,
    alignItems: 'center',
    '& svg': {
      fill: theme.palette.text.primary,
      width: 20,
      cursor: 'pointer'
    },
    '& svg$disabled': {
      opacity: 0.5,
      userSelect: 'none'
    }
  },
  url: {
    flex: 1,
    fontSize: '0.875rem',
    outline: 'none',
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: 3,
    margin: '0 5px',
    borderRadius: '20px 20px 20px 20px',
    border: 'none',
    '&:focus': {
      boxShadow: `0 0 3px ${theme.palette.primary.main}`,
    }
  },
  disabled: {},
}));

export const WebView = forwardRef<Electron.WebviewTag>((props, ref) => {
  const localRef = useRef<Electron.WebviewTag>(null);
  const classes = useStyles();

  const [url, setUrl] = useState('');
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [loading, setLoading] = useState(false);

  const viewRef = ref as MutableRefObject<Electron.WebviewTag> || localRef;

  const handleWillNavigate = useCallback((event: Electron.WillNavigateEvent) => {
    setUrl(event.url);
    setCanGoBack(viewRef.current.canGoBack());
    setCanGoForward(viewRef.current.canGoForward());
  }, [viewRef]);

  const handleDidNavigate = useCallback((event: Electron.DidNavigateEvent) => {
    setUrl(event.url);
    setCanGoBack(viewRef.current.canGoBack());
    setCanGoForward(viewRef.current.canGoForward());
  }, [viewRef]);

  const handleGoBackClick = () => {
    viewRef.current.goBack();
  }

  const handleGoForwardClick = () => {
    viewRef.current.goForward();
  } 

  const handleRefreshClick = () => {
    viewRef.current.reload();
  }

  const handleDidStartLoading = () => {
    setLoading(true);
  }

  const handleDidStopLoading = () => {
    setLoading(false);
  }

  useEffect(() => {
    const viewNode = viewRef.current;
    viewNode.addEventListener('will-navigate', handleWillNavigate);
    viewNode.addEventListener('did-navigate', handleDidNavigate);
    viewNode.addEventListener('did-start-loading', handleDidStartLoading);
    viewNode.addEventListener('did-stop-loading', handleDidStopLoading);
    
    return () => {
      viewNode.removeEventListener('will-navigate', handleWillNavigate);
      viewNode.removeEventListener('did-navigate', handleDidNavigate);
      viewNode.removeEventListener('did-start-loading', handleDidStartLoading);
      viewNode.removeEventListener('did-stop-loading', handleDidStopLoading);
    }
  }, [viewRef]);

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <ArrowBackIcon viewBox='0 0 24 24'
            className={!canGoBack ? classes.disabled : ''}
            onClick={handleGoBackClick}
        />
        <ArrowForwardIcon viewBox='0 0 24 24'
            className={!canGoForward ? classes.disabled : ''}
            onClick={handleGoForwardClick}    
        />
        <RefreshIcon viewBox='0 0 24 24' onClick={handleRefreshClick}/>
        <input value={url} onChange={() => {}} className={classes.url}/>
        <CloseIcon viewBox='0 0 24 24'/>
      </div>
      <webview className={classes.webview} ref={viewRef} {...props} />
    </div>
  )
});


export default WebView;