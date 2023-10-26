import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_HOMEWORKS_BASE_URL } from '../../utils/API_CONFIG';


export const homeworksApi = createApi({
    reducerPath: 'homeworksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_HOMEWORKS_BASE_URL,
    }),

    endpoints: (build) => ({
        getHomeworks: build.query({
            query: () => 'lessons'
        }),

        getHomeworkById: build.query({
            query: (hwId= 1) => `homeworks/${hwId}`
        }),
    })
});


export const { useGetHomeworksQuery, useGetHomeworkByIdQuery } = homeworksApi;