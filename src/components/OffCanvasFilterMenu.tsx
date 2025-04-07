import { useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import { TransactionStatus } from './TransactionStatus';
import { TransactionType } from './TransactionType';

const OffCanvasFilterMenu = ({ open, close }: { open: boolean; close: () => void }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
      close();
    }
  };

  const handleClear = () => {
    console.log('Clear Filters');
  };

  const handleApply = () => {
    console.log('Apply Filters');
    close();
  };

  return (
    <>
      <div
        onClick={handleOverlayClick}
        aria-hidden={!open}
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40
                    ${open ? 'opacity-40 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      <div
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        aria-labelledby='filter-panel-title'
        className={`fixed inset-y-0 right-0 flex max-w-full pl-10 transform transition-transform duration-300 ease-in-out z-50
                    ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='pointer-events-auto w-screen md:w-[500px]'>
          {' '}
          {/* Panel dimensions */}
          <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl rounded-2xl'>
            {' '}
            {/* Styling */}
            {/* Header */}
            <div className='flex items-center justify-between py-4 px-4 sm:px-6 flex-shrink-0'>
              <h2
                id='filter-panel-title'
                className='text-2xl font-bold leading-[120%] text-[#131316]'
              >
                Filter
              </h2>
              <button
                type='button'
                className='relative rounded-md p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                onClick={close}
              >
                <IoMdClose className='h-8 w-8' aria-hidden='true' />
              </button>
            </div>
            {/* Filter Content Area */}
            <div className='relative flex-1 py-6 px-4 sm:px-6 space-y-6'>
              {/* Date Range Buttons */}
              <div className='flex flex-wrap gap-2'>
                {['Today', 'Last 7 days', 'This month', 'Last 3 months'].map((preset) => (
                  <button
                    key={preset}
                    type='button'
                    className='font-semibold text-sm leading-4 tracking-[-0.4px] text-[#131316] py-3 px-4 border border-gray-200 rounded-full flex gap-2 cursor-pointer'
                  >
                    {preset}
                  </button>
                ))}
              </div>

              {/* Date Range */}
              <div>
                <label className='block font-semibold text-base leading-6 tracking-[-0.4px] text-[#131316] mb-1.5'>
                  Date Range
                </label>
                <div className='flex items-center gap-2'>
                  <input
                    type='date'
                    className='flex-1 bg-[#EFF1F6] py-3.5 px-4 rounded-2xl'
                    value='2023-07-23'
                  />
                  <input
                    type='date'
                    className='flex-1 bg-[#EFF1F6] py-3.5 px-4 rounded-2xl'
                    value='2023-08-17'
                  />
                </div>
              </div>

              {/* Transaction Type */}
              <div className='w-full'>
                <TransactionType
                  label='Transaction Type'
                  initialSelected={[
                    'Chargebacks',
                    'Cashbacks',
                    'Store Transactions',
                    'Withdrawals',
                  ]}
                />
              </div>

              {/* Transaction Status */}
              <div className='w-full'>
                <TransactionStatus
                  label='Transaction Status'
                  initialSelected={['Successful', 'Pending', 'Failed']}
                />
              </div>
            </div>
            {/* Action Buttons */}
            <div className='grid grid-cols-2 gap-4 px-4 sm:px-6 py-4'>
              <button
                type='button'
                onClick={handleClear}
                className='rounded-full bg-white px-6 py-3 text-sm font-semibold border border-[#EFF1F6] cursor-pointer'
              >
                Clear
              </button>
              <button
                type='button'
                onClick={handleApply}
                className='rounded-full bg-[#131316] px-6 py-3 text-sm font-semibold text-white cursor-pointer'
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OffCanvasFilterMenu };
