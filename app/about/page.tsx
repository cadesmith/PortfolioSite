import Image from "next/image";
import Portrait from './CadeSmith.jpg'

export default function About() {
    return (
      <main>
        <div className="flex">
          <div className=""> 
            <Image 
              src={Portrait}
              alt='Cade Smith'
              placeholder="blur"
              height={800}
              className="rounded-lg"
            />
          </div>
          <div className="text-white"> 
            <p>This is my bio</p>
          </div> 
        </div>
      </main>
    );
  }
  