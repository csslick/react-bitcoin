import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  const [coins, setCoins] = useState([]);
  const [searchCoins, setSearchCoins] = useState([]);

  function searchCoin(val) {
    setSearchCoins(coins);
    val = val.toUpperCase();
    console.log(val)
    const res = coins.filter(coin => {
      return coin.name.includes(val);
    })
    console.log('res = ', res);
    setSearchCoins(res);
  }

  async function fetch_data() {
    const url = 'https://api.bithumb.com/public/ticker/ALL';

    try {
      const res = await fetch(url);
      const data = await res.json();
      const coin_data = [];

      for(let key in data.data) {
        coin_data.push({'name': key, ...data.data[key]});
      }
      setCoins(coin_data)
      setSearchCoins(coin_data);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetch_data();
  }, [])

  return (
    <main className="App">
      <Header searchCoin={searchCoin} />
      <Table coins={searchCoins} />
    </main>
  );
}

export default App;
