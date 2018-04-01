import theme from '../../themes/default';

export default {
  layout: {
    padding: {
      left: 50,
      right: 0,
      top: 0,
      bottom: 0
    }
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
        ticks: {
          source: 'auto',
          autoSkip: true,
          autoSkipPadding: 10,
          fontFamily: theme.fonts.primary,
          fontSize: 12,
          padding: 10,
          fontColor: '#505050'
        },
        gridLines: {
          drawTicks: true,
          zeroLineColor: '#18191c',
          color: '#18191c',
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
          padding: 50,
          fontColor: '#505050',
          maxTicksLimit: 5
        },
        gridLines: {
          drawTicks: false,
          zeroLineColor: '#18191c',
          color: '#18191c',
          drawBorder: false
        }
      }
    ]
  }
};
