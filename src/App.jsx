import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './components/class-components'
import FunctionComponent from './components/function-components'
import ProductList from './components/products'
import Users from './components/users'
import ContextButtonComponent from './components/context-concept/button.jsx'
import ContextTextComponent from './components/context-concept/text.jsx'
import ShoppingCart from './components/context-concept/shoppingcart.jsx'
import UseReducerExample from './components/useReducer.jsx'
import FormComponent from './components/form/index.jsx'
import LoginComponent from './components/login/index.jsx'
import RegisterComponent from './components/register/index.jsx'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3', 'Product 4']

function App() {
  const [count, setCount] = useState(0)
  console.clear()
  return (
    <div>
      <h1>
        Duelurker
      </h1>
      {/* <ClassComponent /> */}
      {/* <ProductList dummyProductData={dummyProductData} name="Duelurker" job="Student" /> */}
      {/* <Users /> */}
      {/* <ContextButtonComponent></ContextButtonComponent>
      <ContextTextComponent></ContextTextComponent> */}
      {/* <ShoppingCart /> */}
      {/* <UseReducerExample/> */}
      {/* <FormComponent /> */}
      <div style={{display: 'flex', gap: '50px'}}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </div>
  );
}

export default App;
