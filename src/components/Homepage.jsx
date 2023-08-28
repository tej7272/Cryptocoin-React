import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components'
import Loader from './Loader';

const { Title } = Typography;

const HomePage = () => {


  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      
      <Title level={3} className="heading">Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalstats.total}></Statistic></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalstats.totalExchanges)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalstats.totalMarketCap)}></Statistic></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalstats.total24hVolume)}></Statistic></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalstats.totalMarkets)}></Statistic></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 CryptoCurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default HomePage