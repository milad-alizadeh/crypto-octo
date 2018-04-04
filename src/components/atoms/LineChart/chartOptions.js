import theme from '../../themes/default';

let gridColor = '#111';

export default {
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  animation: false,
  animationEasing: 'easeOutCubic',
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
        ticks: {
          source: 'auto',
          autoSkip: true,
          autoSkipPadding: 5,
          fontFamily: theme.fonts.primary,
          fontSize: 12,
          padding: 10,
          fontColor: '#505050'
        },
        gridLines: {
          drawTicks: true,
          zeroLineColor: gridColor,
          color: gridColor,
          drawBorder: false
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
          fontFamily: theme.fonts.primary,
          fontSize: 12,
          padding: 0,
          fontColor: '#505050',
          maxTicksLimit: 5
        },
        gridLines: {
          drawTicks: false,
          zeroLineColor: gridColor,
          color: gridColor,
          drawBorder: false
        }
      }
    ]
  }
};
