import { useEffect } from 'react'
import './Token.css'
import FeeIcon from './FeeIcon'
import { Icon } from '../../../../utils/components/Icons/Icons'
import { Button, Card, Col, Modal, Row } from '../../../../utils/components/Layout/Layout'
import { useTheme } from '../../../../store/ui/selector'
import { useSelector } from 'react-redux'
import {
  formatFromUnits,
} from '../../../../utils/bigNumber'

const Supply = ({ close }) => {
  // const dispatch = useDispatch()
  const theme = useTheme()

  return (
    <>
      <Modal.Header close={close}>
        Supply
      </Modal.Header>
      <Modal.Body>
        Body
      </Modal.Body>
    </>
  )
}

export default Supply
