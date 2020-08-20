import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TodoPage from './pages/TodoPage'
import AboutPage from './pages/AboutPage'


const App: React.FC = () => {
  

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoPage} path="/" exact/>
          <Route component={AboutPage} path="/about"/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
