import React from 'react';
import Services from '../components/Services';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    height: '100%',
    overflow: 'auto',
    padding: '0px 6px',
    background: theme.palette.background.default
  },
  title: {
    textAlign: 'center',
    color: theme.palette.text.primary
  }
}));

const DestinationSelectionPage: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return <Grid container direction='column' className={classes.root}>
    <Grid item>
      <div className={classes.title}><h2>Шаг 2 - Выберите конечный сервис</h2></div> 
    </Grid>
    <Grid item>
    <Services />
    </Grid>
  </Grid>
}

export default DestinationSelectionPage;