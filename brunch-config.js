module.exports = {

    files: {
        javascripts: { joinTo: 'app.js' },
        stylesheets: { joinTo: 'app.css' }
    },

    modules: {
        autoRequire: {
            'app.js': ['index']
        }
    },

    plugins: {
        babel: {
            babelrc: true,
            pattern: /\.(js)$/
        },
        digest: {
            pattern: /DIGEST\(\/?([^\)]*)\)/g,
            referenceFiles: /\.(hbs|html|scss|js)$/,
            environments: ['production'],
            prependHost: { production: 'https://lukeelmers.com/' },
            manifest: ''
        },
        sass: {
            mode: 'native',
            options: {
                includePaths: [
                    'node_modules/susy/sass'
                ]
            }
        },
        static: {
            processors: [
                require('html-brunch-static')({
                    handlebars: {
                        enableProcessor: true
                    }
                })
            ]
        }
    },

    overrides: {
        production: {
            plugins: {
                autoReload: {
                    enabled: false
                },
                postcss: {
                    processors: [
                        require('autoprefixer'),
                        require('cssnano')
                    ]
                }
            }
        }
    }

}
