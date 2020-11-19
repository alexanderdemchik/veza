import SpotifyIcon from '../icons/spotify.svg';
import YandexMusicIcon from '../icons/yandexmusic.svg';

export const YANDEXMUSIC = 'YANDEXMUSIC';
export const SPOTIFY = 'SPOTIFY';

export const services = [YANDEXMUSIC, SPOTIFY] as const;

export type ServicesList = typeof services;

export const servicesInfo: Record<ServicesList[number], any> = {
  YANDEXMUSIC: {
    icon: YandexMusicIcon,
    label: 'Яндекс.Музыка'
  },
  SPOTIFY: {
    icon: SpotifyIcon,
    label: 'Spotify'
  }
}
