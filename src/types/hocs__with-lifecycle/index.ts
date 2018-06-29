declare module '@hocs/with-lifecycle' {
  import * as React from 'react'

  type HOC<Props> = (component: React.ComponentType<Props>) => React.ComponentType<Props>

  interface Options<Props> {
    readonly onDidMount?: (props: Props) => any
  }

  const withLifecycle: <Props = {}>(options: Options<Props>) => HOC<Props>
  export default withLifecycle
}
