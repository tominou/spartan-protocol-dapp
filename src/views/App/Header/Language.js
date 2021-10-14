import { useState } from 'react'
import './Header.css'
import { Row } from '../../../utils/components/Layout/Layout'
import { useDispatch } from 'react-redux'



// flags
import auFlag from '../../../assets/flags/au.svg'
import gbFlag from '../../../assets/flags/gb.svg'
import usFlag from '../../../assets/flags/us.svg'
import cnFlag from '../../../assets/flags/cn.svg'
import esFlag from '../../../assets/flags/es.svg'
import deFlag from '../../../assets/flags/de.svg'
import frFlag from '../../../assets/flags/fr.svg'
import grFlag from '../../../assets/flags/gr.svg'
import inFlag from '../../../assets/flags/in.svg'
import irFlag from '../../../assets/flags/ir.svg'
import itFlag from '../../../assets/flags/it.svg'
import nlFlag from '../../../assets/flags/nl.svg'
import plFlag from '../../../assets/flags/pl.svg'
import ptFlag from '../../../assets/flags/pt.svg'
import roFlag from '../../../assets/flags/ro.svg'
import ruFlag from '../../../assets/flags/ru.svg'
import seFlag from '../../../assets/flags/se.svg'
import trFlag from '../../../assets/flags/tr.svg'
import uaFlag from '../../../assets/flags/ua.svg'
import vnFlag from '../../../assets/flags/vn.svg'
import zaFlag from '../../../assets/flags/za.svg'

const getEnFlag = () => {
  const enCountry = navigator.language.slice(-2)
  if (enCountry === 'AU') {
    return auFlag
  }
  if (enCountry === 'US') {
    return usFlag
  }
  return gbFlag
}

const locales = [
  {
    id: 'en',
    name: 'English',
    flag: getEnFlag(),
  },
  {
    id: 'zh',
    name: '中国人',
    flag: cnFlag,
  },
  {
    id: 'es',
    name: 'Español',
    flag: esFlag,
  },
  {
    id: 'fr',
    name: 'Français',
    flag: frFlag,
  },
  {
    id: 'af',
    name: 'Afrikaans',
    flag: zaFlag,
  },
  {
    id: 'bn',
    name: 'বাংলা',
    flag: inFlag,
  },
  {
    id: 'de',
    name: 'Deutsche',
    flag: deFlag,
  },
  {
    id: 'el',
    name: 'Ελληνικά',
    flag: grFlag,
  },
  {
    id: 'fa',
    name: 'فارسی',
    flag: irFlag,
  },
  {
    id: 'hi',
    name: 'हिंदी',
    flag: inFlag,
  },
  {
    id: 'it',
    name: 'Italiano',
    flag: itFlag,
  },
  {
    id: 'nl',
    name: 'Nederlands',
    flag: nlFlag,
  },
  {
    id: 'pa',
    name: 'ਪੰਜਾਬੀ',
    flag: inFlag,
  },
  {
    id: 'pl',
    name: 'Polski',
    flag: plFlag,
  },
  {
    id: 'pt',
    name: 'Português',
    flag: ptFlag,
  },
  {
    id: 'ro',
    name: 'Română',
    flag: roFlag,
  },
  {
    id: 'ru',
    name: 'Pусский',
    flag: ruFlag,
  },
  {
    id: 'sv',
    name: 'Svenska',
    flag: seFlag,
  },
  {
    id: 'tr',
    name: 'Türkçe',
    flag: trFlag,
  },
  {
    id: 'uk',
    name: 'Український',
    flag: uaFlag,
  },
  {
    id: 'vi',
    name: 'Tiếng Việt',
    flag: vnFlag,
  },
]

// const getLocale = () => locales?.filter((x) => x.id === i18n.languages[0])[0]

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const [flag, setFlag] = useState(locales[0]?.flag)

  return (
    <Row className="button">
      <img src={flag} alt="flag" style={{ borderRadius: 'var(--border-radius)', margin: 5 }} />
    </Row>
  )
}

export default ThemeSwitcher
