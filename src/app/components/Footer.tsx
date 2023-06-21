import { Github } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mx-auto mb-[20px] mt-[70px] flex max-w-[390px] flex-col items-center px-[20px] text-[19px] md:max-w-[760px] md:flex-row md:justify-between lg:max-w-[1100px]'>
      <div>© Alexandr Kalmaev</div>
      <Link
        href={'https://github.com/shtxkrxl/crypto-app'}
        target='_blank'
        className='flex cursor-pointer items-center'>
        <Github className='h-[25px] w-[25px] stroke-white' />
        GitHub
      </Link>
    </footer>
  );
};

export default Footer;
