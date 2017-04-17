'use strict'

require('particles.js')
const { particles } = require('./config')


class App {
    constructor() {
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', () => {
                document.documentElement.className = 'js'
                console.log('loaded')
                particlesJS('particles-js', particles)
            })
        }
    }
}

module.exports = new App()
