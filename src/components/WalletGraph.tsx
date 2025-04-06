import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { IWalletGraphData } from '../interfaces/WalletInterface'

const WalletGraph = ({graphData}: { graphData: IWalletGraphData[] }) => {

    const formatXAxisLabel = (label: string) => {
        if(label === 'Apr 1' || label === 'Apr 30'){
            return `${label}, 2022`
        }
        return '';
    }

  return (
    <div className='w-full h-[300px]'>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" tickLine={false} tickFormatter={formatXAxisLabel} axisLine={{ stroke: '#DBDEE5' }} ticks={['Apr 1', 'Apr 30']} tick={{ fontSize: 12, fill: '#6B7281' }} height={40} />
                <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                <Line type="monotone" dataKey="amount" stroke="#FF5403" strokeWidth={1} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export { WalletGraph }