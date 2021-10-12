import './Col.css'

const Col = (props) => {
  const { className, style, weight } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-col',
    style: style || {},
    onClick: props.onClick || null
  }

  if (className) newProps.className += ' ' + className
  if (weight) newProps.style.flex = weight

  // console.log('COL PROPS', newProps)

  return (
    <div {...newProps} />
  )
}

export default Col
