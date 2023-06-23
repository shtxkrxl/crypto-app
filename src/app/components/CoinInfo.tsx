import Image from 'next/image';
import { Coin } from '../models/coin';
import { currencyFormatter } from '../utils/currencyFormatter';
import { HelpCircle } from 'lucide-react';
import { percentageFormatter } from '../utils/percentageFormatter';
import { percentageColor } from '../utils/percentageColor';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CoinInfo = ({ coin }: Props) => {
  return (
    <div className='flex flex-col gap-[5px]'>
      <div className='flex items-center gap-[7px]'>
        {coin.image.small && (
          <Image
            src={coin.image.small}
            alt='coin icon'
            width={30}
            height={30}
          />
        )}
        <p className='text-[24px] font-bold'>{coin.name}</p>
        <p className='mt-[5px] text-[20px] uppercase text-[#707070]'>
          {coin.symbol}
        </p>
        <p className='mt-[5px] rounded-[5px] bg-[#1E1E1E] px-[10px] py-[2px] text-[14px]'>{`Rank #${coin.market_cap_rank}`}</p>
      </div>

      <div className='flex items-end gap-[5px]'>
        <p className='text-[30px] font-bold'>
          {currencyFormatter(coin.market_data.current_price.usd)}
        </p>
        <p
          className={`${percentageColor(
            coin.market_data.price_change_percentage_24h
          )} mb-[3px] text-[19px]`}>
          {percentageFormatter(coin.market_data.price_change_percentage_24h)}
        </p>
      </div>

      <div className='flex w-full flex-wrap'>
        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:border-r-[1px] lg:pr-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>Market Cap</p>
            <Tippy
              interactive
              content={
                <div>
                  <p>Market Cap = Current Price x Circulating Supply</p>
                  <p className='mt-[10px]'>
                    Refers to the total market value of a cryptocurrency’s
                    circulating supply. It is similar to the stock market’s
                    measurement of multiplying price per share by shares readily
                    available in the market (not held & locked by insiders,
                    governments)
                  </p>
                </div>
              }>
              <button className='cursor-default'>
                <HelpCircle className='h-[20px] w-[20px] stroke-[#707070] stroke-[2px]' />
              </button>
            </Tippy>
          </div>
          <p>{currencyFormatter(coin.market_data.market_cap.usd)}</p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:pl-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>24 Hour Trading Vol</p>
            <Tippy
              interactive
              content='A measure of a cryptocurrency trading volume across all tracked platforms in the last 24 hours. This is tracked on a rolling 24-hour basis with no open/closing times.'>
              <button className='cursor-default'>
                <HelpCircle className='h-[20px] w-[20px] stroke-[#707070] stroke-[2px]' />
              </button>
            </Tippy>
          </div>
          <p>{currencyFormatter(coin.market_data.total_volume.usd)}</p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:border-r-[1px] lg:pr-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>
              Fully Diluted Valuation
            </p>
            <Tippy
              interactive
              content={
                <div>
                  <p>
                    FDV = Current Price x Max Supply (or total supply if max
                    supply is invalid)
                  </p>
                  <p className='mt-[10px]'>
                    The market capitalization (valuation) if the max supply of a
                    coin is in circulation. Note that it can take 3, 5, 10 or
                    more years before the FDV can be reached, depending on how
                    the emission schedule is designed.
                  </p>
                </div>
              }>
              <button className='cursor-default'>
                <HelpCircle className='h-[20px] w-[20px] stroke-[#707070] stroke-[2px]' />
              </button>
            </Tippy>
          </div>
          <p>
            {currencyFormatter(coin.market_data.fully_diluted_valuation.usd)}
          </p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:pl-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>Circulating Supply</p>
            <Tippy
              interactive
              content='The amount of coins that are circulating in the market and are tradeable by the public. It is comparable to looking at shares readily available in the market (not held & locked by insiders, governments).'>
              <button className='cursor-default'>
                <HelpCircle className='h-[20px] w-[20px] stroke-[#707070] stroke-[2px]' />
              </button>
            </Tippy>
          </div>
          <p>
            {new Intl.NumberFormat('en-US').format(
              coin.market_data.circulating_supply
            )}
          </p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:border-r-[1px] lg:pr-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>Total Supply</p>
            <Tippy
              interactive
              content={
                <div>
                  <p>Total Supply = Onchain supply - burned tokens</p>
                  <p className='mt-[10px]'>
                    The amount of coins that have already been created, minus
                    any coins that have been burned (removed from circulation).
                    It is comparable to outstanding shares in the stock market.
                  </p>
                </div>
              }>
              <button className='cursor-default'>
                <HelpCircle className='h-[20px] w-[20px] stroke-[#707070] stroke-[2px]' />
              </button>
            </Tippy>
          </div>
          <p>
            {new Intl.NumberFormat('en-US').format(
              coin.market_data.total_supply
            )}
          </p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:pl-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>Max Supply</p>
            <Tippy
              interactive
              content={
                <div>
                  <p>Max Supply = Theoretical maximum as coded</p>
                  <p className='mt-[10px]'>
                    The maximum number of coins coded to exist in the lifetime
                    of the cryptocurrency. It is comparable to the maximum
                    number of issuable shares in the stock market.
                  </p>
                </div>
              }>
              <button className='cursor-default'>
                <HelpCircle className='h-[20px] w-[20px] stroke-[#707070] stroke-[2px]' />
              </button>
            </Tippy>
          </div>
          <p>
            {coin.market_data.max_supply !== null
              ? new Intl.NumberFormat('en-US').format(
                  coin.market_data.max_supply
                )
              : '∞'}
          </p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:border-r-[1px] lg:pr-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>All-Time High</p>
          </div>
          <p>{currencyFormatter(coin.market_data.ath.usd)}</p>
        </div>

        <div className='flex w-full justify-between border-b-[1px] border-[#3F3F3F] py-[10px] lg:w-[50%] lg:pl-[20px]'>
          <div className='flex items-center gap-[5px]'>
            <p className='text-[16px] text-[#707070]'>All-Time Low</p>
          </div>
          <p>{currencyFormatter(coin.market_data.atl.usd)}</p>
        </div>
      </div>
    </div>
  );
};

interface Props {
  coin: Coin;
}

export default CoinInfo;
