import { render, screen } from '@/utils/test-utils';
import { AnimatedNumber } from '@/components/Counter';

describe('AnimatedNumber Component', () => {
  it('deve renderizar o valor inicial arredondado', () => {
    render(<AnimatedNumber value={100.5} />);

    const element = screen.getByText('101');
    expect(element).toBeInTheDocument();
  });

  it('deve atualizar o conteúdo quando o valor mudar', async () => {
    const { rerender } = render(<AnimatedNumber value={10} />);
    expect(screen.getByText('10')).toBeInTheDocument();

    rerender(<AnimatedNumber value={20} />);

    const newValue = await screen.findByText('20');
    expect(newValue).toBeInTheDocument();
  });
});
