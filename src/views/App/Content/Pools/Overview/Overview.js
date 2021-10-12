import { Card, Col, Headline, Row, Tabs } from '../../../../../utils/components/Layout/Layout'
import './Overview.css'
// import { useState } from 'react'

const Overview = () => {
  // const [tab, setTab] = useState('pools')
  const pools = {
    bnb: {
      title: 'bnb'
    },
    usdt: {
      title: 'usdt'
    },
    btc: {
      title: 'btc'
    },
    ada: {
      title: 'ada'
    },
    eth: {
      title: 'eth'
    },
    raven: {
      title: 'raven'
    },
    usdc: {
      title: 'usdc'
    },
    tttk: {
      title: 'tttk'
    }
  }
  const list = []
  for (const p in pools) list.push(p)
  return (
    <Col className='Overview'>
      {list.map(pool => (
        <Card key={pool} title={pools[pool].title?.toUpperCase() || pool}>
          {pools[pool].title}
        </Card>
      ))}
    </Col>
  )
}

export default Overview
