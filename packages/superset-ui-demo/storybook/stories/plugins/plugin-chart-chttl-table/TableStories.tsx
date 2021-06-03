import React from 'react';
// import memoizeOne from 'memoize-one';
// import { withKnobs } from '@storybook/addon-knobs';
import { SuperChart } from '@superset-ui/core';
//import TableChartPlugin, { TableChartProps } from '@superset-ui/plugin-chart-table/src';
import ChttlTableChartPlugin from '@chttl/plugin-chart-chttl-table';
// import TableChartPlugin from '@superset-ui/plugin-chart-table/src';

import { basicFormData, basicData } from './testData';
// import { withResizableChartDemo } from '../../../shared/components/ResizableChartDemo';

// export default {
//   title: 'Chart Plugins|plugin-chart-table',
//   decorators: [withKnobs, withResizableChartDemo],
// };

export default {
  title: 'CHTTL Plugins|plugin-chart-chttl-table',
  // decorators: [withKnobs, withResizableChartDemo],
};

new ChttlTableChartPlugin().configure({ key: 'table' }).register();

// function expandArray<T>(input: T[], targetSize: number) {
//   if (!input || input.length === 0) {
//     throw new Error('Cannot expand an empty array');
//   }
//   let arr = input;
//   while (arr.length < targetSize) {
//     arr = arr.concat(arr);
//   }
//   return arr.slice(0, targetSize);
// }

// memoize expanded array so to make sure we always return the same
// data when changing page sizes
// const expandRecords = memoizeOne(expandArray);
// const expandColumns = memoizeOne(expandArray);

/**
 * Load sample data for testing
 * @param props the original props passed to SuperChart
 * @param pageLength number of records perpage
 * @param rows the target number of records
 * @param cols the target number of columns
 */
// function loadData(
//   props: TableChartProps,
//   {
//     pageLength = 50,
//     rows = 1042,
//     cols = 8,
//     alignPn = false,
//     showCellBars = true,
//     includeSearch = true,
//   },
// ): TableChartProps {
//   if (!props.queriesData || !props.queriesData[0]) return props;
//   const records = props.queriesData?.[0].data || [];
//   const columns = props.queriesData?.[0].colnames || [];
//   return {
//     ...props,
//     queriesData: [
//       {
//         ...props.queriesData[0],
//         data: expandRecords(records, rows),
//         colnames: expandColumns(columns, cols),
//       },
//     ],
//     formData: {
//       ...props.formData,
//       align_pn: alignPn,
//       page_length: pageLength,
//       show_cell_bars: showCellBars,
//       include_search: includeSearch,
//     },
//     height: window.innerHeight - 130,
//   };
// }

export const basic = ({ width, height }) => (
  <SuperChart
    chartType="table"
    datasource={{
      columnFormats: {},
    }}
    width={width}
    height={height}
    queriesData={[basicData]}
    formData={basicFormData}
  />
);
basic.story = {
  parameters: {
    initialSize: {
      width: 680,
      height: 420,
    },
  },
};
