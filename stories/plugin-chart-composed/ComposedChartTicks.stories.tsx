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
import React from 'react';
import { ChartProps, styled, supersetTheme, ThemeProvider } from '@superset-ui/core';
import ComposedChart from '../../plugins/plugin-chart-composed/src/components/ComposedChart';
import {
  CHART_SUB_TYPES,
  CHART_TYPES,
  Layout,
  LegendPosition,
} from '../../plugins/plugin-chart-composed/src/components/types';
import transformProps from '../../plugins/plugin-chart-composed/src/plugin/transformProps';
import { barsHorizontalLegendTop } from '../../plugins/plugin-chart-composed/test/__mocks__/composedProps';
import { applyCommonLogic, commonConfig } from './utils';

const commonProps = {
  xAxisTickLabelAngle: '45',
  yAxisTickLabelAngle: '0',
  y2AxisTickLabelAngle: '0',
  useCategoryFormattingGroupBy0: true,
  XAxisLabel: 'X Axis Label',
  yAxisLabel: 'Y Axis Label',
  width: 350,
  height: 400,
};

export default {
  title: 'Plugins/Composed Chart/Combinations',
  ...commonConfig,
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  & > * {
    border: 1px black dashed;
  }
`;

const TicksTemplate = args => {
  if (args.chartSubType !== CHART_SUB_TYPES.DEFAULT && args.chartSubType !== CHART_SUB_TYPES.STACKED) {
    return (
      <>
        {`SubType "${args.chartSubType}" is not applied for Bars Chart, please change "chartSubType" property to:`}
        <li>{CHART_SUB_TYPES.DEFAULT}</li>
        <li>{CHART_SUB_TYPES.STACKED}</li>
      </>
    );
  }
  return (
    <ThemeProvider theme={supersetTheme}>
      <Container>
        <ComposedChart
          chartType={CHART_TYPES.BAR_CHART}
          data={
            transformProps(({
              ...barsHorizontalLegendTop,
              formData: {
                ...barsHorizontalLegendTop.formData,
                useCategoryFormattingGroupBy0: args.useCategoryFormattingGroupBy0,
              },
              queriesData: args.queriesData,
            } as unknown) as ChartProps).data
          }
          {...applyCommonLogic(args)}
          xAxis={{ ...args.xAxis, tickLabelAngle: 0, label: 'X Axis Label' }}
          yAxis={{
            ...args.yAxis,
            tickLabelAngle2: -45,
            labelAngle2: -270,
            labelAngle: -90,
            label: 'Y Axis Label',
            label2: 'Y2 Axis Label',
          }}
          hasY2Axis
        />
        <ComposedChart
          chartType={CHART_TYPES.BAR_CHART}
          data={
            transformProps(({
              ...barsHorizontalLegendTop,
              formData: {
                ...barsHorizontalLegendTop.formData,
                useCategoryFormattingGroupBy0: args.useCategoryFormattingGroupBy0,
              },
              queriesData: args.queriesData,
            } as unknown) as ChartProps).data
          }
          {...applyCommonLogic(args)}
          hasY2Axis
          xAxis={{ ...args.xAxis, tickLabelAngle: -45, label: 'X Axis Label' }}
          yAxis={{ ...args.yAxis, tickLabelAngle2: 0, labelAngle: 90, label: 'Y Axis Label', label2: 'Y2 Axis Label' }}
          legendPosition={LegendPosition.bottom}
        />
        <ComposedChart
          chartType={CHART_TYPES.BAR_CHART}
          data={
            transformProps(({
              ...barsHorizontalLegendTop,
              formData: {
                ...barsHorizontalLegendTop.formData,
                useCategoryFormattingGroupBy0: args.useCategoryFormattingGroupBy0,
              },
              queriesData: args.queriesData,
            } as unknown) as ChartProps).data
          }
          {...applyCommonLogic(args)}
          hasY2Axis
          xAxis={{ ...args.xAxis, tickLabelAngle: -90, label: 'X Axis Label' }}
          yAxis={{
            ...args.yAxis,
            tickLabelAngle: -90,
            tickLabelAngle2: -90,
            labelAngle2: -90,
            labelAngle: -90,
            label: 'Y Axis Label',
            label2: 'Y2 Axis Label',
          }}
        />
        <ComposedChart
          chartType={CHART_TYPES.BAR_CHART}
          data={
            transformProps(({
              ...barsHorizontalLegendTop,
              formData: {
                ...barsHorizontalLegendTop.formData,
                useCategoryFormattingGroupBy0: args.useCategoryFormattingGroupBy0,
              },
              queriesData: args.queriesData,
            } as unknown) as ChartProps).data
          }
          {...applyCommonLogic(args)}
          layout={Layout.vertical}
          xAxis={{ ...args.xAxis, label: 'X Axis Label' }}
          yAxis={{ ...args.yAxis, tickLabelAngle: 0, label: 'Y Axis Label' }}
        />
        <ComposedChart
          chartType={CHART_TYPES.BAR_CHART}
          data={
            transformProps(({
              ...barsHorizontalLegendTop,
              formData: {
                ...barsHorizontalLegendTop.formData,
                useCategoryFormattingGroupBy0: args.useCategoryFormattingGroupBy0,
              },
              queriesData: args.queriesData,
            } as unknown) as ChartProps).data
          }
          {...applyCommonLogic(args)}
          layout={Layout.vertical}
          xAxis={{ ...args.xAxis, label: 'X Axis Label', tickLabelAngle: -90 }}
          yAxis={{ ...args.yAxis, tickLabelAngle: -45, label: 'Y Axis Label', labelAngle: -270 }}
        />
        <ComposedChart
          chartType={CHART_TYPES.BAR_CHART}
          data={
            transformProps(({
              ...barsHorizontalLegendTop,
              formData: {
                ...barsHorizontalLegendTop.formData,
                useCategoryFormattingGroupBy0: args.useCategoryFormattingGroupBy0,
              },
              queriesData: args.queriesData,
            } as unknown) as ChartProps).data
          }
          {...applyCommonLogic(args)}
          layout={Layout.vertical}
          xAxis={{ ...args.xAxis, label: 'X Axis Label', tickLabelAngle: 0 }}
          yAxis={{ ...args.yAxis, tickLabelAngle: -90, label: 'Y Axis Label', labelAngle: -270 }}
          legendPosition={LegendPosition.bottom}
        />
      </Container>
    </ThemeProvider>
  );
};

export const Ticks = TicksTemplate.bind({});
Ticks.args = {
  ...transformProps(({ ...barsHorizontalLegendTop } as unknown) as ChartProps),
  ...commonProps,
  queriesData: barsHorizontalLegendTop.queriesData,
  chartSubType: CHART_SUB_TYPES.DEFAULT,
};
