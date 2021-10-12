import React, { useEffect, useState } from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'

import { getNetwork } from './utils/web3'
import { getLibrary } from './utils/web3React'

ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)

const globalFormat = {
  prefix: '',
  decimalSeparator: '.',
  groupSeparator: ',',
  groupSize: 3,
  secondaryGroupSize: 0,
  fractionGroupSeparator: ' ',
  fractionGroupSize: 0,
  suffix: '',
}

BigNumber.config({ FORMAT: globalFormat })

const Providers = ({ children }) => {
  const [network, setNetwork] = useState(getNetwork())

  const tryParse = (data) => {
    try {
      return JSON.parse(data)
    } catch (e) {
      return ''
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (network !== tryParse(window.localStorage.getItem('network'))) {
        setNetwork(getNetwork())
      }
    }, 500)
    return () => clearInterval(interval)
  })

  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        {children || null}
      </Web3ReactProvider>
    </Provider>
  )
}

export default Providers
