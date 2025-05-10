import CustomerTable from './customer/page/page'
import GenderChart from './component/genderChart'
import "./globals.css"

export default function Home() {
  return (
    <>
      <div className="bg-gray-200 p-4" >

        <main className="p-8 space-y-8">
          <h1 className="text-2xl font-bold">Dashboard Customer</h1>

          <section >
            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">Data Customer</h2>
              <CustomerTable />
            </div>
          </section>

          <section>
            <div>
              <h2 className="text-xl font-semibold mb-2">Distribusi Gender</h2>
              <div className="min-w-xs bg-blue-200 ">
                <GenderChart />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
