import { useEffect } from 'react'
import './Header.css'
import { Icon } from '../../../utils/components/Icons/Icons'
import { Row } from '../../../utils/components/Layout/Layout'
import { useTheme } from '../../../store/ui/selector'
import { toggleTheme as toggle } from '../../../store/ui/actions'
import { useDispatch } from 'react-redux'

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  useEffect(() => {
    // console.log('theme', theme)
    document.body.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
    document.body.classList.remove(theme === 'dark' ? 'theme-light' : 'theme-dark')
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  theme === 'dark' ? '#25212D' : '#ffffff');
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <Row className="button" onClick={() => dispatch(toggle())}>
      <Icon
        icon={theme === 'dark' ? 'moon' : 'sun'}
        fill={'white'}
        size="24"
      />
    </Row>
  )
}

export default ThemeSwitcher
