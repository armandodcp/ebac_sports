import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itensFavoritos: Produto[]
}

const initialState: FavoritosState = {
  itensFavoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action) => {
      const item = action.payload
      const favorito = state.itensFavoritos.find(
        (produto) => produto.id === item.id
      )
      if (favorito) {
        state.itensFavoritos = state.itensFavoritos.filter(
          (produto) => produto.id !== item.id
        )
      } else {
        state.itensFavoritos.push(item)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
