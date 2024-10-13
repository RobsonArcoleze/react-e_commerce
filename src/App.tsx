// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ButtonInverse from './components/button-inverse/buttonInverse-component'
import ButtonPrimary from './components/button-primary/buttonPrimary-component'
import HeaderClient from './components/header-client/headerClient-component'
import ProductDetailsCardComponent from './components/ProductDetailsCard/ProductDetailsCard-component'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <HeaderClient></HeaderClient>
    <main>
      <section id="product-details-section" className="dsc-container">
        <ProductDetailsCardComponent/>
        <div className="dsc-btn-page-container">
            <ButtonPrimary/>
            <ButtonInverse/>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
