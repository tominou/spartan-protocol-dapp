import './Button.css'

const Button = (props) => {
  const { className, style, weight } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-button',
    style: style || {},
    onClick: props.onClick || null
  }

  if (className) newProps.className += ' ' + className
  if (weight) newProps.style.flex = weight

  // console.log('Row PROPS', newProps)

  return (
    <div {...newProps} />
  )
}

export default Button
