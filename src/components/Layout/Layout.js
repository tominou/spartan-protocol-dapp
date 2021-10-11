import './Layout.css'

const Element = (props) => {
  const { classLayout, className, weight } = props

  if (!classLayout) return null
  /*
  if (weight) {
    if (!props.style) props.style = {}
    props.style.flex = weight
  }
  */
  return (
    <div
      {...props}
      className={classLayout + ' ' + (className || '')}
    />
  )
}

export const Col = (props) => {
  return <Element classLayout='Layout-column' {...props} />
}

export const Row = (props) => {
  return <Element classLayout='Layout-row' {...props} />
}

export const Headline = (props) => {
  return <Element classLayout={'Layout-headline-' + props.size || 1} {...props} />
}

export default { Col, Row, Headline }
