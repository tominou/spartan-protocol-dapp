import { Col } from '../../../../../utils/components/Layout/Layout'
import './Overview.css'
import Pool from './Pool/Pool'
import { useSelector } from 'react-redux'

const Overview = () => {
  const poolDetails = useSelector(state => state.pool?.poolDetails)
  const list = (poolDetails || [])
      .filter((asset) => asset.baseAmount > 0)
      .sort((a, b) => b.baseAmount - a.baseAmount)
  console.log('list', list)
  return (
    <Col className='Overview'>
      {list.map(asset => <Pool key={asset.address} asset={asset} />)}
    </Col>
  )
}

export default Overview
