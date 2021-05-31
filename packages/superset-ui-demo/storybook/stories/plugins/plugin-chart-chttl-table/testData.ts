/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { ChartDataResponseResult, GenericDataType } from '@superset-ui/core/src';
import { TableChartFormData, TableChartProps } from '@superset-ui/plugin-chart-table/src';
// @ts-ignore
// eslint-disable-next-line import/extensions
import birthNamesJson from './birthNames.json';

export const birthNames = (birthNamesJson as unknown) as TableChartProps;

export const basicFormData: TableChartFormData = {
  datasource: '1__table',
  viz_type: 'table',
  align_pn: false,
  color_pn: false,
  include_search: true,
  metrics: ['sum__num', 'MAX(ds)', 'cpuData'],
  order_desc: true,
  page_length: 0,
  percent_metrics: null,
  show_cell_bars: true,
  table_filter: false,
  table_timestamp_format: 'smart_date',
};

export const basicData: Partial<ChartDataResponseResult> = {
  colnames: ['name', 'sum__num', 'MAX(ds)', 'Abc.com', 'CPU配置率', '記憶體配置率'],
  coltypes: [
    GenericDataType.STRING,
    GenericDataType.NUMERIC,
    GenericDataType.TEMPORAL,
    GenericDataType.STRING,
    GenericDataType.NUMERIC,
    GenericDataType.NUMERIC,
  ],
  data: [
    {
      name: 'Michael',
      sum__num: 2467063,
      'MAX(ds)': '2008-01-01T00:00:00',
      'Abc.com': 110,
      CPU配置率: 57.5,
      記憶體配置率: 57.5,
      //cpuData:  "\"\[\{__timestamp: 1356998400000.0, sum__SP_POP_TOTL: 7151135481.0 \}, \{ __timestamp: 1325376000000.0, sum__SP_POP_TOTL: 7066007165.0 \}\]\""
    },
    {
      name: 'Christopher',
      sum__num: 1725265,
      'MAX(ds)': '2008-01-01T00:00:00',
      'Abc.com': 119,
      CPU配置率: 80.0,
      記憶體配置率: 57.5,
      //cpuData:  "\"\[\{__timestamp: 1356998400000.0, sum__SP_POP_TOTL: 7151135481.0 \}, \{ __timestamp: 1325376000000.0, sum__SP_POP_TOTL: 7066007165.0 \}\]\""
    },
    {
      name: 'david',
      sum__num: 1725265,
      'MAX(ds)': '2008-01-01T00:00:00',
      'Abc.com': 119,
      CPU配置率: 90.0,
      記憶體配置率: 57.5,
      //cpuData:  "\"\[\{__timestamp: 1356998400000.0, sum__SP_POP_TOTL: 7151135481.0 \}, \{ __timestamp: 1325376000000.0, sum__SP_POP_TOTL: 7066007165.0 \}\]\""
    },
  ],
};
