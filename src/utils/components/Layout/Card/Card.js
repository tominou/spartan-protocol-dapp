import './Card.css'
import { Col, Headline, Row } from '../Layout'

const Card = (props) => {
  const { children, className, style, onClick } = props

  const newProps = {
    children: children || null,
    className: 'Layout-card',
    style: style || {},
    onClick: onClick || null
  }

  if (className) newProps.className += ' ' + className

  return (
    <Col {...newProps} weight={1}>
      {newProps.children}
    </Col>
  )
}

Card.Body = (props) => <Col {...props || {}} />
Card.Title = (props) => <Headline {...props || {}} size={3} />

export default Card
