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
  let result = [];
  for (let i = 0; i < tradeList.length; i++) {
    let trade = tradeList[i];
    for (let j = 0; j < trade.length; j++) {
      let ticker = trade[j];
      if (!result[ticker]) {
        result[ticker] = [];
      }
      result[ticker].push(i);
    }
  }
  return result;
}

const result = getTradeResult(tradeList);
console.log(result);

function searchTrades(tickers, result, data) {
  let resultArray = [];
  for (let i = 0; i < tickers.length; i++) {
    let ticker = tickers[i];
    if (result[ticker]) {
      for (let j = 0; j < result[ticker].length; j++) {
        let trade = data[result[ticker][j]];
        if (trade.length > 1) {
          let tradeArray = [];
          for (let k = 0; k < trade.length; k++) {
            tradeArray.push(trade[k]);
          }
          resultArray.push(tradeArray);
        }
      }
    }
  }
  return resultArray;
}

const tickers = ["TAP", "DBPC"];
const resultArray = searchTrades(tickers, result, tradeList);
console.log(resultArray);
