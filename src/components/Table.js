import React from "react";

export default function Table({coins}) {
  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th>원화</th>
          <th>가격</th>
          <th>전일대비</th>
          <th>거래금액</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin) => {
          return (
            <tr key={coin.name}>
              <th>{coin.name}</th>
              <td>{Number(coin.closing_price).toLocaleString()} KRW</td>
              <td>{coin.fluctate_rate_24H}%</td>
              <td>
                {parseInt(
                  Number(coin.acc_trade_value_24H)
                *0.000001).toLocaleString()}백만
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
