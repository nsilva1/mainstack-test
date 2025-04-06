import { useState, useEffect } from 'react'
import { getTransactions } from '../api/transactions'
import { ITransaction } from '../interfaces/TransactionsInterface'
import { Loader } from './Loader'

const Transactions = () => {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

  return (
    <div className='px-20'>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='font-bold text-2xl leading-[38px] tracking-[-0.6px] text-black'>Transactions</h2>
                <p className='font-medium text-sm leading-[16px] tracking-tight text-gray-400'>Your transactions for the last 7 days</p>
            </div>
            <div className='flex gap-4 items-center'>
                <button className='bg-[#EFF1F6]'>Filter</button>
                <button>Export list</button>
            </div>
        </div>
    </div>
  )
}

export { Transactions }