import React from 'react';
import Services from '../components/Services';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { createUseStyles } from 'react-jss';
import { setCurrentPage } from '../services/navigator';

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

const SourceSelectionPage: React.FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleServiceClick = (service: string) => {
  }

  return <Grid container direction='column' className={classes.root}>
    <Grid item>
      <div className={classes.title}><h2>Шаг 1 - Выберите исходный сервис</h2></div> 
    </Grid>
    <Grid item>
      <Services onClick={handleServiceClick} />
    </Grid>
  </Grid>
}

export default SourceSelectionPage;