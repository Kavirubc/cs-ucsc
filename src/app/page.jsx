import HeroSec from './Components/Molecules/herosec';
import Navbar from './Components/Molecules/navbar';
import Bloglist from './Components/bloglist';
import Link from 'next/link';




export default function Main() {

  return (

    <>

      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeroSec />
        
        <div className='container mx-auto mt-8 px-10'>
          <Bloglist />
        </div>
      </div>
    </>
  );
}
