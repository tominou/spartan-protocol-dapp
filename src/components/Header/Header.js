import './Header.css'
import { Icon } from '../Icons/Icons'
import { Headline, Row } from '../Layout/Layout'
import ThemeSwitcher from './ThemeSwitcher'
import { useNavbarVisibility, useTheme } from '../../store/ui/selector'
import { toggleNavbarVisibility as toggleNavbar } from '../../store/ui/actions'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const navbarVisible = useNavbarVisibility()

  return (
    <Row className={'Header ' + (navbarVisible ? ' nav' : '')}>
      <div className="menu" onClick={() => dispatch(toggleNavbar())}>
        <Icon
          icon={navbarVisible ? 'close' : 'menuClose'}
          fill={theme === 'dark' ? 'white' : 'black'}
          size={navbarVisible ? 18 : 24}
        />
      </div>
      <Row className="brand">
        <div className="icon">
          <Icon
            icon="spartav2"
            fill={'white'}
            size="30"
          />
        </div>
        <Headline size={3} className="name">Spartan Protocol</Headline>
      </Row>
      <div style={{ flex: 1 }} />
      <Row className='toolbar'>
        <div className="button"></div>
        <div className="button"></div>
        <ThemeSwitcher />
        <Row className="token">
          <div className="address">0xe4ae305ebe1ab...</div>
          <Row className="price">
            <div className="icon">
              <Icon
                icon="spartav2"
                fill={'white'}
                size="34"
              />
            </div>
            <div className="value">$0.52</div>
          </Row>
        </Row>
      </Row>
    </Row>
  )
}

export default Header
