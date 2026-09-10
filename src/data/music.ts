export interface FavoriteTrack {
  id: string;
  title: string;
  artist: string;
  spotifyUrl: string;
  cover?: string;
}

// Faixas escolhidas por Caio; links públicos conferidos no Spotify.
export const favoriteTracks: FavoriteTrack[] = [
  {
    "id": "0dz3jEkVFn1QuHjCJKvIXi",
    "title": "Everybody Wants To Rule The World",
    "artist": "Tears For Fears",
    "spotifyUrl": "https://open.spotify.com/track/0dz3jEkVFn1QuHjCJKvIXi"
  },
  {
    "id": "3FftdjWf6UjIMBGlCAhskW",
    "title": "Virtual Insanity",
    "artist": "Jamiroquai",
    "spotifyUrl": "https://open.spotify.com/track/3FftdjWf6UjIMBGlCAhskW"
  },
  {
    "id": "4knsDJe7CM6UgM2F7p3Uzo",
    "title": "Cigaro",
    "artist": "System Of A Down",
    "spotifyUrl": "https://open.spotify.com/track/4knsDJe7CM6UgM2F7p3Uzo"
  },
  {
    "id": "40pPI2TbaYSZlKfV44HRjn",
    "title": "Supremacy",
    "artist": "Muse",
    "spotifyUrl": "https://open.spotify.com/track/40pPI2TbaYSZlKfV44HRjn"
  },
  {
    "id": "1BkxFAodaIkcM2vynl4CVM",
    "title": "Johny B. Goode (Acústico)",
    "artist": "Cidade Negra",
    "spotifyUrl": "https://open.spotify.com/track/1BkxFAodaIkcM2vynl4CVM"
  }
];

export function getRandomTrack(tracks: FavoriteTrack[], previousId?: string) {
  const candidates = tracks.length > 1 ? tracks.filter((track) => track.id !== previousId) : tracks;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
