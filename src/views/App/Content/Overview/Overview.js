import { Button, Card, Col, Row, Tabs } from '../../../../utils/components/Layout/Layout'
import './Overview.css'
import Liquidity from './Liquidity/Liquidity'

const Overview = () => {
  const tabs = {
    pools: {
      title: 'Liquidity',
      component: <Liquidity />
    },
    positions: {
      title: 'Dao vault',
      component: <Card>Dao vault</Card>
    },
    analysis: {
      title: 'Synth vault',
      component: <Card>Synth vault</Card>
    }
  }

  return (
    <Col className='Overview'>
      <Row className='info'>
        <Card className='weight' weight={1}>
          <Card.Title>Your weight</Card.Title>
          <Card.Body style={{ marginTop: 'var(--main-margin)' }}>
            <Col>
              <Row>XXXXXX SPARTA</Row>
              <Row style={{ opacity: 0.5 }}>~XXXXXX USD</Row>
            </Col>
          </Card.Body>
        </Card>
        <Card className='rewards' weight={1}>
          <Card.Title>Your rewards</Card.Title>
          <Card.Body style={{ marginTop: 'var(--main-margin)' }}>
            <Row style={{ alignItems: 'center' }}>
              <Col>
                <Row>XXX SPARTA</Row>
                <Row style={{ opacity: 0.5 }}>~XXX USD</Row>
              </Col>
              <Row weight= {1} />
              <Button>Harvest $SPARTA</Button>
            </Row>
          </Card.Body>
        </Card>
      </Row>
      <Tabs className='tabs' tabs={tabs} />
    </Col>
  )
}

export default Overview
