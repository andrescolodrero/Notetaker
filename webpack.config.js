// in this file we will export the web pack configuration
// Webpack will take the Main.js file, run it into (react and es2015) transformations and pack it in bundle.
module.exports = {
    // root of my components. Here teh app know wher to process js
    entry: "./app/components/App.js",
    output : {
        // once is done to compile, put the content in bundle
        filename: "public/bundle.js"
    },
    module: {
        // where to fidnd modules, so we dont need to add continuosly js files to index
        loaders: [
            {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_componets)/,
            loader: 'babel',
            // what transformations does babel.
            query: {
                presets: ['react', 'es2015']
            }
        }
        ]
    }

};