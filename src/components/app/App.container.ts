import { compose, withState } from 'recompose'
import { withSafeInterval, WithSafeIntevalProps } from '@hocs/safe-timers'
import withLifecycle from '@hocs/with-lifecycle'
import { translate, InjectedTranslateProps } from 'react-i18next'
import flow from 'lodash/fp/flow'
import { getDurationParts } from './App.logic'
import App, { Props as ViewProps, DurationParts } from './App.view'

// Main container composition
export default compose<ViewProps, Props>(
  translate(),
  // stops interval on unmount
  withSafeInterval,
  // adds state
  withState('durationParts', 'setDurationParts', ({ date, t }: Props & InjectedTranslateProps) =>
    getDurationParts(t)(date)
  ),
  // adds lifecycle hooks
  withLifecycle({
    onDidMount: ({ setSafeInterval, setDurationParts, date, t }: InnerProps) => {
      // Function to be executed on each cycle
      const cycleFn = () =>
        flow(
          getDurationParts(t),
          setDurationParts
        )(date)

      // Start countdown
      setSafeInterval(cycleFn, 1000)
    },
  })
)(App)

interface WithStateProps {
  setDurationParts: (nextValue: DurationParts) => void
}

interface Props {
  date: string
}

type InnerProps = Props & WithSafeIntevalProps & WithStateProps & InjectedTranslateProps
