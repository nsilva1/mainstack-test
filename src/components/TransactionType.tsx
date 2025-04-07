import { useState, useEffect, useRef } from 'react';
import { HiChevronUpDown, HiCheck } from 'react-icons/hi2';

type StatusOption =
  | 'Store Transactions'
  | 'Get Tipped'
  | 'Withdrawals'
  | 'Chargebacks'
  | 'Cashbacks'
  | 'Refer & Earn';

const statusOptions: StatusOption[] = [
  'Store Transactions',
  'Get Tipped',
  'Withdrawals',
  'Chargebacks',
  'Cashbacks',
  'Refer & Earn',
];

const TransactionType = ({
  label,
  placeholder = 'Select status...',
  initialSelected = [],
  onChange,
}: {
  label?: string;
  placeholder?: string;
  initialSelected?: StatusOption[];
  onChange?: (selected: StatusOption[]) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<StatusOption[]>(initialSelected);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Outside Click Handling ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (status: StatusOption) => {
    let newSelection: StatusOption[];
    if (selectedStatuses.includes(status)) {
      newSelection = selectedStatuses.filter((s) => s !== status);
    } else {
      newSelection = [...selectedStatuses, status];
    }
    setSelectedStatuses(newSelection);
    if (onChange) {
      onChange(newSelection);
    }
    console.log('Selected:', newSelection);
  };

  const displayValue = () => {
    if (selectedStatuses.length === 0) {
      return <span className='text-gray-500'>{placeholder}</span>;
    }
    return [...selectedStatuses].sort().join(', ');
  };

  return (
    <div className='relative' ref={containerRef}>
      {label && (
        <label className='block text-sm font-medium leading-6 text-gray-900 mb-1'>{label}</label>
      )}

      <button
        type='button'
        onClick={toggleDropdown}
        className='relative w-full text-left bg-[#EFF1F6] py-3.5 px-4 rounded-2xl'
      >
        <span className='block truncate'>{displayValue()}</span>
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
          <HiChevronUpDown />
        </span>
      </button>

      {isOpen && (
        <ul
          role='listbox'
          aria-multiselectable='true'
          className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
        >
          {statusOptions.map((status) => {
            const isSelected = selectedStatuses.includes(status);
            return (
              <li
                key={status}
                onClick={() => handleOptionClick(status)}
                className='relative cursor-default select-none py-2 pl-10 pr-4 text-gray-900 hover:bg-gray-200'
              >
                {/* Checkbox */}
                <span
                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                    isSelected ? 'text-white' : 'text-gray-500'
                  }`}
                >
                  <div
                    className={`h-4 w-4 border rounded-sm flex items-center justify-center ${
                      isSelected ? 'bg-[#131316] border-[#131316]' : 'border-gray-400'
                    }`}
                  >
                    {isSelected && <HiCheck />}
                  </div>
                </span>
                {/* Label Text */}
                <span className={`block truncate ${isSelected ? 'font-semibold' : 'font-normal'}`}>
                  {status}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { TransactionType };
