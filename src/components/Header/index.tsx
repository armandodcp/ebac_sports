import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'
import * as S from './styles'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itensNoCarrinho
  )
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritos.itensFavoritos
  )
  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
