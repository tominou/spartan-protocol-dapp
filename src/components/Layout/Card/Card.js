import './Card.css'

const Card = (props) => {
  const { className, style } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-card',
    style: style || {}
  }

  if (className) newProps.className = ' ' + className

  // console.log('Row PROPS', newProps)

  return (
    <div {...newProps} />
  )
}

export default Card
