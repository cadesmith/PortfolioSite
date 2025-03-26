import Link from 'next/link';
import ArtTile from '../components/ArtTile';
import PageTitle from '../components/PageTitle';

export default function Art() {
    return (
      <main className='bg-white'>
        
        <div className='flex justify-center'> 
          <PageTitle 
            title={'ART'}
          />
        </div>

        <div className='grid space-y-10 pb-10 px-10 w-full 2xl:flex 2xl:space-y-0 2xl:space-x-8 2xl:px-16'>
          
          <ArtTile 
            category={'PHOTOGRAPHY'}
            link={'art/photography'}
            image={'/Art/Electricity.jpg'}
          />


          <ArtTile 
            category={'GRAPHIC DESIGN'}
            link={'art/graphic-design'}
            image={'/Art/sfFogPoster.jpg'}
          />

        </div>
        
      </main>
    );
  }

  