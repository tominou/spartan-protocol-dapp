import { Component } from 'react'
import './Card.css'
import { Col, Headline, Row } from '../Layout'

const Collapse = (props) => {
  const { className, style } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-row',
    style: style || {}
  }

  if (className) newProps.className = ' ' + className

  // console.log('Row PROPS', newProps)

  return (
    <Row {...newProps} />
  )
}

class Card extends Component {
  static Collapse = Collapse

  render () {
    const { children, className, style, title, onClick } = this.props

    const newProps = {
      children: children || null,
      className: 'Layout-card',
      style: style || {},
      onClick: onClick || null
    }

    if (className) newProps.className = ' ' + className

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
}

export default Card
