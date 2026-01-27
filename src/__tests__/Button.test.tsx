import { render, screen, fireEvent, waitFor } from '@/utils/test-utils';
import { Button } from '@/components/Button';

describe('Button Component', () => {
  const props = {
    initialText: 'COMPRAR',
    successText: 'ADICIONADO',
    onAction: jest.fn(),
  };

  it('deve renderizar o texto inicial corretamente', () => {
    render(<Button {...props} />);
    expect(screen.getByText('COMPRAR')).toBeInTheDocument();
  });

  it('deve disparar onAction e mudar para o estado de sucesso ao clicar', async () => {
    render(<Button {...props} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(props.onAction).toHaveBeenCalledTimes(1);

    expect(button).toBeDisabled();

    await waitFor(() => {
      expect(screen.queryByText('COMPRAR')).not.toBeInTheDocument();
    });
  });
});
