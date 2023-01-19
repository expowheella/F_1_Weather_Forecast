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
