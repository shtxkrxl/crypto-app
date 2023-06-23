import { useEffect, useState } from 'react';
import { Coin } from '../models/coin';
import { currencyFormatter } from '../utils/currencyFormatter';

const CurrencyConverter = ({ coin }: Props) => {
  const [coinInput, setCoinInput] = useState('');
  const [usdInput, setUsdInput] = useState('');
  const [focus, setFocus] = useState('');

  const coinChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoinInput(event.target.value);
  };
  const usdChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsdInput(event.target.value);
  };

  useEffect(() => {
    if (focus === 'coin' && coinInput !== '') {
      const price = Number(coinInput) * coin.market_data.current_price.usd;
      setUsdInput(price.toString());
    } else if (focus === 'usd' && usdInput !== '') {
      const price = Number(usdInput) / coin.market_data.current_price.usd;
      setCoinInput(price.toString());
    } else {
      setUsdInput('');
      setCoinInput('');
    }
  }, [coinInput, usdInput, coin, focus]);

  return (
    <div className='flex h-fit w-full flex-col gap-[10px] rounded-[10px] border-[1px] border-[#707070] bg-[#1E1E1E] p-[15px] lg:w-[40%]'>
      <p className='text-[24px] font-bold'>{coin.name} Converter</p>

      <div className='flex w-full overflow-hidden rounded-[5px] bg-[#3F3F3F] text-[16px]'>
        <p className='w-[70px] cursor-default border-r-[2px] border-[#707070] py-[8px] text-center font-bold uppercase'>
          {coin.symbol}
        </p>
        <input
          className='w-full bg-transparent py-[8px] pl-[15px] outline-none'
          type='number'
          value={coinInput}
          onChange={coinChangeHandler}
          onFocus={() => setFocus('coin')}
          onBlur={() => setFocus('')}
        />
      </div>

      <div className='flex w-full overflow-hidden rounded-[5px] bg-[#3F3F3F] text-[16px]'>
        <p className='w-[70px] cursor-default border-r-[2px] border-[#707070] py-[8px] text-center font-bold'>
          USD
        </p>
        <input
          className='w-full bg-transparent py-[8px] pl-[15px] outline-none'
          type='number'
          value={usdInput}
          onChange={usdChangeHandler}
          onFocus={() => setFocus('usd')}
          onBlur={() => setFocus('')}
        />
      </div>

      <p className='text-[14px]'>
        1{' '}
        <span className='uppercase'>
          {coin.symbol} ={' '}
          {currencyFormatter(coin.market_data.current_price.usd)}
        </span>
      </p>
    </div>
  );
};

interface Props {
  coin: Coin;
}

export default CurrencyConverter;
