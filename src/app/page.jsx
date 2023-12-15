import HeroSec from './Components/Molecules/herosec';
import Navbar from './Components/Molecules/navbar';
import Bloglist from './Components/bloglist';





export default function Main() {

  return (

    <>

      <div className='fixed top-0 w-full z-10'>
        <Navbar />
      </div>
      <div className='mt-[70px]' style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeroSec />
        
        <div className='container mx-auto mt-8 px-10'>
          <Bloglist />
        </div>
      </div>
    </>
  );
}
