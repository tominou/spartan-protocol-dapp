import { Card, Col, Headline, Row, Tabs } from '../../../../utils/components/Layout/Layout'
import './Pool.css'
import Overview from './Overview/Overview'

const Pools = () => {
  const tabs = {
    pools: {
      title: 'Overview',
      component: <Overview />
    },
    positions: {
      title: 'Positions',
      component: <Row>positions list</Row>
    },
    analysis: {
      title: 'Analysis',
      component: <Row>analysis</Row>
    },
    pairs: {
      title: 'Pairs',
      component: <Row>pairs list</Row>
    }
  }
  return (
    <Col className='Pools'>
      <Headline size={1}>
        Pools
      </Headline>
      <Tabs className='tabs' tabs={tabs} />
    </Col>
  )
}

export default Pools
