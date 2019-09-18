const path = require('path')
const fs = require('fs')


module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: '项目描述',
      default: 'react project',
    },
    author: {
      type: 'string',
      message: 'Author',
    }
  },
  skipInterpolation: [ 'app/router/index.js' ]
}
