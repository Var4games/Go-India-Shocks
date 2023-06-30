import Image from 'next/image'
import Navbar from '@/components/navbar'
import Topbar from '@/components/topbar'
export default function Home() {
  return (
    <main >
      <div >
       <Navbar></Navbar>
       <Topbar></Topbar>
      </div>
    </main>
  )
}
