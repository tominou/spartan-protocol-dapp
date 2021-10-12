import { useSelector } from 'react-redux'

export const useWeb3 = (keys) => useSelector((state) => state.web3)
