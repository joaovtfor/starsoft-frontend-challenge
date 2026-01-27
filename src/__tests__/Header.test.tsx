import { render, screen, fireEvent } from '@/utils/test-utils';
import { Header } from '@/components/Header';

describe('Header Component', () => {
  it('deve exibir a quantidade correta de itens no carrinho', () => {
    render(<Header />, {
      preloadedState: {
        cart: {
          items: [
            {
              id: 1,
              name: 'NFT Teste',
              price: 10,
              quantity: 5,
              image: '/test.png',
              description: 'Desc',
            },
          ],
        },
      },
    });

    const badge = screen.getByText('5');
    expect(badge).toBeInTheDocument();
  });
});
