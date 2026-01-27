import { useState } from 'react';
import { useSelector } from 'react-redux';
import { PiHandbagLight } from 'react-icons/pi';
import Link from 'next/link';

import { selectCartCount } from '@/store/slices/cartSlice';
import { Logo } from '@/components/Icons';
import { CartModal } from '@/components/CartModal';

import * as S from './styles';

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const count = useSelector(selectCartCount);

  return (
    <S.Container>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <S.Logo>
          <Logo width={120} />
        </S.Logo>
      </Link>

      <S.CartButton
        onClick={() => setIsCartOpen(true)}
        aria-label="Abrir mochila de compras"
      >
        <PiHandbagLight size={24} color="#FF9F47" />
        <S.CartCount>{count}</S.CartCount>
      </S.CartButton>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </S.Container>
  );
};
