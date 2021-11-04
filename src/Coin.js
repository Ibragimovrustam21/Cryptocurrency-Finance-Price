import React from 'react';
import './coins.scss'

export const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className='coin_container '>
      <div className='coin_row w-75'>
        <div className='coin '>
          <img src={image} alt='coin' className='crypto_img' />
          <h5 className='crypto_name'>{name}</h5>
          <p className='crypto_symbol'>{symbol}</p>
        </div>
        <div className='coin_data '>
          <p className='crypto_price'>${price}</p>
          <p className='crypto_volume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ?
            (<p className='crypto_percent red'>{priceChange.toFixed(2)}%</p>)
            :
            (<p className='crypto_percent green'>{priceChange.toFixed(2)}%</p>)
          }
          <p className='crypto_market_cap'>Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
