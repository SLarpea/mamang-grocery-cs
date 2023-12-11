import { DataReponse, Product } from '@/redux/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const toQueryParams = (q: any) => {
    return Object.keys(q).map((key: string) => `${key}=${q[key]}`).join('&');
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
    tagTypes: ["Product", "SingleProduct"],
    endpoints: (builder) => ({
        getProducts: builder.query<DataReponse, void>({
            query: () => "products"
            // query: (q?: any) => "products?" + toQueryParams(q),
            // providesTags: (result) =>
            //     result ? [...result.data.map(({ id }) => ({ type: 'Product' as const, id })), 'Product'] : ['Product']
        }),
        getProduct: builder.query<Product, void>({
            query: (q: any) => "product?" + toQueryParams(q),
            providesTags: ["SingleProduct"]
        }),
        addProduct: builder.mutation<Product, Partial<Product>>({
            query: (body: any) => ({
                url: 'products/add',
                method: 'POST',
                body
            }),
            invalidatesTags: [{ type: "Product", id: 'LIST' }]
        }),
        editProduct: builder.mutation<Product, Partial<Product> & Pick<Product, 'id'>>({
            query: (body: any) => ({
                url: 'product/edit',
                method: 'POST',
                body
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Product", id: arg.id }]
        }),
        deleteProduct: builder.mutation<Product, Partial<Product> & Pick<Product, 'id'>>({
            query: (body: any) => ({
                url: 'product/delete',
                method: 'POST',
                body
            }),
            invalidatesTags: (result, error, arg) => [{ type: "Product", id: arg.id }]
        })
    })
});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useEditProductMutation,
    useDeleteProductMutation
} = productsApi