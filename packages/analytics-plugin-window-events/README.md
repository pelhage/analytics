# Analytics Window Events Plugin

> Fire events on window enter and window leave events

## Usage

```bash
npm install analytics analytics-plugin-window-events
```

```js
import Analytics from 'analytics'
import windowEventsPlugin from 'analytics-plugin-window-events'

const analytics = Analytics({
  app: 'my-app',
  plugins: [
    windowEventsPlugin(),
  ]
})

analytics.on('windowLeft', () => {
  // do stuff when visitor leaves window
})
```
