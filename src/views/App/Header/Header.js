import './Header.css'
import { Icon } from '../../../utils/components/Icons/Icons'
import { Headline, Row } from '../../../utils/components/Layout/Layout'
import ThemeSwitcher from './ThemeSwitcher'
import Token from './Token/Token'
import { useNavbarVisibility, useTheme } from '../../../store/ui/selector'
import { toggleNavbarVisibility as toggleNavbar } from '../../../store/ui/actions'
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
        <Token />
      </Row>
    </Row>
  )
}

export default Header
