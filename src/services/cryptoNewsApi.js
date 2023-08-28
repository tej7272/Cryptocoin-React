import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '76c3a26dfamsh92a9b6bf38ab622p1b636bjsndd215eab7646',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const myParams = {
    safeSearch: 'Off',
    textFormat: 'Raw'
}

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders, params: myParams })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
