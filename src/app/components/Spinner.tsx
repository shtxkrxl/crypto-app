import { HalfCircleSpinner } from 'react-epic-spinners';

const Spinner = () => {
  return (
    <div className='flex h-[100px] w-full items-center justify-center'>
      <HalfCircleSpinner size={50} color={'white'} />
    </div>
  );
};

export default Spinner;
