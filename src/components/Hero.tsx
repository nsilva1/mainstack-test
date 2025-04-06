import { useState, useEffect } from 'react'
import { IWalletGraphData, IWalletInfo } from '../interfaces/WalletInterface'
import { getWalletInfo } from '../api/wallet'
import info from '../assets/images/info.svg'
import { WalletGraph } from './WalletGraph'
import { Loader } from './Loader'
import { formatNumber } from '../lib/helperFunctions'

const Hero = () => {
    const [walletInfo, setWalletInfo] = useState<IWalletInfo>({
        balance: 0,
        total_payout: 0,
        total_revenue: 0,
        pending_payout: 0,
        ledger_balance: 0
    })
    const [loading, setLoading] = useState(false)

    const [graphData] = useState<IWalletGraphData[]>([
        { date: 'Apr 1', amount: 750 },
        { date: 'Apr 7', amount: 1200 },
        { date: 'Apr 10', amount: 900 },
        { date: 'Apr 22', amount: 1300 },
        { date: 'Apr 30', amount: 750 },
    ])

    const fetchWalletInfo = async () => {
        setLoading(true)
        try {
            const response = await getWalletInfo()
            setWalletInfo(response)
        } catch (error) {
            console.error("Error fetching wallet info:", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchWalletInfo()
    }, [])

  return (
    <div className='pt-40 px-20'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <div className='col-span-2'>
                <div className='flex gap-16 items-center'>
                    <div>
                        <h4 className='font-medium text-sm leading-[16px] tracking-tight text-gray-400 align-middle'>Available Balance</h4>
                        <h2 className='align-middle text-black tracking-[-0.6px] leading-[38px] text-[28px] font-bold'>USD {formatNumber(walletInfo.balance)}</h2>
                    </div>
                    <div>
                        <button className='py-[14px] px-[28px] bg-[#131316] text-white rounded-full font-semibold text-base leading-[24px] tracking-[-0.4px] align-middle w-full lg:w-40'>
                            Withdraw
                        </button>
                    </div>
                </div>
                <WalletGraph graphData={graphData} />
            </div>
            <div className='col-span-1'>
                {
                    loading ? <Loader /> : (
                        <div className='flex flex-col gap-8'>
                    <div className='flex justify-between items-center'>
                        <div className='font-medium text-sm leading-[16px] tracking-tight text-gray-400 align-middle'>
                            Ledger Balance
                            <h2 className='align-middle text-black tracking-[-0.6px] leading-[38px] text-[28px] font-bold'>USD {formatNumber(walletInfo.ledger_balance)}</h2>
                        </div>
                        <img src={info} alt='Info' className='w-5 h-5' />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='font-medium text-sm leading-[16px] tracking-tight text-gray-400 align-middle'>
                            Total Payout
                            <h2 className='align-middle text-black tracking-[-0.6px] leading-[38px] text-[28px] font-bold'>USD {formatNumber(walletInfo.total_payout)}</h2>
                        </div>
                        <img src={info} alt='Info' className='w-5 h-5' />
                    </div>
                    
                    <div className='flex justify-between items-center'>
                        <div className='font-medium text-sm leading-[16px] tracking-tight text-gray-400 align-middle'>
                            Total Revenue
                            <h2 className='align-middle text-black tracking-[-0.6px] leading-[38px] text-[28px] font-bold'>USD {formatNumber(walletInfo.total_revenue)}</h2>
                        </div>
                        <img src={info} alt='Info' className='w-5 h-5' />
                    </div>
                    
                    <div className='flex justify-between items-center'>
                        <div className='font-medium text-sm leading-[16px] tracking-tight text-gray-400 align-middle'>
                            Pending Payout
                            <h2 className='align-middle text-black tracking-[-0.6px] leading-[38px] text-[28px] font-bold'>USD {formatNumber(walletInfo.pending_payout)}</h2>
                        </div>
                        <img src={info} alt='Info' className='w-5 h-5' />
                    </div>
                    
                </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export { Hero }