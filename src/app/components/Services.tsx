import React, { MouseEventHandler } from 'react';
import { createUseStyles } from 'react-jss';
import SpotifyIcon from '../icons/spotify.svg';
import YandexMusicIcon from '../icons/yandexmusic.svg';
import Grid from '@material-ui/core/Grid';

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

const YANDEXMUSIC = 'YANDEXMUSIC';
const SPOTIFY = 'SPOTIFY';

const services = [
  {
    name: YANDEXMUSIC,
    icon: YandexMusicIcon,
    label: 'Яндекс.Музыка'
  },
  {
    name: SPOTIFY,
    icon: SpotifyIcon,
    label: 'Spotify'
  }
];

const Services: React.FunctionComponent<{onClick?: MouseEventHandler}> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.services}> 
        {services.map(service => {
          const Icon = service.icon;

          return <Grid item xs={6} sm={4} md={3} lg={2}>
            <div className={classes.service} onClick={onClick}>
              <Icon />
              <div className={classes.label}>
                {service.label}
              </div>
            </div>
          </Grid>
        })}
      </Grid>
    </div>
  )
}

export default Services;