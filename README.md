## <u>Configuring a project</u>

In the project directiory:

### `npm install`

### `npm init -y`
   
create scripts for **package.json**:

        "scripts": {
            "start": "webpack --mode=development --watch",
            "build": "webpack --mode-production",
            ...
            ...
        },

## <u>Installations </u> 

In the project directiory:

> Install: webpack, webpack-cli, webpack-dev-server

### `npm i webpack webpack-cli webpack-dev-server -D`

<hr>

> Install: @babel/core, babel-loader, @babel/preset-env, @babel/preset-react

### `npm install @babel/core babel-loader @babel/preset-env @babel/preset-react`

<hr>

> Install: react, react-dom
### `npm install react react-dom`

<hr>

> Install: typescript

### `npm install typescript @types/react @types/react-dom`
### `npm install ts-loader`

<hr>

> Install: styleloader, css-loader

### `npm install style-loader css-loader`

<hr>

> Install: html-webpack-plugin

### `npm i html-webpack-plugin`

<hr>

> Install: react-bootstrap, bootstrap

### `npm install react-bootstrap bootstrap`

<hr>

> Install: axios

### `npm install axios`

<hr>

> Install: react-yandex-maps

### `npm install --save react-yandex-maps`
in my case: `npm install --save react-yandex-maps`



## <u>Configurations</u>

### Configure webpack.

In the project root directory:

### `touch webpack.config.js`

<br>

> webpack.config.js


    const path = require('path');
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    module.exports = {
        mode: 'development',
        devtool: "source-map",
        entry: "./src/index.tsx",
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "bundle.js"
        },

        resolve:{
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"]
                }
            ]
        },
        
        plugins: [
            new HtmlWebpackPlugin({
                template:"./src/index.html"
            })
        ]

    };


<br>

### Configure typescript.



### `touch tsconfig.json`

<br>

> tsconfig.json

    {
        "compilerOptions": {
            "jsx": "react"
        },
        "exclude": [
            "node_modules"
        ]
    }


## <b><u>./src/components</b></u>

   > ./components
   
## <b><u>./src/styles</b></u>

   > ./styles

## <b><u>./src</b></u>

### `./src$ touch index.html`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>F1. Exercise</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>

### `./src$ touch index.tsx`


    import * as React from "react";
    import { render } from "react-dom";

    /* 
    * index.tsx подключает App.tsx к index.html с помощью ReactDOM
    * поэтому нам необходимо их импортировать
    **/

    // import ReactDOM from "react-dom/client"; 
    import App from "./components/App"

    /*
    * Все компоненты собираются в App.tsx
    * App.tsx - это верхний уровень, внутрь которого подгружаются
    * остальные компонентыю
    * Далее, всё рендерится с помощью ReactDOM и подвязывается
    * к index.html через <div id="root">
    **/

    render(<App/>, document.getElementById("root"));



### `./src$ mkdir components`

    import * as React from "react"; 

    function App() {
        return (
            <>
                <h1>Hello</h1>
            </>
        )
    }

    export default App;

### `./src$ mkdir styles`

<hr>

