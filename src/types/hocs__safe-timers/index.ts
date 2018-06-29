///<reference types="react" />

declare module '@hocs/safe-timers' {
  import * as React from 'react'

  export const withSafeInterval: () => void
  export interface WithSafeIntevalProps {
    setSafeInterval: (fn: () => void, interval: number) => void
  }
}
