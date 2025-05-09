'use client'

import { useEffect, useState } from 'react'

export default function CustomerTable() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/customer`)
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div className="overflow-x-auto p-4 ">
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">No</th>
            <th className="px-4 py-2 border">Nama</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Phone</th>
          </tr>
        </thead>
        <tbody>

          {customers.map((cust: any, i: number) => (
            console.log(customers),
            <tr key={cust._id}>
              <td className="px-4 py-2 border">{i + 1}</td>
              <td className="px-4 py-2 border">{cust.name}</td>
              <td className="px-4 py-2 border">{cust.email}</td>
              <td className="px-4 py-2 border">{cust.gender}</td>
              <td className="px-4 py-2 border">{cust.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}