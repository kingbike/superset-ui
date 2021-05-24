## @superset-ui/plugin-chart-chttl-event

[![Version](https://img.shields.io/npm/v/@superset-ui/plugin-chart-chttl-event.svg?style=flat-square)](https://www.npmjs.com/package/@superset-ui/plugin-chart-chttl-event)

This plugin provides Chttl Event for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to
lookup this chart throughout the app.

```js
import ChttlEventChartPlugin from '@superset-ui/plugin-chart-chttl-event';

new ChttlEventChartPlugin().configure({ key: 'chttl-event' }).register();
```

Then use it via `SuperChart`. See
[storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-chttl-event)
for more details.

```js
<SuperChart
  chartType="chttl-event"
  width={600}
  height={600}
  formData={...}
  queriesData={[{
    data: {...},
  }]}
/>
```

### File structure generated

```
├── package.json
├── README.md
├── tsconfig.json
├── src
│   ├── ChttlEvent.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.ts
│   ├── plugin
│   │   ├── buildQuery.ts
│   │   ├── controlPanel.ts
│   │   ├── index.ts
│   │   └── transformProps.ts
│   └── types.ts
├── test
│   └── index.test.ts
└── types
    └── external.d.ts
```
