import React from 'react';
import { createUseStyles } from 'react-jss';

import Grid from '@material-ui/core/Grid';
import { services, servicesInfo } from '../common/services';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  service: {
    background: theme.palette.background.paper,
    borderRadius: 6,
    margin: '12px 6px',
    transition: '.2s linear all',
    boxShadow: theme.shadows[4],
    cursor: 'pointer',
    fontWeight: 300,
    fontSize: '0.875rem',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  label: {
    borderTop: `1px solid ${theme.palette.divider}`,
    textAlign: 'center',
    padding: '5px 0px 3px 0px',
    color: theme.palette.text.primary
  }
}));

const Services: React.FunctionComponent<{onClick?: (service: string) => void}> = ({ onClick = () => {} }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.services}> 
        {services.map(service => {
          const Icon = servicesInfo[service].icon;
          const label = servicesInfo[service].label;

          return <Grid item xs={6} sm={4} md={3} lg={2} key={service}>
            <div className={classes.service} onClick={() => onClick(service)}>
              <Icon />
              <div className={classes.label}>
                {label}
              </div>
            </div>
          </Grid>
        })}
      </Grid>
    </div>
  )
}

export default Services;