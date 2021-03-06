import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import CounterStore from './stores/counter'
import { Provider } from 'mobx-react' // MobX 에서 사용하는 Provider

const counter = new CounterStore() // 스토어 인스턴스를 만들고

ReactDOM.render(
  <React.StrictMode>
    <Provider counter={counter}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
