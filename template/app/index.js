import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import './index.scss'

import configure from './store'
import Router from './router'

 
render(<Provider store={configure()}>
  <Router />
</Provider>,document.querySelector('.root'))