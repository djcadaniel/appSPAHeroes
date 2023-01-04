import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { AppHeroes } from './appHeroes'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      < AppHeroes/>
    </BrowserRouter>
  </React.StrictMode>,
)
