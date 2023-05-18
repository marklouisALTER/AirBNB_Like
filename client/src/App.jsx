import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import IndexPage from './pages/IndexPage'
function App() {


  return (
    <Routes>
      <Route index element={<IndexPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
   )
}

export default App
