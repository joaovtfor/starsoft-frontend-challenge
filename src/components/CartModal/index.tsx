import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash, FaSpinner, FaArrowLeft, FaBoxOpen } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { RootState } from '@/store';
import { updateQuantity, removeFromCart } from '@/store/slices/cartSlice';
import { EthereumIcon } from '@/components/Icons';
import { AnimatedNumber } from '@/components/Counter';
import { Button } from '@/components/Button';

import * as S from './styles';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartItemImage = ({ src, name }: { src: string; name: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <S.ItemImage>
      {isLoading && !hasError && (
        <S.LoadingWrapper>
          <FaSpinner className="spinner" />
        </S.LoadingWrapper>
      )}

      {hasError && (
        <S.ErrorWrapper>
          <FaBoxOpen size={24} />
          <span>Erro</span>
        </S.ErrorWrapper>
      )}

      {!hasError && (
        <Image
          src={src}
          alt={name}
          fill
          style={{
            objectFit: 'contain',
            padding: '5px',
            opacity: isLoading ? 0 : 1,
          }}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
        />
      )}
    </S.ItemImage>
  );
};

export const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <S.ModalContent
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <S.Header>
              <S.BackButton onClick={onClose} aria-label="Voltar">
                <FaArrowLeft size={18} />
              </S.BackButton>
              <h2>Mochila de Compras</h2>
            </S.Header>

            <div style={{ flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
              <AnimatePresence mode="popLayout">
                {cartItems.map((item) => (
                  <S.CartItemCard
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <CartItemImage src={item.image} name={item.name} />

                    <S.ItemInfo>
                      <div>
                        <h4>{item.name}</h4>
                        <p className="description">
                          {item.description || 'Sem descrição.'}
                        </p>
                      </div>

                      <div className="bottom-info">
                        <div className="price-row">
                          <EthereumIcon size={18} /> {item.price} ETH
                        </div>

                        <S.ActionRow>
                          <S.Controls>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({ id: item.id, delta: -1 }),
                                )
                              }
                            >
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(
                                  updateQuantity({ id: item.id, delta: 1 }),
                                )
                              }
                            >
                              +
                            </button>
                          </S.Controls>

                          <S.RemoveButton
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            <FaTrash size={14} />
                          </S.RemoveButton>
                        </S.ActionRow>
                      </div>
                    </S.ItemInfo>
                  </S.CartItemCard>
                ))}
              </AnimatePresence>

              {cartItems.length === 0 && (
                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    opacity: 0.5,
                  }}
                >
                  Sua mochila está vazia.
                </p>
              )}
            </div>

            <S.Footer>
              <div className="total-row">
                <h3>TOTAL</h3>
                <div className="total-price">
                  <EthereumIcon size={18} />
                  <AnimatedNumber value={total} />
                  <span>ETH</span>
                </div>
              </div>
              <Button
                initialText="FINALIZAR COMPRA"
                successText="COMPRA FINALIZADA!"
                onAction={() => console.log('Finalizado')}
              />
            </S.Footer>
          </S.ModalContent>
        </S.Overlay>
      )}
    </AnimatePresence>
  );
};
