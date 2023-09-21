import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export type Post = {
    'userId': number,
    'id': number,
    'title': string,
    'body': string
}



export const postApi = createApi({
    reducerPath: 'postApi',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: builder => ({
        getPosts: builder.query<Post[], string>({
            query: () => '/posts',
            providesTags: ['Post'],
        }),
    }),
});


export const { useGetPostsQuery }
    = postApi;
