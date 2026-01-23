import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { FaEthereum } from 'react-icons/fa';

import { IProduct } from '@/types';
import { addToCart } from '@/store/slices/cartSlice';
import * as S from './styles';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <S.CardContainer>
      <S.ImageContainer>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain', padding: '10px' }}
        />
      </S.ImageContainer>

      <S.Title>{product.name}</S.Title>

      <S.Description>
        {product.description || 'Descrição indisponível.'}
      </S.Description>

      <S.PriceContainer>
        <FaEthereum size={18} />
        {product.price.toFixed(2)} ETH
      </S.PriceContainer>

      <S.BuyButton onClick={handleAddToCart}>Comprar</S.BuyButton>
    </S.CardContainer>
  );
};
