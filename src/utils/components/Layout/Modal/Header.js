import './Modal.css'
import { Headline, Row } from '../Layout'
import { Icon } from '../../../../utils/components/Icons/Icons'
import { useTheme } from '../../../../store/ui/selector'

const Header = (props) => {
  const theme = useTheme()

  const close = () => {
    if (props.close) props.close()
  }

  return (
    <Row {...props} className='header'>
      <Row weight={1} className='content'>
        <Headline size={2}>{props.children}</Headline>
      </Row>
      <Row onClick={close}>
        <Icon
          icon="close"
          fill={theme === 'dark' ? 'white' : 'black'}
          className="close"
          size="14"
        />
      </Row>
    </Row>
  )
}

export default Header
