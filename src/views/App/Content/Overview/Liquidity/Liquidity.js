import { Button, Card, Col, Row } from '../../../../../utils/components/Layout/Layout'

const Liquidity = () => {
  return (
    <Col>
      <Row>
        <Row weight={1} />
        <Button>+ Add liquidity</Button>
      </Row>
      <Card style={{ marginTop: 'var(--main-margin)' }}>
        Liquidity
      </Card>
    </Col>
  )
}

export default Liquidity
