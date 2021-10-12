import { useEffect } from 'react'
import './Token.css'
import FeeIcon from './FeeIcon'
import { Icon } from '../../../../utils/components/Icons/Icons'
import { Row } from '../../../../utils/components/Layout/Layout'
import { useTheme } from '../../../../store/ui/selector'
import { useSelector } from 'react-redux'
import {
  formatFromUnits,
} from '../../../../utils/bigNumber'

const Token = () => {
  // const dispatch = useDispatch()
  const theme = useTheme()
  const spartaPrice = useSelector(state => state.web3?.spartaPrice)

  useEffect(() => {
    console.log('spartaPrice', spartaPrice)
  }, [spartaPrice])

  return (
    <Row className="token">
      <Row className="address">0xe4ae305ebe1ab...</Row>
      <Row className="price">
        <Icon
          icon="arrowDown"
          fill={theme === 'dark' ? 'white' : 'black'}
          className="icon-arrow"
          size="13"
        />
        <Row className="value">${formatFromUnits(spartaPrice, 2)}</Row>
        <FeeIcon />
      </Row>
    </Row>
  )
}

export default Token
