/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo, useMemo } from 'react'
import { buttonMargin, childContainer } from './styles'
import { isEqual } from 'lodash'

const Child = ({ count, updateCount, arr, handlePushToArr }) => {
  const slowComputation = useMemo(() => {
    let n = 0
    for (let i = 0; i < 50000000; i++) {
      n++
    }
    return n
  }, [])

  const handlePushElem = () => {
    handlePushToArr(arr.length + 1)
  }

  console.log('Child has rendered...')
  return (
    <div style={childContainer}>
      <p>
        Slow Computed Number: {slowComputation}, Child Count: {count}
      </p>
      <button style={buttonMargin} onClick={updateCount}>
        Update Count
      </button>
      {arr.map((ele, i) => (
        <p key={i}>{ele}</p>
      ))}
      <button style={buttonMargin} onClick={handlePushElem}>
        Push New Element
      </button>
    </div>
  )
}

export default memo(Child, (prevProps, nextProps) => {
  const arePropsEqual =
    prevProps.count === nextProps.count && isEqual(prevProps.arr, nextProps.arr)
  console.log('IsEqual: ', arePropsEqual)
  console.log(`Child will ${arePropsEqual ? 'not ' : ''}render...`)
  return arePropsEqual
})
