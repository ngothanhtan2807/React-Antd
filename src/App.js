import { PrimaryLayout } from "Components/Layout";
import { Customer } from "Containers/Customers";
import { Product } from "Containers/Product";
import { User } from "Containers/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <StyleClass className='center'> */}
        
          <Routes>
            <Route exact element={<PrimaryLayout/>}>

            <Route path='/user' element={<User />}></Route>
            <Route path='/customer' element={<Customer />}></Route>
            <Route path='/product' element={<Product />}></Route>
            </Route>

            {/* <Route path='/login' element={<LoginForm />}></Route>
            <Route path='*' element={<Page404 />}></Route> */}
          </Routes>

        {/* </StyleClass> */}
      </BrowserRouter>
    </div>

  );
}

export default App;