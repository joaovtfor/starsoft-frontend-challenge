import { render, screen } from '@/utils/test-utils';
import { Footer } from '@/components/Footer';

describe('Footer Component', () => {
  it('deve exibir o texto de direitos autorais', () => {
    render(<Footer />);
    expect(
      screen.getByText(/STARSOFT © TODOS OS DIREITOS RESERVADOS/i),
    ).toBeInTheDocument();
  });
});
