import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../store'
import { useGetProdutosQuery } from '../services/api'
import { toggleFavorito } from '../store/reducers/favoritos'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProdutosQuery()
  const dispatch = useDispatch()
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.itensFavoritos
  )

  const favoritar = (item: ProdutoType) => {
    dispatch(toggleFavorito(item))
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((item) => (
          <Produto
            key={item.id}
            produto={item}
            estaNosFavoritos={
              !!favoritos.find((produto) => produto.id === item.id)
            }
            favoritar={() => favoritar(item)}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
