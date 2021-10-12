import { Col, Row, Headline } from '../../../../components/Layout/Layout'

const Pools = () => {
  return (
    <Col>
      <Headline size={1}>
        Pools
      </Headline>
      <Row style={{ marginTop: 25 }}>
        <div style={{ background: 'var(--card-background)', borderRadius: 'var(--border-radius)', padding: 25, flex: 1 }}>
          Total volume
        </div>
        <div style={{ background: 'var(--card-background)', borderRadius: 'var(--border-radius)', padding: 25, marginLeft: 'var(--main-margin)', flex: 1 }}>
          Total pooled
        </div>
      </Row>
    </Col>
  )
}

export default Pools
