import { render, screen, fireEvent } from '@/utils/test-utils';
import { PaginationLoader } from '@/components/PaginationLoader';

describe('PaginationLoader Component', () => {
  const props = {
    totalItems: 100,
    currentItems: 50,
    loading: false,
    onLoadMore: jest.fn(),
  };

  it('deve renderizar o texto correto e habilitar o botão', () => {
    render(<PaginationLoader {...props} />);
    expect(screen.getByText('Carregar mais')).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('deve exibir "Você já viu tudo" quando a lista estiver completa', () => {
    render(<PaginationLoader {...props} currentItems={100} />);
    expect(screen.getByText('Você já viu tudo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('deve desabilitar o botão durante o carregamento', () => {
    render(<PaginationLoader {...props} loading={true} />);
    expect(screen.getByText('Carregando...')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
