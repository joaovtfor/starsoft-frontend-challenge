import * as S from './styles';

interface PaginationLoaderProps {
  totalItems: number;
  currentItems: number;
  loading: boolean;
  onLoadMore: () => void;
}

export const PaginationLoader = ({
  totalItems,
  currentItems,
  loading,
  onLoadMore,
}: PaginationLoaderProps) => {
  const isFinished = totalItems > 0 && currentItems >= totalItems;

  const percentage =
    totalItems > 0
      ? Math.min(Math.round((currentItems / totalItems) * 100), 100)
      : 0;

  return (
    <S.Container>
      <S.ProgressWrapper>
        <S.ProgressBarContainer>
          <S.ProgressFill $percentage={percentage} />
        </S.ProgressBarContainer>
      </S.ProgressWrapper>

      <S.LoadButton
        onClick={() => onLoadMore()}
        disabled={loading || isFinished}
      >
        {loading
          ? 'Carregando...'
          : isFinished
            ? 'Você já viu tudo'
            : 'Carregar mais'}
      </S.LoadButton>
    </S.Container>
  );
};
