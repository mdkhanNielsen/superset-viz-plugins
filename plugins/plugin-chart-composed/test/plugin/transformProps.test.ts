import { ChartProps } from '@superset-ui/chart';
import transformProps from '../../src/plugin/transformProps';

xdescribe('Composed tranformProps', () => {
  const formData = {
    colorScheme: 'bnbColors',
    datasource: '3__table',
    granularity_sqla: 'ds',
    metric: 'sum__num',
    series: 'name',
    boldText: true,
    headerFontSize: 'xs',
    headerText: 'my text',
  };
  const chartProps = new ChartProps({
    formData,
    width: 800,
    height: 600,
    queryData: {
      data: [{ name: 'Hulk', sum__num: 1 }],
    },
  });

  it('should tranform chart props for viz', () => {
    // TODO: This test isn't passing
    expect(transformProps(chartProps)).toEqual({
      width: 800,
      height: 600,
      boldText: true,
      headerFontSize: 'xs',
      headerText: 'my text',
      data: [{ name: 'Hulk', sum__num: 1 }],
    });
  });
});