import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.scss';
import { Coin } from './Coin';

export const App = () => {
  const Api = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const [crypto, setCrypto] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(Api).then(res => {
      setCrypto(res.data)
    }).catch(err => {
      console.log(err);
    })
  }, [])

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }

  const filterCoins = crypto.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="coin_app container">
      <div className='coin_search '>
        <h3 className='text-center'>Search a currency</h3>
        <div className='search_input'>
          <input
            type='text'
            placeholder='Search...'
            className='form-control '
            value={search}
            onChange={(e) => changeHandler(e)}
          />
        </div>
      </div>
      {filterCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            marketcap={coin.market_cap}

          />
        )
      })}
    </div>
  )
}

