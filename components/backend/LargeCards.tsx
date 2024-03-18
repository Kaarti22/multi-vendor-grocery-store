import React from 'react'
import LargeCard from './LargeCard'

const LargeCards = () => {

    const orderStats = [
        {
            period: "Today's Orders",
            sales: 110000,
            color: "bg-green-600",
        },
        {
            period: "Yesterday's Orders",
            sales: 130000,
            color: "bg-blue-600",
        },
        {
            period: "This Month",
            sales: 3000000,
            color: "bg-orange-600",
        },
        {
            period: "Last Month",
            sales: 2800000,
            color: "bg-green-600",
        },
        {
            period: "All-Time sales",
            sales: 5000000,
            color: "bg-purple-600",
        },
    ]

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8'>
        {
            orderStats.map((item, i) => {
                return (
                    <LargeCard key={i} data={item}/>
                )
            })
        }
    </div>
  )
}

export default LargeCards