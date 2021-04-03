import React from 'react'

export default function Header({searchCoin}) {
  return (
    <header style={{
      display: "flex",
      width: '80%',
      margin: '0 auto',
      alignItems: 'center',
      marginBottom: '20px',
    }}>
      <h1 style={{marginRight: "auto"}}>거래 현황</h1>
      <div className="search">
        <label htmlFor="search" className="mr-2">검색</label>
        <input 
          onChange={(e)=> {
            searchCoin(e.target.value);
          }}
          type="search" 
          id="search" 
          className="mb-3" 
          placeholder="코인명 검색" 
          style={{
            border: 'none',
            backgroundColor: '#ececec',
            padding: '5px 10px',
          }}
        />
      </div>
    </header>
  )
}
