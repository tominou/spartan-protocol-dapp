import { useEffect, useState } from 'react'
import './Token.css'
import FeeIcon from './FeeIcon'
import { Icon } from '../../../../utils/components/Icons/Icons'
import { Button, Modal, Row } from '../../../../utils/components/Layout/Layout'
import { useTheme } from '../../../../store/ui/selector'
import { useSelector } from 'react-redux'
import {
  formatFromUnits,
} from '../../../../utils/bigNumber'
import Supply from './Supply'

const Token = () => {
  // const dispatch = useDispatch()
  const theme = useTheme()
  const spartaPrice = useSelector(state => state.web3?.spartaPrice)
  const [showSupply, setShowSupply] = useState(false)

  useEffect(() => {
    console.log('spartaPrice', spartaPrice)
  }, [spartaPrice])

  const closeSupply = () => {
     setShowSupply(false)
  }

  return (
    <Row className="token">
      <Row className="address">0xe4ae305ebe1ab...</Row>
      <Button type={2} className="price" onClick={() => setShowSupply(true)}>
        <Icon
          icon="arrowDown"
          fill={theme === 'dark' ? 'white' : 'black'}
          className="icon-arrow"
          size="13"
        />
        <Row className="value">${formatFromUnits(spartaPrice, 2)}</Row>
        <FeeIcon />
      </Button>
      <Modal show={showSupply} close={closeSupply}>
        <Supply close={closeSupply} />
      </Modal>
    </Row>
  )
}

export default Token
