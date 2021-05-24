/* eslint-disable no-magic-numbers, sort-keys */
import React from 'react';
import { SuperChart } from '@superset-ui/core';
import { ChttlEventChartPlugin } from '@superset-ui/plugin-chart-chttl-event';
import data from './data';

new ChttlEventChartPlugin().configure({ key: 'chttl-event' }).register();

export default {
  title: 'CHTTL Plugins|legacy-plugin-chart-cht-event',
};

export const basic = () => (
  <SuperChart
    chartType="chttl-event"
    width={400}
    height={400}
    queriesData={[{ data }]}
    formData={{
      maxBubbleSize: '25',
      showBubbles: true,
      headerText: '已處理問題單',
      subheaderText: '過去七天',
      headerFontSize: 'x-large',
      subheaderFontSize: 'small',

      metric: 'sum__SP_POP_TOTL',
    }}
  />
);
