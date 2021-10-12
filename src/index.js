import React from 'react'
import ReactDOM from 'react-dom'
import Providers from './Providers'
import App from './views/App/App'
import DataManager from './utils/DataManager/DataManager'

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <DataManager />
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
)
