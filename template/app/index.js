import React, { Component } from 'react';
import { render } from 'react-dom';
import Router from './route';


import style from './index.scss'








render(<Router className={style.root} />, document.querySelector('.root'))