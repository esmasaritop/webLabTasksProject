import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <div className="glass-card">
        <h1>Web Tasarımı ve Programlama</h1>
        <h2>LAB - 1</h2>

        <div className="info-group">
          <div>
            <span className="info-label">Ad Soyad</span>
            <span className="info-value">ESMA SARITOP</span>
          </div>

          <div>
            <span className="info-label">Öğrenci No</span>
            <span className="info-value">230541100</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
