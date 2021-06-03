/* eslint-disable no-magic-numbers */
import React from 'react';
import { SuperChart } from '@superset-ui/core';
import ChttlTimeTableChartPlugin from '@chttl/plugin-chart-chttl-time-table';
import data from './data';

new ChttlTimeTableChartPlugin().configure({ key: 'chttl-time-table' }).register();

export default {
  title: 'CHTTL Plugins|plugin-chart-chttl-time-table',
};

export const basic = () => (
  <SuperChart
    chartType="chttl-time-table"
    width={400}
    height={400}
    queriesData={[
      {
        data: {
          columns: [
            'East Asia & Pacific',
            'Latin America & Caribbean',
            'Middle East & North Africa',
            'Sub-Saharan Africa',
          ],
          records: data,
        },
      },
    ]}
    formData={{
      metrics: [
        {
          aggregate: 'AVG',
          column: {
            column_name: 'value',
            description: null,
            expression: null,
            filterable: true,
            groupby: true,
            id: 155,
            is_dttm: false,
            python_date_format: null,
            type: 'FLOAT8',
            type_generic: 0,
            verbose_name: null,
          },
          expressionType: 'SIMPLE',
          hasCustomLabel: false,
          isNew: false,
          label: 'AVG(value)',
          optionName: 'metric_i7t8d9acm9g_fa8mra4psr9',
          sqlExpression: null,
        },
      ],
      // metrics: [ 'AVG(value)' ],
      adhocFilters: [],
      groupby: ['region'],
      columnCollection: [
        {
          bounds: [null, null],
          colType: 'spark',
          comparisonType: '',
          d3format: '',
          dateFormat: '',
          height: '',
          key: '0vFMepUDf',
          label: 'Time Series Columns',
          showYAxis: true,
          timeLag: 0,
          timeRatio: '',
          tooltip: '',
          width: '',
          yAxisBounds: [null, null],
        },
      ],
      vizType: 'time-table',
    }}
  />
);

import data3 from './data3';
export const basic2 = () => (
  <SuperChart
    chartType="chttl-time-table"
    width={400}
    height={400}
    queriesData={[
      {
        data: {
          columns: ['CPU(%)', 'RAM(%)', '硬碟(GB)'],
          records: data3,
        },
      },
    ]}
    formData={{
      metrics: [
        {
          aggregate: 'AVG',
          column: {
            column_name: 'value',
            description: null,
            expression: null,
            filterable: true,
            groupby: true,
            id: 155,
            is_dttm: false,
            python_date_format: null,
            type: 'FLOAT8',
            type_generic: 0,
            verbose_name: null,
          },
          expressionType: 'SIMPLE',
          hasCustomLabel: false,
          isNew: false,
          label: 'AVG(value)',
          optionName: 'metric_i7t8d9acm9g_fa8mra4psr9',
          sqlExpression: null,
        },
      ],
      // metrics: [ 'AVG(value)' ],
      adhocFilters: [],
      groupby: ['region'],
      columnCollection: [
        {
          bounds: [null, null],
          colType: 'avg',
          comparisonType: '',
          d3format: '.3',
          dateFormat: '',
          height: '',
          key: '5P-0ELTD_',
          label: '\u5e73\u5747\u4f7f\u7528\u7387',
          popoverVisible: true,
          showYAxis: false,
          timeLag: 7,
          timeRatio: '',
          tooltip: '',
          width: '',
          yAxisBounds: [null, null],
        },
        {
          bounds: [null, null],
          colType: 'spark',
          comparisonType: '',
          d3format: '.3',
          dateFormat: '',
          height: '',
          key: 'f7mGXt48X',
          label: '\u8fd1\u516b\u5c0f\u6642\u4f7f\u7528\u7387',
          popoverVisible: true,
          showYAxis: true,
          timeLag: 0,
          timeRatio: '',
          tooltip: '',
          width: '',
          yAxisBounds: [null, null],
        },
      ],
      vizType: 'time-table',
    }}
  />
);
