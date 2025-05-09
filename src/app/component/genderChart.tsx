'use client'

import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function GenderChart() {
  const [data, setData] = useState<{ Male: number, Female: number } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/statistik-gender`)
        const json = await res.json()
        setData(json.data)
      } catch (err) {
        console.error('Failed to fetch gender stats:', err)
      }
    }

    fetchData()
  }, [])

  if (!data) return <p className="text-gray-500 italic">Loading chart...</p>

  const chartData = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Statistik Gender',
        data: [data?.Male || 0, data?.Female || 0],
        backgroundColor: ['#3b82f6', '#ec4899'],
        borderWidth: 1,
      }
    ]
  }

  return <Pie data={chartData} />
}
