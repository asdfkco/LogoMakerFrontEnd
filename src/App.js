import Error404 from "./ErrorPage/Error404";
import MainPg from "./Main/main";
import {Routes,Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPg/>}></Route>


          <Route path="*" element={<Error404/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
