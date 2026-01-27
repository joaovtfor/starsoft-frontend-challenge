import { render, screen, fireEvent } from '@/utils/test-utils';
import { CartModal } from '@/components/CartModal';

describe('CartModal Component', () => {
  const mockClose = jest.fn();

  it('deve exibir mensagem de mochila vazia quando não houver itens', () => {
    render(<CartModal isOpen={true} onClose={mockClose} />, {
      preloadedState: { cart: { items: [] } },
    });

    expect(screen.getByText(/Sua mochila está vazia/i)).toBeInTheDocument();
  });

  it('deve renderizar itens do carrinho corretamente', () => {
    const items = [
      {
        id: 1,
        name: 'NFT Teste',
        price: 50,
        quantity: 1,
        image: '/img.png',
        description: 'Desc',
      },
    ];

    render(<CartModal isOpen={true} onClose={mockClose} />, {
      preloadedState: { cart: { items } },
    });

    expect(screen.getByText('NFT Teste')).toBeInTheDocument();
    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('deve chamar onClose ao pressionar a tecla Escape', () => {
    render(<CartModal isOpen={true} onClose={mockClose} />);

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(mockClose).toHaveBeenCalled();
  });
});
