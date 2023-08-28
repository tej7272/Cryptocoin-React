import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '76c3a26dfamsh92a9b6bf38ab622p1b636bjsndd215eab7646',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = `https://coinranking1.p.rapidapi.com`;

const myParams = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders, params: myParams })
const createRequest2 = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query: ({coinId, timePeriod}) => createRequest2(`/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timePeriod}`),
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
} = cryptoApi;