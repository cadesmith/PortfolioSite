import Image from 'next/image'
import Portrait from './CadeSmith.jpg'


export default function About() {
    return (
      <main>
        <div className="flex justify-center">
          <div className="flex w-1/3"> 
            <Image 
              src={Portrait}
              alt=''
              placeholder="blur"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="text-white"> 
            <p>This is my bio</p>
          </div> 
        </div>
      </main>
    );
  }
  