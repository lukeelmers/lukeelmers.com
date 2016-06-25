'use strict'

class App {
    constructor() {
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', () => {
                document.documentElement.className = 'js'
                console.log('loaded')
            })
        }
    }
}

module.exports = new App()
