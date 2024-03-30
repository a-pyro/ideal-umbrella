import { useParams, useRouter } from 'next/navigation'

export const useAppRouter = <TCurrentPageName extends AppPage>(
  _page: TCurrentPageName,
) => {
  const router = useRouter()
  const params = useParams()

  return {
    ...router,
    params: params as (typeof routes)[TCurrentPageName]['params'],
  }
}

type RouteConfig<TName, TParams, TPath> = {
  name: TName
  params: TParams
  path: TPath
}

const productsRoute: RouteConfig<'products', undefined, '/products'> = {
  name: 'products',
  params: undefined,
  path: '/products',
}

const productDetailRoute: RouteConfig<
  'productDetail',
  { id: string },
  '/products/[id]'
> = {
  name: 'productDetail',
  params: { id: '' },
  path: '/products/[id]',
}

export const routes = {
  [productDetailRoute.name]: productDetailRoute,
  [productsRoute.name]: productsRoute,
} as const

export type AppPage = keyof typeof routes
