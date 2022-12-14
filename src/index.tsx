import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import Store from './store/store'
import { createContext } from 'react'

interface State {
  store: Store
}

const store = new Store()

export const Context = createContext<State>({
  store,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <Context.Provider value={{
    store
  }}>
    <Router>
        <App />
    </Router>
  </Context.Provider>
)