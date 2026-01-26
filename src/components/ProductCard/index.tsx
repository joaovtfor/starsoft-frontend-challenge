import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { EthereumIcon } from '@/components/Icons';
import { IProduct } from '@/types';
import { addToCart } from '@/store/slices/cartSlice';
import * as S from './styles';

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);
  };

  const successText = "ADICIONADO AO CARRINHO";

  return (
    <S.CardContainer onMouseLeave={() => setShowDetails(false)}>
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

      <S.DescriptionRow>
        <S.ShortDescription>
          {product.description || "Sem descrição."}
        </S.ShortDescription>

        {product.description && (
          <S.ToggleButton onClick={() => setShowDetails(true)}>
            ...Mais
          </S.ToggleButton>
        )}
      </S.DescriptionRow>

      <S.PriceContainer>
        <EthereumIcon size={18} />
        {product.price.toFixed(0)} ETH
      </S.PriceContainer>

      <S.BuyButton
        onClick={handleAddToCart}
        disabled={isAdded}
        isAdded={isAdded}
      >
        {!isAdded ? (
          'COMPRAR'
        ) : (
          <S.LetterContainer>
            {successText.split("").map((char, index) => (
              <S.AnimatedLetter key={index} $delay={index * 0.03}>
                {char === " " ? "\u00A0" : char}
              </S.AnimatedLetter>
            ))}
          </S.LetterContainer>
        )}
      </S.BuyButton>

      <S.DescriptionOverlay isVisible={showDetails}>
        <S.Title style={{ marginBottom: 15 }}>{product.name}</S.Title>
        <S.FullDescriptionText>{product.description}</S.FullDescriptionText>
        <S.CloseButton onClick={(e) => {
          e.stopPropagation();
          setShowDetails(false);
        }}>
          Fechar detalhes
        </S.CloseButton>
      </S.DescriptionOverlay>
    </S.CardContainer>
  );
};