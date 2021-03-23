import { useMemo, useState } from 'react'

export default function useToggle(): [State, Handlers] {
  const [state, setState] = useState<State>('CLOSED')

  const handlers = useMemo(
    () => ({
      open: () => {
        setState('OPEN')
      },
      close: () => {
        setState('CLOSED')
      },
      toggle: () => {
        setState((s) => (s === 'OPEN' ? 'CLOSED' : 'OPEN'))
      },
    }),
    [],
  )

  return [state, handlers]
}

type State = 'OPEN' | 'CLOSED'

type Handlers = {
  toggle: () => void
  open: () => void
  close: () => void
}
