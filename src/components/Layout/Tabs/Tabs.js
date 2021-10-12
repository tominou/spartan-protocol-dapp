import './Tabs.css'
import { Col, Row } from '../Layout'
import { useState } from 'react'

const Tabs = (props) => {
  const { className, style, tabs, defaultTab } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-tabs',
    style: style || {}
  }

  if (className) newProps.className += ' ' + className

  // console.log('Tabd PROPS', newProps)

  const list = []
  for (const t in tabs) list.push(t)

  console.log('list', list)

  const [focused, setFocused] = useState(defaultTab || list[0])

  return (
    <Col {...newProps}>
      <Row className='tabs'>
        {list.map(tab => (
          <Row key={tab} onClick={() => setFocused(tab)} className={focused === tab ? 'focused' : ''}>
            {tabs[tab].title}
          </Row>
        ))}
      </Row>
      {tabs[focused].component}
    </Col>
  )
}

export default Tabs
