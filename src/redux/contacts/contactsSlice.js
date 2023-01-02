import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6399dcce29930e2bb3e22232.mockapi.io/api' }),
    tagTypes: ['Contacts'],
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contacts'],
      }),
      addContact: builder.mutation({
        query: values => ({
            url: '/contacts',
            method: 'POST',
            body: values,
        }),
        invalidatesTags: ['Contacts'],        
      }),
      deleteContact: builder.mutation({
        query: id => ({
            url: `/contacts/${id}`,
            method: 'DELETE',            
        }),
        invalidatesTags: ['Contacts'], 
      }),
    }),
  })

  export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;