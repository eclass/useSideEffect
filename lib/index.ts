import { useState, useEffect } from 'react'

/**
 * Validate if object change to execute sideEffect.
 *
 * @param {Object} state - React state.
 * @returns {Array} Any.
 * @example
 * useSideEffect(state)
 */
export default function useSideEffect (state: object = {}): [object, Function] {
  const [actual, setActual] = useState(state)
  const [pre, setPre] = useState(null)

  useEffect(() => {
    if (JSON.stringify(state) !== JSON.stringify(pre)) {
      setActual(state)
      setPre(actual)
    }
  }, [actual, state, pre])

  return [actual, setActual]
}
