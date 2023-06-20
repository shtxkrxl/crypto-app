import { CircleDollarSign } from 'lucide-react';
import Link from 'next/link';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='mx-auto max-w-[390px] px-[20px] pt-[10px]'>
      <Link
        href={'/'}
        className='flex w-fit items-center gap-[5px] text-[36px] font-bold transition-all hover:scale-[1.05] active:scale-[1.1]'>
        Crypto{' '}
        <CircleDollarSign className='mt-[10px] h-[33px] w-[33px] stroke-[2px]' />
      </Link>

      <Search />
    </div>
  );
};

export default Navbar;
