import { useSelector } from 'react-redux'

export const useUi = () => useSelector(state => state.ui)
export const useNavbarVisibility = () => useSelector(state => !!state.ui?.navbarVisible)
export const useTheme = () => useSelector(state => state.ui?.theme || 'dark')
