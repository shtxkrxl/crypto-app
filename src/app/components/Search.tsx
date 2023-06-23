'use client';

import { Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import useSWRImmutable from 'swr/immutable';
import { fetcher } from '../utils/fetcher';
import { SearchCoins } from '../models/searchCoins';
import Image from 'next/image';
import Link from 'next/link';

const Search = () => {
  const [input, setInput] = useState('');
  const debounced = useDebounce(input);

  const { data } = useSWRImmutable<SearchCoins>(
    debounced.length >= 3
      ? `https://api.coingecko.com/api/v3/search?query=${debounced}`
      : null,
    fetcher
  );
  const coins = data?.coins.slice(0, 10);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    setInput('');
  };

  return (
    <div className='relative mt-[10px]' onBlur={() => setInput('')}>
      <input
        placeholder='Search'
        className='h-[35px] w-full rounded-[10px] pl-[30px] text-[16px] text-black outline-none placeholder:text-[#707070] md:w-[300px]'
        type='text'
        value={input}
        onChange={changeHandler}
      />
      <SearchIcon className='absolute left-[5px] top-[6px] h-[22px] w-[22px] stroke-[#707070] stroke-[1px]' />

      {coins && (
        <div className='absolute left-0 top-[40px] z-[2] w-full overflow-hidden rounded-[10px] bg-white'>
          {coins.map(coin => (
            <Link
              key={coin.id}
              href={`/coin/${coin.id}`}
              onClick={clickHandler}
              className='flex w-full cursor-pointer items-center gap-[10px] px-[15px] py-[10px] transition-all hover:bg-[#E5E5E5]'>
              {coin.large && (
                <Image
                  src={coin.large}
                  alt='coin icon'
                  height={20}
                  width={20}
                />
              )}
              <p className='text-[16px] text-black'>{coin.name}</p>
              <p className='text-[14px] uppercase text-[#707070]'>
                {coin.symbol}
              </p>
              <p className='rounded-[5px] bg-[#686868] px-[5px] text-[14px]'>
                #{coin.market_cap_rank}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
