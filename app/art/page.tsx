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

        <div className='grid space-y-10 pb-10 px-8 w-full lg:flex lg:space-y-0 lg:space-x-8 lg:px-10'>
          
          <ArtTile 
            category={'PHOTOGRAPHY'}
            link={'art/photography'}
            image={'/Art/Electricity.jpg'}
          />


          <ArtTile 
            category={'GRAPHIC DESIGN'}
            link={'art/graphic-design'}
            image={'/Art/fogPoster.jpg'}
          />

        </div>
        
      </main>
    );
  }

  