const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point of your JavaScript file
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js', // Output bundle file
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader', // Use postcss-loader for processing Tailwind CSS
                ],
            },
        ],
    },
};
