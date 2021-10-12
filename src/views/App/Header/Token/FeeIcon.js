import { useEffect, useState } from 'react'
import { Icon } from '../../../../utils/components/Icons/Icons'
import { useTheme } from '../../../../store/ui/selector'
import { useSelector } from 'react-redux'

const FeeIcon = () => {
  // const dispatch = useDispatch()
  const theme = useTheme()
  const [burn, setBurn] = useState(false)
  const feeBurnRecent = useSelector(state => state.sparta?.feeBurnRecent)

  useEffect(() => {
    console.log('feeBurnRecent', feeBurnRecent)
    setBurn(true)
    const timer = setTimeout(() => setBurn(false), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [feeBurnRecent])

  return (
    <Icon
      icon="fire"
      size={burn ? '15' : '15'}
      fill={burn ? 'red' : theme === 'dark' ? 'white' : 'black'}
      className="icon-fee"
    />
  )
}

export default FeeIcon
