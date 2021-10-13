import { Component } from 'react'
import './Card.css'
import { Col, Headline, Row } from '../Layout'

const Card = (props) => {
  const { children, className, style, title, onClick } = props

  const newProps = {
    children: children || null,
    className: 'Layout-card',
    style: style || {},
    onClick: onClick || null
  }

  if (className) newProps.className += ' ' + className

  return (
    <div {...newProps} weight={1}>
      {!!title &&
        <Row style={{ marginBottom: 'var(--card-padding)' }}>
          <Headline size={3}>{title}</Headline>
        </Row>
      }
      {newProps.children}
    </div>
  )
}

class CardClass extends Component {
  // static Collapse = Collapse

  render () {
    return <Card {...this.props} />
  }
}

export default CardClass
