
import './App.css'
// import Login from './components/Login'
import Login from './components/login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    // USER CONTEXT PROVIDER EXPORT KRRE YAHA HUM JO PAHELE EK METHOD BANAYA THA USKE NAAM SE WO 
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App