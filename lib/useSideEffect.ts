import { useState, useEffect } from 'react'

/**
 * @param {Object} state - React state.
 * @returns {Array} Any.
 * @example
 * useSideEffect(state)
 */
const useSideEffect = (state: object = {}): [object] => {
  const [actual, setActual] = useState(state)
  const [pre, setPre] = useState(null)

  useEffect(() => {
    if (JSON.stringify(state) === JSON.stringify(pre)) {
      return
    }
    setActual(state)
    setPre(actual)
  }, [actual, state])

  return [actual]
}

export default useSideEffect
