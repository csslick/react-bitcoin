import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Table from './components/Table';

function App() {
  async function fetch_data() {
    const url = 'https://api.bithumb.com/public/ticker/ALL';
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      const coin_data = [];
      for(let key in data.data) {
        coin_data.push({'name': key, ...data.data[key]});
      }
      console.log(coin_data)
    }catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetch_data();
  }, [])

  return (
    <main className="App">
      <Header />
      {/* <Table /> */}
    </main>
  );
}

export default App;
