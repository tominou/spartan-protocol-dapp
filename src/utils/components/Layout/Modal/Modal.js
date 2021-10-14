import './Modal.css'
import { Col } from '../Layout'
import { useEffect, useState } from 'react'
import Header from './Header'

const Modal = (props) => {
  const { className, style, show, close, children } = props

  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (show) setTimeout(() => setShown(true), 10)
    if (!show) setTimeout(() => setShown(false), 300)

    const hash = window.location.hash
    if (show && hash !== '#modal') {
      const { origin, pathname } = window.location
      const url = origin + pathname + '#modal'
      window.history.pushState({}, '', url)
      window.addEventListener('hashchange', function() {
        console.log('modal close')
        close()
      })
    }
    if (!show && hash === '#modal') {
      const { origin, pathname } = window.location
      const url = origin + pathname
      window.history.replaceState({}, '', url);
    }
  }, [show])

  const newProps = {
    children: props.children || null,
    className: 'Layout-modal',
    style: style || {}
  }

  if (className) newProps.className += ' ' + className

  // console.log('Modal PROPS', newProps)
  if (!show && !shown) return null

  return (
    <div className={'Layout-modal ' + (show && shown ? 'show' : '')}>
      <Col className='background' onClick={close} />
      <Col className='content'>
        {children || null}
      </Col>
    </div>
  )
}

Modal.Header = Header
Modal.Body = (props) => <Col {...props} className='body' />

export default Modal
