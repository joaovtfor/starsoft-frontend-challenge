import { render, screen } from '@/utils/test-utils';
import Home from '@/pages/index';

describe('Home Page', () => {
  it('deve renderizar o título de teste', () => {
    render(<Home />);
    
    const title = screen.getByText('Teste de Estilização');
    expect(title).toBeInTheDocument();
  });
});