## @superset-ui/plugin-chart-chttl-table

[![Version](https://img.shields.io/npm/v/@superset-ui/plugin-chart-chttl-table.svg?style=flat-square)](https://www.npmjs.com/package/@superset-ui/plugin-chart-chttl-table)

This plugin provides Chttl Table for Superset.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to
lookup this chart throughout the app.

```js
import ChttlTableChartPlugin from '@superset-ui/plugin-chart-chttl-table';

new ChttlTableChartPlugin().configure({ key: 'chttl-table' }).register();
```

Then use it via `SuperChart`. See
[storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-chttl-table)
for more details.

```js
<SuperChart
  chartType="chttl-table"
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
│   ├── ChttlTable.tsx
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
