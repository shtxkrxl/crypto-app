'use client';

import useSWRImmutable from 'swr/immutable';
import { fetcher } from './utils/fetcher';
import { Coins } from './models/coins';
import { useState } from 'react';
import Pagination from './components/Pagination';
import CoinsTable from './components/CoinsTable';
import Spinner from './components/Spinner';
import Error from './components/Error';

export default function Home() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWRImmutable<Coins[]>(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`,
    fetcher
  );

  return (
    <div className='mx-auto mt-[20px] max-w-[390px] md:max-w-[760px] lg:max-w-[1100px]'>
      {isLoading && <Spinner />}

      {error && <Error />}

      {data && (
        <div className='mx-[20px] flex flex-col gap-[15px]'>
          <div className='text-[24px] font-bold'>
            Cryptocurrency Prices by Market Cap
          </div>
          <CoinsTable data={data} />

          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
}
