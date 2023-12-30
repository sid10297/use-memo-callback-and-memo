import { useCallback, useState } from 'react'
import Child from './Child'
import { buttonMargin, parentContainer } from './styles'

const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('')
  const [arr, setArr] = useState([1, 2, 3])

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => {
      return prevCount + 1
    })
  }, [setCount])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handlePushToArr = (elem) => {
    setArr((prev) => [...prev, elem])
  }

  return (
    <div>
      <div style={parentContainer}>
        <h1>Parent Count: {count}</h1>
        <button style={buttonMargin} onClick={handleIncrement}>
          Increment
        </button>
        <input type="text" value={input} onChange={handleInput} />
      </div>
      <Child
        arr={arr}
        count={count}
        updateCount={handleIncrement}
        handlePushToArr={handlePushToArr}
      />
    </div>
  )
}

export default App
