import { CircleDollarSign } from 'lucide-react';
import Link from 'next/link';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='mx-auto flex max-w-[390px] flex-col px-[20px] pt-[10px] md:max-w-[760px] md:flex-row md:justify-between lg:max-w-[1100px]'>
      <Link
        href={'/'}
        className='flex w-fit items-center gap-[5px] text-[30px] font-bold transition-all hover:scale-[1.05] active:scale-[1.1]'>
        Crypto <CircleDollarSign className='h-[30px] w-[30px] stroke-[2px]' />
      </Link>

      <Search />
    </div>
  );
};

export default Navbar;
