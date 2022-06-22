// Problem Trading sessions

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

// getTradeResults(tradeList) output:
/*
const tradeResult = {
  TAP: [ 0, 2 ],
  DIA: [ 0 ],
  PCPC: [ 0, 1, 2 ],
  RCG: [ 1 ],
  RVLV: [ 1, 2 ],
  BCPC: [ 2 ]
}
*/

// #2 Search Trades
// To complete the functionality to search for trades by tickers, write a function named searchTrades() that accepts:
/* 
  and if const tickers = ["TAP", "BCPC"] then the result of searchTrades(tickers, result, data) would be:
  [
    ["TAP", "DIA", "PCPC"],
    ["TAP", "BCPC", "RVLV", "PCPC"],
  ]
  */

/*
 searchTrades(tickers, result, data) output:
 no duplicate tickers in tickers
 [
    ["TAP", "DIA", "PCPC"],
    ["TAP", "BCPC", "RVLV", "PCPC"],
  ]
*/

const tradeList = [
  ["TAP", "DIA", "PCPC"], //--0 trading session
  ["RCG", "PCPC", "RVLV"], //--1 trading session
  ["TAP", "BCPC", "RVLV", "PCPC"], //--2 trading session
  ["TSLA", "TWTR", "APLE"], //--3 trading session
];

function getTradeResult(tradeList) {
  let tradeResult = [];
  for (let i = 0; i < tradeList.length; i++) {
    let trade = tradeList[i];
    for (let j = 0; j < trade.length; j++) {
      let ticker = trade[j];
      if (!tradeResult[ticker]) {
        tradeResult[ticker] = [];
      }
      tradeResult[ticker].push(i);
    }
  }
  return tradeResult;
}

const tradeResult = getTradeResult(tradeList);
console.log(tradeResult);

function getTradeResult2(tradeList) {
  let tradeResult = [];
  for (let i = 0; i < tradeList.length; i++) {
    if (tradeList[i].length > 1) {
      let trade = [];
      for (let j = 0; j < tradeList[i].length; j++) {
        trade.push(tradeList[i][j]);
      }
      tradeResult.push(trade);
    }
  }
  return tradeResult;
}

function searchTrades(tickers, result, data) {
  let resultArray = [];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (tickers.includes(result[i][j])) {
        resultArray.push(data[i]);
      }
    }
  }
  return resultArray;
}

const tickers = ["TAP", "DBPC"];
const tradeResults = getTradeResult2(tradeList);
const searchResults = searchTrades(tickers, tradeResults, tradeList);
console.log(searchResults);
