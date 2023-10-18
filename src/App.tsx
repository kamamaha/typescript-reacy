import Counter from "./components/Counter3"
import { CounterProvider } from "./components/context/CounterContext"
import { initState } from "./components/context/CounterContext"


function App() {


  return (
    <>
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>{(num: number) => <>Current Count {num}</>}</Counter>
    </CounterProvider>
     
    </>
  )
}

export default App
