import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className='relative mt-[10px]'>
      <input
        placeholder='Search'
        className='h-[40px] w-full rounded-[10px] pl-[30px] text-[16px] text-black outline-none placeholder:text-[#707070]'
      />

      <SearchIcon className='absolute left-[5px] top-[9px] h-[22px] w-[22px] stroke-[#707070] stroke-[1px]' />
    </div>
  );
};

export default Search;
