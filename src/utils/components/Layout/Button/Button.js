import { Row } from '../Layout'
import './Button.css'

const Button = (props) => {
  const { className, style, weight, type } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-button',
    style: style || {},
    onClick: props.onClick || null
  }

  newProps.className += ' type-' + (type || '1')

  if (className) newProps.className += ' ' + className
  if (weight) newProps.style.flex = weight

  // console.log('Button PROPS', newProps)

  return (
    <Row {...newProps} />
  )
}

export default Button
