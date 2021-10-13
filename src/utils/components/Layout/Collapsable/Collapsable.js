import { useLayoutEffect, useRef } from 'react'
import './Collapsable.css'

const Collapsable = (props) => {
  const ref = useRef()
  const height = useRef(0)
  const { className, style, weight, collapsed } = props

  const newProps = {
    children: props.children || null,
    className: 'Layout-collapsable',
    style: style || {},
    onClick: props.onClick || null
  }

  if (className) newProps.className += ' ' + className
  if (weight) newProps.style.flex = weight

  useLayoutEffect(() => {
    if (ref.current && ref.current.offsetHeight > height.current) {
      height.current = ref.current.offsetHeight || 0
      // console.log('height.current', height.current)
    }
  }, [collapsed])

  newProps.style.maxHeight = collapsed ? (height.current || 500) : 0

  // console.log('collapsed', collapsed)

  return (
    <div ref={ref} {...newProps} />
  )
}

export default Collapsable
