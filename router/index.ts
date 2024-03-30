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

type RouteConfig<TName, TParams, TPath, TSearchParams> = {
  name: TName
  params: TParams
  path: TPath
  searchParams?: TSearchParams
}

const productsRoute: RouteConfig<
  'products',
  undefined,
  '/products',
  undefined
> = {
  name: 'products',
  params: undefined,
  path: '/products',
}

const productDetailRoute: RouteConfig<
  'productDetail',
  { id: string },
  '/products/[id]',
  undefined
> = {
  name: 'productDetail',
  params: { id: '' },
  path: '/products/[id]',
}

export const routes = {
  [productDetailRoute.name]: productDetailRoute,
  [productsRoute.name]: productsRoute,
} as const

type RouteDefinitions = typeof routes

export type AppPage = keyof RouteDefinitions

export type PageProps<TPage extends AppPage> = {
  params: RouteDefinitions[TPage]['params']
  searchParams: RouteDefinitions[TPage]['searchParams']
}
