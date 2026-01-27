import { render, screen } from '@/utils/test-utils';
import Home from '@/pages/index';
import { useInfiniteQuery } from '@tanstack/react-query';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useInfiniteQuery: jest.fn(),
}));

describe('Home Page', () => {
  it('deve renderizar a listagem de produtos após o carregamento', () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            products: [
              { id: 1, name: 'NFT de Teste', price: '10', image: '/img.png' },
            ],
            count: 1,
          },
        ],
      },
      isLoading: false,
      isError: false,
      fetchNextPage: jest.fn(),
      isFetchingNextPage: false,
    });

    render(<Home />);

    const productTitle = screen.getAllByText('NFT de Teste')[0];
    expect(productTitle).toBeInTheDocument();
  });
});
