const autoPrefixer = require('autoprefixer');
const Cssnano = require('cssnano');


module.exports = {
    plugins: [
        autoPrefixer,
        Cssnano({ preset: 'default' })
    ]
}