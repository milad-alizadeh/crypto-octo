export default {
  layout: {
    padding: {
      left: 0,
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
    xAxes: {
      display: false
    },
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
