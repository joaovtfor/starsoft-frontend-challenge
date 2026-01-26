import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ProductCard } from '@/components/ProductCard';
import * as S from '@/styles/pages/Home';

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', 1],
    queryFn: () => getProducts(1, 8),
  });

  if (isLoading)
    return <S.FeedbackMessage>Carregando artefatos...</S.FeedbackMessage>;
  if (isError)
    return (
      <S.FeedbackMessage>Erro ao conectar com o servidor.</S.FeedbackMessage>
    );

  return (
    <S.Container>
      <S.Grid>
        {data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              ...product,
              price: parseFloat(product.price),
            }}
          />
        ))}
      </S.Grid>
    </S.Container>
  );
}
