import './Headline.css'

const Headline = (props) => {
  const { className, size, style } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-headline',
    style: style || {}
  }

  newProps.className += ' size-' + ((!size || size < 1 || size > 3) ? '1' : size)
  if (className) newProps.className += ' ' + className

  // console.log('Headline PROPS', newProps)

  return (
    <div {...newProps} />
  )
}

export default Headline
