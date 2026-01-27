import * as S from './styles';

interface SkeletonProps {
  index: number;
}

export const ProductCardSkeleton = ({ index }: SkeletonProps) => {
  return (
    <S.SkeletonContainer $index={index}>
      <S.SkeletonImage />
      <S.SkeletonTitle />
      <S.SkeletonText />
      <S.SkeletonPrice />
      <S.SkeletonButton />
    </S.SkeletonContainer>
  );
};
