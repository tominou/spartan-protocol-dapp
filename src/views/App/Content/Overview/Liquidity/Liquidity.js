import { Button, Card, Col, Row } from '../../../../../utils/components/Layout/Layout'

const Liquidity = () => {
  return (
    <Col>
      <Row>
        <Row weight={1} style={{ background: 'var(--card-background)', borderRadius: 'var(--border-radius)', marginRight: 'var(--main-margin)' }}>Sort</Row>
        <Button>+ Add liquidity</Button>
      </Row>
      <Card style={{ marginTop: 'var(--main-margin)' }}>
        Liquidity
      </Card>
    </Col>
  )
}

export default Liquidity
