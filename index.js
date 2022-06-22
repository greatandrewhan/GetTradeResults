// Problem Trading sessions

const tradeList = [
  ["TAP", "DIA", "PCPC"], //--0 trading session
  ["RCG", "PCPC", "RVLV"], //--1 trading session
  ["TAP", "BCPC", "RVLV", "PCPC"], //--2 trading session
  ["TSLA", "TWTR", "APLE"], //--3 trading session
];

// #1 GetTradeResults

// Input: tradeList

/* 
  Output = const result = {
  TAP: [ 0, 2 ],
  TSLA: [ 3 ],
  TWTR: [ 3],
  APLE : [ 3 ],
  DIA: [ 0 ],
  PCPC: [ 0, 1, 2 ],
  RCG: [ 1 ],
  RVLV: [ 1, 2 ],
  BCPC: [ 2 ]
}
*/

// 1. tickers: an array of tickers
// 2. trades: an object of stock tickers from the previous solution (output from GetTradeResults)
/* 
Return the arrays of trades where a ticker in the tickers list appears. For example, given the result of trades(data) :
const result = {
  TAP: [ 0, 2 ],
  DIA: [ 0 ],
  PCPC: [ 0, 1, 2 ],
  RCG: [ 1 ],
  RVLV: [ 1, 2 ],
  BCPC: [ 2 ]
}
*/

function getTradeResults(tradeList) {
  const result = {};
  for (let i = 0; i < tradeList.length; i++) {
    for (let j = 0; j < tradeList[i].length; j++) {
      if (result[tradeList[i][j]]) {
        result[tradeList[i][j]].push(i);
      } else {
        result[tradeList[i][j]] = [i];
      }
    }
  }
  return result;
}

const result = getTradeResults(tradeList);
console.log(result);

// #2 Search Trades
// To complete the functionality to search for trades by tickers, write a function named searchTrades() that accepts:
/* 
and if const tickers = ["TAP", "BCPC"] then the result of searchTrades(tickers, result, data) would be:
[
  ["TAP", "DIA", "PCPC"],
  ["TAP", "BCPC", "RVLV", "PCPC"],
]
*/

function searchTrades(tickers, result, data) {
  const resultArray = [];
  for (let i = 0; i < tickers.length; i++) {
    if (result[tickers[i]]) {
      for (let j = 0; j < result[tickers[i]].length; j++) {
        resultArray.push(data[result[tickers[i]][j]]);
      }
    }
  }
  return resultArray;
}

const tickers = ["TAP", "BCPC"];
const tradeResults = getTradeResults(tradeList);
const searchResults = searchTrades(tickers, tradeResults, tradeList);
console.log(searchResults);
