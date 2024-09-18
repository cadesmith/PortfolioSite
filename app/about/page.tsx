import Image from 'next/image'
import Portrait from './CadeSmith.jpg'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

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
          <div className="flex flex-col w-1/3 pl-10 mt-auto mb-28"> 
            <div className="">
              <h1 className={bebas.className}>Hi, I'm Cade.</h1>
            </div>
            <div className='text-xl'>
              <p>I'm a developer, photographer, and graphic artist based in the Bay Area. I attended Colgate University in Hamilton, NY
              where I studied computer science and art history. Now I build responsive, effective web applications. When I'm not coding, 
              you can find me hiking, mountain biking, or spending time with my three dogs.
              </p>
            </div>
          </div> 
        </div>
      </main>
    );
  }
  