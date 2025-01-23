const path = require('path');

module.exports = {
    plugins: {
        tailwindcss: {
            config: path.resolve(__dirname, '../../tailwind.config.js'),
        },
        'postcss-preset-env': {
            stage: 1,
            features: {
                'nesting-rules': true,
            },
        },
        autoprefixer: {},
    },
};
