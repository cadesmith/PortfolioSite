import Link from 'next/link';
import ArtTile from '../components/ArtTile';
import PageTitle from '../components/PageTitle';

export default function Art() {
    return (
      <main className='bg-white 2xl:pb-10'>
        
        <div className='flex justify-center'> 
          <PageTitle 
            title={'ART'}
          />
        </div>

        <div className='grid 2xl:flex w-full 2xl:space-x-8 2xl:px-16'>
          
          <ArtTile 
            category={'PHOTOGRAPHY'}
            link={'art/photography'}
            image={'/Art/Electrivity.jpg'}
          />


          <ArtTile 
            category={'GRAPHIC DESIGN'}
            link={'art/graphic-design'}
          />

        </div>
        
      </main>
    );
  }

  