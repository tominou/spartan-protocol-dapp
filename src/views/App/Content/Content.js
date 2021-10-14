import './Content.css'
import { Col, Row } from '../../../utils/components/Layout/Layout'
import { Route, Switch, Redirect } from 'react-router-dom'
import { routes } from '../../../routes'
import Liquidity from './Liquidity/Liquidity'
import Overview from './Overview/Overview'
import Pools from './Pools/Pools'

const Content = () => {

  const components = {
    '/home': Overview,
    '/pools': Pools,
    '/liquidity': Liquidity,
    '/swap': Pools,
    '/synths': Pools,
    '/bond': Pools,
    '/vault': Pools,
    '/dao': Pools,
    '/upgrade': Pools,
    '/donate': Pools
  }

  return (
    <Row className="Content">
      <Col className="Container">
        <Col className='View'>
          <Switch>
            {routes.filter(route => !route.hide).map(route => (
              <Route
                path={route.path}
                component={components[route.path] || null}
                key={route.path}
              />
            ))}
            <Redirect from="*" to="/home" />
          </Switch>
        </Col>
      </Col>
    </Row>
  )
}

export default Content
