/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/core';
import { ChttlEventChartPlugin } from '@chttl/plugin-chart-chttl-event';
import data from './data';

new ChttlEventChartPlugin().configure({ key: 'chttl-event' }).register();

export default {
  title: 'CHTTL Plugins|plugin-chart-chttl-event',
};

export const basic = () => (
  <SuperChart
    chartType="chttl-event"
    width={400}
    height={400}
    queriesData={[{ data }]}
    formData={{
      boldText: true,
      headerFontSize: 'x-large',
      subheaderFontSize: 'medium',
      headerText: '已處理問題單',
      subheaderText: '過去七天',
      threshold: '50',
      bigNumberSize: '70',

      metric: 'sum__SP_POP_TOTL',
    }}
  />
);
