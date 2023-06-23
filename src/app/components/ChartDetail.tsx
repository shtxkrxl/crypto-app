'use client';

import useSWRImmutable from 'swr/immutable';
import { fetcher } from '../utils/fetcher';
import { useEffect, useState } from 'react';
import { ChartDetail } from '../models/chart';
import Spinner from './Spinner';
import Error from './Error';
import { Coin } from '../models/coin';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartDetail = ({ coin }: Props) => {
  const [now, setNow] = useState(Date.now() / 1000);
  const [period, setPeriod] = useState(365);
  const { data, error, isLoading } = useSWRImmutable<ChartDetail>(
    `https://api.coingecko.com/api/v3/coins/${
      coin.id
    }/market_chart/range?vs_currency=usd&from=${
      now - 31536000
    }&to=${now}&precision=6`,
    fetcher
  );

  const prices = data?.prices
    .slice(-period)
    .map(obj => [new Intl.DateTimeFormat().format(new Date(obj[0])), obj[1]]);

  const options: ChartOptions<'line'> = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      filler: {
        propagate: false,
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 5,
        backgroundColor: '#707070',
      },
      line: {
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        grid: {
          color: '#1E1E1E',
        },
      },
    },
    interaction: {
      mode: 'x',
      intersect: false,
    },
    animation: {
      duration: 0,
    },
  };

  return (
    <div>
      {isLoading && <Spinner />}

      {error && <Error />}

      {data && (
        <div className='flex max-h-[60%] flex-col gap-[10px] lg:max-h-[40%]'>
          <p className='text-[24px] font-bold'>
            {coin.name} Price Chart (
            {<span className='uppercase'>{coin.symbol}</span>})
          </p>

          <ul className='flex w-full justify-between overflow-hidden rounded-[5px] border-[2px] border-[#3F3F3F] bg-[#1E1E1E]'>
            <li
              onClick={() => setPeriod(7)}
              className={`${
                period === 7 && 'bg-[#3F3F3F]'
              } flex flex-1 cursor-pointer justify-center border-r-[1px] border-[#3F3F3F] px-[15px] py-[5px] hover:bg-[#3F3F3F]`}>
              7d
            </li>
            <li
              onClick={() => setPeriod(14)}
              className={`${
                period === 14 && 'bg-[#3F3F3F]'
              } flex flex-1 cursor-pointer justify-center border-r-[1px] border-[#3F3F3F] px-[15px] py-[5px] hover:bg-[#3F3F3F]`}>
              14d
            </li>
            <li
              onClick={() => setPeriod(30)}
              className={`${
                period === 30 && 'bg-[#3F3F3F]'
              } flex flex-1 cursor-pointer justify-center border-r-[1px] border-[#3F3F3F] px-[15px] py-[5px] hover:bg-[#3F3F3F]`}>
              30d
            </li>
            <li
              onClick={() => setPeriod(90)}
              className={`${
                period === 90 && 'bg-[#3F3F3F]'
              } flex flex-1 cursor-pointer justify-center border-r-[1px] border-[#3F3F3F] px-[15px] py-[5px] hover:bg-[#3F3F3F]`}>
              90d
            </li>
            <li
              onClick={() => setPeriod(180)}
              className={`${
                period === 180 && 'bg-[#3F3F3F]'
              } flex flex-1 cursor-pointer justify-center border-r-[1px] border-[#3F3F3F] px-[15px] py-[5px] hover:bg-[#3F3F3F]`}>
              180d
            </li>
            <li
              onClick={() => setPeriod(365)}
              className={`${
                period === 365 && 'bg-[#3F3F3F]'
              } flex flex-1 cursor-pointer justify-center border-r-[1px] border-[#3F3F3F] px-[15px] py-[5px] hover:bg-[#3F3F3F]`}>
              1y
            </li>
          </ul>

          <Line
            options={options}
            data={{
              labels: prices?.map(price => price[0]),
              datasets: [
                {
                  label: 'Price',
                  data: prices?.map(price => {
                    return { x: price[0], y: price[1] };
                  }),
                  borderColor:
                    prices![0][1] <= prices![prices!.length - 1][1]!
                      ? '#1DCF00'
                      : '#C50C0C',
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

interface Props {
  coin: Coin;
}

export default ChartDetail;
