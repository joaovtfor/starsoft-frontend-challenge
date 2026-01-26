import Link from 'next/link';
import { useSelector } from 'react-redux';
import { PiHandbagLight } from 'react-icons/pi';

import { selectCartCount } from '@/store/slices/cartSlice';
import { Logo } from '@/components/Icons';

import * as S from './styles';

export const Header = () => {
  const count = useSelector(selectCartCount);

  return (
    <S.Container>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <S.Logo>
          <Logo width={120} />
        </S.Logo>
      </Link>

      <Link href="/cart">
        <S.CartButton aria-label="Ir para o carrinho">
          <PiHandbagLight size={24} color="#FF9F47" />

          <S.CartCount>{count}</S.CartCount>
        </S.CartButton>
      </Link>
    </S.Container>
  );
};