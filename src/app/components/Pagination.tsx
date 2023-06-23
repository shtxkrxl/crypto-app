const Pagination = ({ page, setPage }: Props) => {
  const clickHandler = () => {
    scrollTo({
      top: 0,
    });
  };

  return (
    <button
      onClick={clickHandler}
      className='flex items-center justify-center gap-[10px] text-[20px] leading-[25px] text-black'>
      {page > 2 && (
        <div
          className='flex min-w-[35px] cursor-pointer items-center justify-center rounded-[5px] bg-white px-[10px]'
          onClick={() => setPage(1)}>
          1
        </div>
      )}
      {page > 2 && (
        <div className='mt-[5px] cursor-default text-white'>...</div>
      )}

      <button
        disabled={page === 1}
        className={`${
          page === 1
            ? 'cursor-default bg-neutral-600'
            : 'cursor-pointer bg-white'
        } flex min-w-[35px] items-center justify-center rounded-[5px] px-[5px]`}
        onClick={() => setPage(page === 1 ? 1 : page === 50 ? 48 : page - 1)}>
        {page === 1 ? 1 : page === 50 ? 48 : page - 1}
      </button>

      <button
        disabled={page !== 1 && page !== 50 ? true : false}
        className={`${
          page !== 1 && page !== 50
            ? 'cursor-default bg-neutral-600'
            : 'cursor-pointer bg-white'
        } flex min-w-[35px] items-center justify-center rounded-[5px] px-[10px]`}
        onClick={() => setPage(page === 1 ? 2 : page === 50 ? 49 : page)}>
        {page === 1 ? 2 : page === 50 ? 49 : page}
      </button>

      <button
        disabled={page === 50}
        className={`${
          page === 50
            ? 'cursor-default bg-neutral-600'
            : 'cursor-pointer bg-white'
        } flex min-w-[35px] items-center justify-center rounded-[5px] px-[10px]`}
        onClick={() => setPage(page === 1 ? 3 : page === 50 ? 50 : page + 1)}>
        {page === 1 ? 3 : page === 50 ? 50 : page + 1}
      </button>

      {page < 49 && (
        <div className='mt-[5px] cursor-default text-white'>...</div>
      )}
      {page < 49 && (
        <button
          className='flex min-w-[35px] cursor-pointer items-center justify-center rounded-[5px] bg-white px-[10px]'
          onClick={() => {
            setPage(50);
          }}>
          50
        </button>
      )}
    </button>
  );
};

interface Props {
  page: number;
  setPage: any;
}

export default Pagination;
