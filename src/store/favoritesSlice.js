import { createSlice } from "@reduxjs/toolkit"

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    tracks: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const track = action.payload
      const exists = state.tracks.find((t) => t.id === track.id)
      if (!exists) {
        state.tracks.push(track)
      }
    },
    removeFromFavorites: (state, action) => {
      const trackId = action.payload
      state.tracks = state.tracks.filter((track) => track.id !== trackId)
    },
    toggleFavorite: (state, action) => {
      const track = action.payload
      const exists = state.tracks.find((t) => t.id === track.id)
      if (exists) {
        state.tracks = state.tracks.filter((t) => t.id !== track.id)
      } else {
        state.tracks.push(track)
      }
    },
  },
})

export const { addToFavorites, removeFromFavorites, toggleFavorite } =
  favoritesSlice.actions
export default favoritesSlice.reducer
