import './Navbar.css'
import { Icon } from '../Icons/Icons'
import { Col, Row } from '../Layout/Layout'
import { routes } from '../../routes'
import { useHistory, useLocation } from 'react-router-dom'
import { useNavbarVisibility, useTheme } from '../../store/ui/selector'
import { toggleNavbarVisibility as toggle } from '../../store/ui/actions'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const visible = useNavbarVisibility()
  const theme = useTheme()
  const { pathname } = useLocation()
  const history = useHistory()

  const goToRoute = (path) => {
    history.push(path)
    dispatch(toggle())
  }

  const iconFill = theme === 'dark' ? 'white' : 'black'

  return (
    <Col className={'Navbar' + (visible ? ' visible' : '')}>
      {routes.map(route => {
        if (route.hide) return null
        return (
          <Row key={route.path} className={'item active ' + (pathname === route.path ? 'current' : '')} onClick={() => goToRoute(route.path)}>
            <div className="icon">
              <Icon
                  icon={route.icon}
                  fill={iconFill}
                  size="24"
                />
            </div>
            <div className="text">{route.name}</div>
          </Row>
        )
      })}
    </Col>
  )
}

export default Navbar
