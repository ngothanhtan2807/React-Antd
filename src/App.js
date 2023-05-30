import { PrimaryLayout } from "Components/Layout";
import { User } from "Containers/User";
 import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      {/* <StyleClass className='center'> */}
        <Routes>
          <Route path='/user' element={<User />}></Route>
         
            {/* <Route path='/login' element={<LoginForm />}></Route>
            <Route path='*' element={<Page404 />}></Route> */}
        </Routes>
      {/* </StyleClass> */}
    </BrowserRouter>

  );
}

export default App;