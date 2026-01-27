import { render, screen, fireEvent } from '@/utils/test-utils';
import { ProductCard } from '@/components/ProductCard';

const mockProduct = {
  id: 1,
  name: 'NFT Especial',
  description: 'Uma descrição detalhada.',
  price: 15,
  image: '/nft.png',
};

describe('ProductCard Component', () => {
  it('deve exibir os dados do produto corretamente', () => {
    render(<ProductCard product={mockProduct} index={0} />);

    const title = screen.getAllByText('NFT Especial')[0];
    expect(title).toBeInTheDocument();

    expect(screen.getByText(/15/)).toBeInTheDocument();
    expect(screen.getByText(/ETH/)).toBeInTheDocument();
  });

  it('deve abrir o overlay de detalhes ao clicar em "Mais"', () => {
    render(<ProductCard product={mockProduct} index={0} />);
    const moreButton = screen.getByText('Mais');

    fireEvent.click(moreButton);

    expect(screen.getByText('Fechar detalhes')).toBeInTheDocument();

    const descriptions = screen.getAllByText('Uma descrição detalhada.');
    expect(descriptions[1]).toBeInTheDocument();
  });
});
