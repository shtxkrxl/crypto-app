'use client';

import Image from 'next/image';
import { currencyFormatter } from '../utils/currencyFormatter';
import { percentageColor } from '../utils/percentageColor';
import { percentageFormatter } from '../utils/percentageFormatter';
import { Coins } from '../models/coins';
import Chart from './Chart';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const CoinsTable = ({ data }: Props) => {
  const [coins, setCoins] = useState(data);
  const [sort, setSort] = useState('#');

  useEffect(() => {
    setCoins(data);
  }, [data]);

  return (
    <div className='max-w-full overflow-x-auto'>
      <table className='w-full text-[16px]'>
        <thead className=''>
          <tr className='sticky top-0 border-b-[1px] border-t-[1px] border-[#3F3F3F] py-[10px] font-bold text-[#707070]'>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === '#' || sort === 'Mkt Cap') {
                    setSort('');
                    return coins.sort(
                      (a, b) => b.market_cap_rank - a.market_cap_rank
                    );
                  } else {
                    setSort('#');
                    return coins.sort(
                      (a, b) => a.market_cap_rank - b.market_cap_rank
                    );
                  }
                })
              }
              className='cursor-pointer bg-[#181818] py-[5px] pl-[10px] text-left transition-all hover:text-white'>
              #
            </th>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === 'Coins') {
                    setSort('');
                    return coins.sort((a, b) => (b.name > a.name ? 1 : -1));
                  } else {
                    setSort('Coins');
                    return coins.sort((a, b) => (a.name > b.name ? 1 : -1));
                  }
                })
              }
              className='sticky left-0 cursor-pointer bg-[#181818] pl-[10px] pr-[30px] text-left transition-all hover:text-white'>
              Coin
            </th>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === 'Price') {
                    setSort('');
                    return coins.sort(
                      (a, b) => a.current_price - b.current_price
                    );
                  } else {
                    setSort('Price');
                    return coins.sort(
                      (a, b) => b.current_price - a.current_price
                    );
                  }
                })
              }
              className='cursor-pointer bg-[#181818] px-[20px] text-right transition-all hover:text-white'>
              Price
            </th>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === '1h') {
                    setSort('');
                    return coins.sort(
                      (a, b) =>
                        a.price_change_percentage_1h_in_currency -
                        b.price_change_percentage_1h_in_currency
                    );
                  } else {
                    setSort('1h');
                    return coins.sort(
                      (a, b) =>
                        b.price_change_percentage_1h_in_currency -
                        a.price_change_percentage_1h_in_currency
                    );
                  }
                })
              }
              className='cursor-pointer bg-[#181818] px-[20px] text-right transition-all hover:text-white'>
              1h
            </th>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === '24h') {
                    setSort('');
                    return coins.sort(
                      (a, b) =>
                        a.price_change_percentage_24h_in_currency -
                        b.price_change_percentage_24h_in_currency
                    );
                  } else {
                    setSort('24h');
                    return coins.sort(
                      (a, b) =>
                        b.price_change_percentage_24h_in_currency -
                        a.price_change_percentage_24h_in_currency
                    );
                  }
                })
              }
              className='cursor-pointer bg-[#181818] px-[20px] text-right transition-all hover:text-white'>
              24h
            </th>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === '7d') {
                    setSort('');
                    return coins.sort(
                      (a, b) =>
                        a.price_change_percentage_7d_in_currency -
                        b.price_change_percentage_7d_in_currency
                    );
                  } else {
                    setSort('7d');
                    return coins.sort(
                      (a, b) =>
                        b.price_change_percentage_7d_in_currency -
                        a.price_change_percentage_7d_in_currency
                    );
                  }
                })
              }
              className='cursor-pointer bg-[#181818] px-[20px] text-right transition-all hover:text-white'>
              7d
            </th>
            <th
              onClick={() =>
                setCoins(coins => {
                  if (sort === 'Mkt Cap' || sort === '#') {
                    setSort('');
                    return coins.sort((a, b) => a.market_cap - b.market_cap);
                  } else {
                    setSort('Mkt Cap');
                    return coins.sort((a, b) => b.market_cap - a.market_cap);
                  }
                })
              }
              className='cursor-pointer bg-[#181818] px-[20px] text-right transition-all hover:text-white'>
              Mkt Cap
            </th>
            <th className='w-[150px] bg-[#181818] px-[20px]'>Last 7 Days</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(coin => (
            <tr
              key={coin.id}
              className='relative border-b-[1px] border-t-[1px] border-[#3F3F3F] py-[10px] text-white'>
              <td className='bg-[#010403] pl-[10px]'>{coin.market_cap_rank}</td>

              <td className='sticky left-0 bg-[#010403] pl-[10px] pr-[30px]'>
                <Link
                  href={`/coin/${coin.id}`}
                  className='flex cursor-pointer items-center gap-[10px]'>
                  {coin.image && coin.image !== 'missing_large.png' && (
                    <Image
                      src={coin.image}
                      alt='coin logo'
                      width={26}
                      height={26}
                      className='h-[26px] w-[26px]'
                    />
                  )}
                  <div className='flex flex-col'>
                    <span className='font-bold leading-[24px]'>
                      {coin.name}
                    </span>
                    <span className='text-[14px] uppercase  text-[#707070]'>
                      {coin.symbol}
                    </span>
                  </div>
                </Link>
              </td>

              <td className='bg-[#010403] px-[20px] text-right'>
                {currencyFormatter(coin.current_price)}
              </td>

              <td
                className={`${percentageColor(
                  coin.price_change_percentage_1h_in_currency
                )} bg-[#010403] px-[20px] text-right`}>
                {percentageFormatter(
                  coin.price_change_percentage_1h_in_currency
                )}
              </td>

              <td
                className={`${percentageColor(
                  coin.price_change_percentage_24h_in_currency
                )} bg-[#010403] px-[20px] text-right`}>
                {percentageFormatter(
                  coin.price_change_percentage_24h_in_currency
                )}
              </td>

              <td
                className={`${percentageColor(
                  coin.price_change_percentage_7d_in_currency
                )} bg-[#010403] px-[20px] text-right`}>
                {percentageFormatter(
                  coin.price_change_percentage_7d_in_currency
                )}
              </td>

              <td className='bg-[#010403] px-[20px] text-right'>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  maximumFractionDigits: 0,
                }).format(coin.market_cap)}
              </td>

              <td className='w-[150px] bg-[#010403] px-[20px]'>
                <Link href={`/coin/${coin.id}`} className='cursor-pointer'>
                  <Chart
                    data={{
                      labels: coin.sparkline_in_7d.price.map(
                        (price, index) => index
                      ),
                      datasets: [
                        {
                          data: coin.sparkline_in_7d.price.map(
                            (price, index) => {
                              return { x: index, y: price };
                            }
                          ),
                          label: 'Dataset 1',
                          borderColor: `${
                            coin.price_change_percentage_7d_in_currency >= 0
                              ? '#1DCF00'
                              : '#C50C0C'
                          }`,
                          borderWidth: 2,
                        },
                      ],
                    }}
                  />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface Props {
  data: Coins[];
}

export default CoinsTable;
