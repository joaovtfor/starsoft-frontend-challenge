import { useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { FaSpinner, FaBoxOpen } from 'react-icons/fa';

import { EthereumIcon } from '@/components/Icons';
import { IProduct } from '@/types';
import { addToCart } from '@/store/slices/cartSlice';

import * as S from './styles';

interface ProductCardProps {
  product: IProduct;
  index: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => {
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsAdded(true);

    setTimeout(() => {
      setIsExiting(true);

      setTimeout(() => {
        setIsAdded(false);
        setIsExiting(false);
      }, 800);
    }, 2000);
  };

  const successText = 'ADICIONADO AO CARRINHO';

  return (
    <S.CardContainer onMouseLeave={() => setShowDetails(false)} $index={index}>
      <S.ImageContainer>
        {isLoading && !hasError && (
          <S.LoadingWrapper>
            <FaSpinner className="spinner" />
          </S.LoadingWrapper>
        )}

        {hasError && (
          <S.ErrorWrapper>
            <FaBoxOpen size={40} />
            <span>Imagem indisponível</span>
          </S.ErrorWrapper>
        )}

        {!hasError && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{
              objectFit: 'contain',
              padding: '10px',
              opacity: isLoading ? 0 : 1,
            }}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
            }}
          />
        )}
      </S.ImageContainer>

      <S.Title>{product.name}</S.Title>

      <S.DescriptionRow>
        <S.ShortDescription>
          {product.description || 'Sem descrição.'}
        </S.ShortDescription>

        {product.description && (
          <S.ToggleButton onClick={() => setShowDetails(true)}>
            Mais
          </S.ToggleButton>
        )}
      </S.DescriptionRow>

      <S.PriceContainer>
        <EthereumIcon size={18} />
        {product.price.toFixed(0)} ETH
      </S.PriceContainer>

      <S.BuyButton
        onClick={handleAddToCart}
        disabled={isAdded || isExiting}
        isAdded={isAdded || isExiting}
      >
        {isExiting && <S.SweepBar />}

        {!isAdded && !isExiting ? (
          <S.BuyTextContainer>COMPRAR</S.BuyTextContainer>
        ) : (
          <S.LetterContainer $isExiting={isExiting}>
            {successText.split('').map((char, index) => (
              <S.AnimatedLetter key={index} $delay={index * 0.03}>
                {char === ' ' ? '\u00A0' : char}
              </S.AnimatedLetter>
            ))}
          </S.LetterContainer>
        )}
      </S.BuyButton>

      <S.DescriptionOverlay isVisible={showDetails}>
        <S.Title style={{ marginBottom: 15 }}>{product.name}</S.Title>
        <S.FullDescriptionText>{product.description}</S.FullDescriptionText>
        <S.CloseButton
          onClick={(e) => {
            e.stopPropagation();
            setShowDetails(false);
          }}
        >
          Fechar detalhes
        </S.CloseButton>
      </S.DescriptionOverlay>
    </S.CardContainer>
  );
};
