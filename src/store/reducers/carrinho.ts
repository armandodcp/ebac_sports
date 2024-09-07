import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itensNoCarrinho: Produto[]
}

const initialState: CarrinhoState = {
  itensNoCarrinho: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itensNoCarrinho.find((produto) => produto.id === item.id)) {
        alert('Item já adicionando')
      } else {
        state.itensNoCarrinho.push(item)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
