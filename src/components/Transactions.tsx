import { useState, useEffect } from 'react';
import { getTransactions } from '../api/transactions';
import { ITransaction } from '../interfaces/TransactionsInterface';
import { Loader } from './Loader';
import arrowDown from '../assets/images/arrow_down.svg';
import download from '../assets/images/download.svg';
import { formatNumber } from '../lib/helperFunctions';
import credit from '../assets/images/credit.svg';
import debit from '../assets/images/debit.svg';
import { formatDate } from '../lib/helperFunctions';
import { OffCanvasFilterMenu } from './OffCanvasFilterMenu';

const Transactions = () => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const close = () => setOpen(false)

    const fetchTransactions = async () => {
        setLoading(true)
        try {
            const response = await getTransactions()
            setTransactions(response)
        } catch (error) {
            console.error("Error fetching transactions:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    let filterMenu = (
        <OffCanvasFilterMenu open={open} close={close} />
    );

  return (
    <div className='px-28'>
        {filterMenu}
        <div className='flex justify-between items-center flex-wrap'>
            <div>
                <h2 className='font-bold text-2xl leading-[32px] tracking-[-0.6px] text-black align-middle'>{transactions.length} Transactions</h2>
                <p className='font-medium text-sm leading-[16px] tracking-[-0.2px] text-[#56616B] align-middle'>Your transactions for the last 7 days</p>
            </div>
            <div className='flex gap-4 items-center'>
                <button onClick={() => setOpen(true)} className='bg-[#EFF1F6] py-3 px-6 rounded-full flex gap-2 cursor-pointer'>
                    <p className='font-semibold text-base leading-6 tracking-[-0.4px] align-middle'>Filter</p>
                    <img src={arrowDown} alt='Expand' className='text-[#131316] text-2xl' />
                </button>
                <button className='bg-[#EFF1F6] py-3 px-6 rounded-full flex gap-2'>
                    <p className='font-semibold text-base leading-6 tracking-[-0.4px] align-middle'>Export list</p>
                    <img src={download} alt='Download' className='text-[#131316] text-2xl' />
                </button>
            </div>
        </div>
        <hr className='my-8 text-[#EFF1F6]' />
        {
            loading ? <Loader /> : (
                <div className='flex flex-col gap-6'>
            {
                transactions.map((transaction, index) => (
                    <div className='flex justify-between items-center' key={index}>
                        <div className='flex gap-2 items-center'>
                            <div>
                                <img src={transaction.type === 'deposit' ? credit : debit} alt={transaction.type} className='w-12 h-12' />
                            </div>
                            <div>
                                <p className={`font-medium text-base leading-[24px] tracking-[-0.2px] align-middle text-[#131316]`}>{transaction.metadata?.product_name ?? 'Cash Withdrawal'}</p>
                                <p className={`font-medium text-sm leading-[16px] tracking-[-0.2px] align-middle text-[#56616B] ${transaction.metadata ? '' : transaction.status === 'successful' ? 'text-green-500' : transaction.status === 'pending' ? 'text-amber-500': 'text-red-500'}`}>{transaction.metadata?.name ?? transaction.status}</p>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold text-base leading-[150%] tracking-[-0.4px] align-middle text-[#131316]'>USD {formatNumber(transaction.amount)}</p>
                            <p className='font-medium text-sm leading-[16px] tracking[-0.2px] align-middle text-[#56616B]'>{formatDate(transaction.date)}</p>
                        </div>
                    </div>
                ))
            }
        </div>
            )
        }
    </div>
  )
}

export { Transactions }