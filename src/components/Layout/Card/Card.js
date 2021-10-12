import './Card.css'
import { Col, Headline, Row } from '../Layout'

const Card = (props) => {
  const { className, style, title } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-card',
    style: style || {}
  }

  if (className) newProps.className = ' ' + className

  // console.log('Row PROPS', newProps)

  return (
    <Col {...newProps} weight={1}>
      {!!title &&
        <Row style={{ marginBottom: 'var(--card-padding)' }}>
          <Headline size={3}>{title}</Headline>
        </Row>
      }
      {newProps.children}
    </Col>
  )
}

export default Card
