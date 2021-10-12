import { Card, Col, Headline, Row, Tabs } from '../../../../../components/Layout/Layout'
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
    }
  }
  const list = []
  for (const p in pools) list.push(p)
  return (
    <Col className='Overview'>
      {list.map(pool => (
        <Card>
          {pools[pool].title}
        </Card>
      ))}
    </Col>
  )
}

export default Overview
