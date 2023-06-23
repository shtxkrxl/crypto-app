'use client';

import ChartDetail from '@/app/components/ChartDetail';
import CoinInfo from '@/app/components/CoinInfo';
import CurrencyConverter from '@/app/components/CurrencyConverter';
import Error from '@/app/components/Error';
import Spinner from '@/app/components/Spinner';
import { Coin } from '@/app/models/coin';
import { fetcher } from '@/app/utils/fetcher';
import useSWRImmutable from 'swr/immutable';

const CoinPage = ({ params }: Props) => {
  const { data, error, isLoading } = useSWRImmutable<Coin>(
    `https://api.coingecko.com/api/v3/coins/${params.coinId}?tickers=false&developer_data=false`,
    fetcher
  );

  return (
    <div className='mx-auto mt-[20px] max-w-[390px] md:max-w-[760px] lg:max-w-[1100px]'>
      {isLoading && <Spinner />}

      {error && <Error />}

      {data && (
        <div className='mx-[20px] flex flex-col gap-[30px]'>
          <CoinInfo coin={data} />

          <ChartDetail coin={data} />

          <div className='w-full flex-row-reverse justify-between lg:flex'>
            <CurrencyConverter coin={data} />

            {data.description.en && (
              <div className='mt-[30px] flex w-full flex-col gap-[10px] lg:mt-0 lg:w-[50%]'>
                <p className='text-[24px] font-bold'>What is {data.name}?</p>
                <p className='text-[16px] text-[#CDCDCD]'>
                  {data.description.en.split(/<.*?>/gm).join('')}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface Props {
  params: {
    coinId: string;
  };
}

export default CoinPage;
