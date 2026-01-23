import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ProductCard } from '@/components/ProductCard';
import {
  HomeContainer,
  ProductGrid,
  LoadingContainer,
} from '@/styles/pages/Home';

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(1, 10),
  });

  if (isLoading) {
    return <LoadingContainer>Carregando artefatos...</LoadingContainer>;
  }

  if (isError) {
    return (
      <LoadingContainer>
        Erro ao carregar produtos do servidor.
      </LoadingContainer>
    );
  }

  return (
    <HomeContainer>
      <ProductGrid>
        {data?.products.map((product) => (
          <ProductCard
            key={product.id}
            product={{
              id: product.id,
              name: product.name,
              image: product.image,
              description: product.description,
              price: parseFloat(product.price),
            }}
          />
        ))}
      </ProductGrid>
    </HomeContainer>
  );
}
