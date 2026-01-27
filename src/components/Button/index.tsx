import { useState } from 'react';
import { AnimatePresence, HTMLMotionProps } from 'framer-motion';
import * as S from './styles';

interface ButtonProps extends HTMLMotionProps<'button'> {
  initialText: string;
  successText: string;
  onAction?: () => void;
}

export const Button = ({
  initialText,
  successText,
  onAction,
  ...props
}: ButtonProps) => {
  const [status, setStatus] = useState<'idle' | 'success' | 'exiting'>('idle');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (status !== 'idle') return;
    if (onAction) onAction();

    setStatus('success');

    setTimeout(() => {
      setStatus('exiting');

      setTimeout(() => {
        setStatus('idle');
      }, 800);
    }, 1500);

    if (props.onClick) props.onClick(e as any);
  };

  return (
    <S.StyledButton
      {...props}
      onClick={handleClick}
      disabled={props.disabled || status !== 'idle'}
      whileHover={status === 'idle' ? { filter: 'brightness(1.1)' } : {}}
      whileTap={status === 'idle' ? { scale: 0.98 } : {}}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' ? (
          <S.ButtonTextContainer
            key="initial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {initialText}
          </S.ButtonTextContainer>
        ) : (
          <S.LetterContainer key="success">
            {successText.split('').map((char, index) => (
              <S.AnimatedLetter
                key={index}
                variants={{
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0 },
                  exit: {
                    opacity: 0,
                    x: 10,
                    filter: 'blur(4px)',
                    transition: { delay: index * 0.01 },
                  },
                }}
                initial="initial"
                animate={status === 'exiting' ? 'exit' : 'animate'}
                transition={{ delay: index * 0.03 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </S.AnimatedLetter>
            ))}
          </S.LetterContainer>
        )}
      </AnimatePresence>

      {status === 'exiting' && (
        <S.SweepBar
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.7, ease: 'linear' }}
        />
      )}
    </S.StyledButton>
  );
};
