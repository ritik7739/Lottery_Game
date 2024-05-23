import './App.css'
// import LudoBoard from './assets/LudoBoard'
import TodoList from './assets/TodoList'
import LotteryGame from './assets/LotteryGame'
import Ticket from './assets/Ticket'

function App() {
  return (
    <>
    <LotteryGame n={5} winningSum={10}/>
    </>
  )
}

export default App
