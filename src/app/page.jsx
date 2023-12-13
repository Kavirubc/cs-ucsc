import HeroSec from './Components/Molecules/herosec';
import Bloglist from './Components/bloglist';




export default function Main() {
  return (
    <>

      <div style={{ minHeight: 'calc(100vh - 100px)' }}>
        <HeroSec />
        <div className='container mx-auto border px-10'>
          This is where the blogs go
          <Bloglist />
        </div>
      </div>


    </>
  );
}
