import theme from '../../themes/default';

export default {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  annotation: {
    annotations: [
      {
        drawTime: 'beforeDatasetsDraw',
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: '7511.8506',
        borderColor: theme.colors.grey,
        borderWidth: 1,
        borderDash: [2, 6]
      }
    ]
  },
  animationEasing: 'linear',
  animationSteps: 60,
  responsive: true,
  maintainAspectRatio: false,
  events: [
    'mousemove',
    'mouseout',
    'click',
    'touchstart',
    'touchmove',
    'touchend'
  ],
  elements: {
    line: {
      tension: 0
    },
    point: {
      radius: 0
    }
  },
  legend: {
    display: false
  },
  tooltips: {
    display: false,
    mode: 'label',
    intersect: false,
    backgroundColor: 'transparent'
  },
  scaleShowValues: true,
  scales: {
    xAxes: [
      {
        display: false,
        ticks: {
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 12,
          fontStyle: 'normal',
          fontColor: theme.colors.grey,
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 3
        }
      }
    ],
    yAxes: [
      {
        position: 'left',
        display: true,
        ticks: {
          autoSkip: true,
          mirror: true,
          fontFamily: "'Roboto Mono', monospace",
          fontSize: 12,
          padding: -10,
          fontStyle: 'normal',
          fontColor: theme.colors.grey,
          maxTicksLimit: 5
        },
        gridLines: {
          drawTicks: false,
          zeroLineColor: theme.colors.greyDark,
          color: theme.colors.greyDark,
          drawBorder: false
        }
      }
    ]
  }
};
