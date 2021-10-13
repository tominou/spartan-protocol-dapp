import { Button, Card, Col, Headline, Row, Tabs } from '../../../../../../utils/components/Layout/Layout'
// import './Pool.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BN, formatFromUnits, formatFromWei } from '../../../../../../utils/bigNumber'
import { getAddresses } from '../../../../../../utils/web3'
import { Icon } from '../../../../../../utils/components/Icons/Icons'
// import { Tooltip } from '../../../../../../utils/components/Tooltip/tooltip'
import { calcAPY } from '../../../../../../utils/math/nonContract'

const Overview = ({ asset }) => {
  const [showDetails, setShowDetails] = useState(false)
  const spartaPrice = useSelector(state => state.web3?.spartaPrice)
  const {
    tokenAddress,
    baseAmount,
    tokenAmount,
    recentDivis,
    lastMonthDivis,
    fees,
    genesis,
    newPool,
    curated,
  } = asset
  const token = useSelector(state => state.pool?.tokenDetails?.filter((i) => i.address === tokenAddress)[0])
  const tokenValueBase = BN(baseAmount).div(tokenAmount)
  const tokenValueUSD = tokenValueBase.times(spartaPrice)
  const poolDepthUsd = BN(baseAmount).times(2).times(spartaPrice)
  const APY = formatFromUnits(calcAPY(asset), 2)

  const getDivis = () =>
    BN(recentDivis).isGreaterThan(lastMonthDivis) ? recentDivis : lastMonthDivis

  const poolAgeDays = (Date.now() - genesis * 1000) / 1000 / 60 / 60 / 24
/*
  const toggleCollapse = () => {
    setShowDetails(!showDetails)
  }

  const revenueTooltip = Tooltip(
    t,
    'revenue',
    poolAgeDays > 30 ? '30' : poolAgeDays.toFixed(2),
  )
  const swapRevTooltip = Tooltip(
    t,
    'swapRevenue',
    poolAgeDays > 30 ? '30' : poolAgeDays.toFixed(2),
  )
  const diviRevTooltip = Tooltip(
    t,
    'dividendRevenue',
    poolAgeDays > 30 ? '30' : poolAgeDays.toFixed(2),
  )
  const poolCapTooltip = Tooltip(t, 'poolCap')
*/
  const getDepthPC = () => BN(baseAmount).div(asset.baseCap).times(100)
  // console.log('token', token)

  return (
    <Card>
      <Row style={{ alignItems: 'center' }}>
        <Row>
          <img
            src={token.symbolUrl}
            className="rounded-circle"
            alt={token.symbol}
            height="45"
            style={{ background: 'white', borderRadius: '50%' }}
          />
        </Row>
        <Row style={{ marginLeft: 'var(--card-padding)' }} weight={1}>
          <Col>
            <Headline size={3}>{token.symbol}</Headline>
            <Row>${formatFromUnits(tokenValueUSD, 2)}</Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>APY</Row>
            <Row>{APY}%</Row>
          </Col>
        </Row>
      </Row>
      <Row style={{ marginTop: 'var(--card-padding)' }}>
        <Button weight={1}>
          Bond
        </Button>
        <Button weight={1} style={{ marginRight: 'var(--card-padding)', marginLeft: 'var(--card-padding)' }}>
          Join
        </Button>
        <Button weight={1}>
          Swap
        </Button>
      </Row>
    </Card>
  )
}

export default Overview
