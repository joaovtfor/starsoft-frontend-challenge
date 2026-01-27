import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/api';
import { ProductCard } from '@/components/ProductCard';
import { PaginationLoader } from '@/components/PaginationLoader';
import * as S from '@/styles/pages/Home';
import { ProductsResponse } from '@/types';
import { ProductCardSkeleton } from '@/components/ProductCard/Skeleton';

export default function Home() {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<ProductsResponse>({
      queryKey: ['products'],
      queryFn: ({ pageParam = 1 }) => getProducts(pageParam as number, 8),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const totalPages = Math.ceil(lastPage.count / 8);
        const currentPage = allPages.length;

        if (currentPage < totalPages) {
          return currentPage + 1;
        }

        return undefined;
      },
    });

  if (isError) return <S.FeedbackMessage>Erro ao conectar.</S.FeedbackMessage>;

  const allProducts = data?.pages.flatMap((page) => page.products) || [];

  return (
    <S.Container>
      <S.Grid>
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={`init-skel-${i}`} index={i} />
            ))
          : allProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                index={index}
                product={{ ...product, price: parseFloat(product.price) }}
              />
            ))}

        {isFetchingNextPage &&
          Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={`next-skel-${i}`} index={i} />
          ))}
      </S.Grid>

      {!isLoading && (
        <PaginationLoader
          totalItems={data?.pages[0].count || 0}
          currentItems={allProducts.length}
          loading={isFetchingNextPage}
          onLoadMore={() => fetchNextPage()}
        />
      )}
    </S.Container>
  );
}
