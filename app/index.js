import React from 'react'
import {render} from 'react-dom'

import './index.scss'

const Haha = props  => {
	return <div className='test'>2222222222222</div>
}
 
render(<Haha /> ,document.querySelector('.root'))