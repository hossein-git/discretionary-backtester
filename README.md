# Manuel Backtester

A discretionary bar-replay backtester for Forex and other symbols, running entirely in the browser. Load your own MT5 (or MT5-style) CSV data, step through it bar by bar, and place virtual market/limit/stop orders to practise manual trading strategies without risking real money.

## What it offers

- **Bar replay** — play, pause, step forward, and adjust replay speed on historical data.
- **Virtual orders** — market, limit, and stop orders filled against the replay's price action.
- **Custom symbol data** — drop in any CSV in MT5 export format (`Symbol,Date,Time,Open,High,Low,Close,Volume`); not limited to Forex.
- **Frontend-only** — no backend, no accounts, no data leaves your machine. Just `npm run dev` and go.
- **TradingView-style chart** — powered by [lightweight-charts](https://github.com/tradingview/lightweight-charts) (MIT).

## Stack

- [Vite](https://vitejs.dev/) — dev server & build
- Vanilla JavaScript — no framework, no TypeScript
- [lightweight-charts](https://www.npmjs.com/package/lightweight-charts) — charting

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Project layout

```
index.html          # chart container
main.js             # chart init
src/parser/         # MT5 CSV parser
src/engine/         # bar replay engine
src/orders/         # virtual order book
src/ui/             # controls (play/pause/speed/order buttons)
data/               # sample CSV + your own data
```

## Status

Early scaffold. The chart renders with hardcoded sample candles; parser, engine, orders, and UI are the next steps.

## License

[MIT](LICENSE)
