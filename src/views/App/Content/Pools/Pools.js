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
      <Row className='volumes' weight={1}>
        <Card title='Total volume'>
          15654681 volume
        </Card>
        <Card title='Total pooled' weight={1}>
          15654681 pooled
        </Card>
      </Row>
      <Tabs className='tabs' tabs={tabs} />
    </Col>
  )
}

export default Pools
