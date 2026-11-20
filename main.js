import { createChart, CandlestickSeries } from 'lightweight-charts';

const container = document.getElementById('chart');

const chart = createChart(container, {
  width: container.clientWidth,
  height: container.clientHeight,
  layout: {
    background: { color: '#111' },
    textColor: '#ddd'
  },
  grid: {
    vertLines: { color: '#222' },
    horzLines: { color: '#222' }
  }
});

const series = chart.addSeries(CandlestickSeries);

series.setData([
  { time: '2026-01-01', open: 1.1000, high: 1.1050, low: 1.0980, close: 1.1030 },
  { time: '2026-01-02', open: 1.1030, high: 1.1080, low: 1.1010, close: 1.1020 },
  { time: '2026-01-03', open: 1.1020, high: 1.1040, low: 1.0970, close: 1.0990 },
  { time: '2026-01-04', open: 1.0990, high: 1.1060, low: 1.0985, close: 1.1055 },
  { time: '2026-01-05', open: 1.1055, high: 1.1100, low: 1.1040, close: 1.1085 }
]);

chart.timeScale().fitContent();

window.addEventListener('resize', () => {
  chart.applyOptions({ width: container.clientWidth, height: container.clientHeight });
});
