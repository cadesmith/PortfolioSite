import Image from 'next/image'
import Portrait from './CadeSmith.jpg'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function About() {
    return (
      <main>
        <div className="grid justify-items-center xl:flex xl:justify-center">
          <div className="xl:w-1/3"> 
            <Image 
              src={Portrait}
              alt=''
              placeholder="blur"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="grid mt-10 xl:flex md:flex-col xl:w-1/3 pl-10 xl:mt-auto mb-28"> 
            <div className="">
              <h1 className={bebas.className}>ABOUT ME.</h1>
            </div>
            <div className='text-xl'>
              <p>I'm a developer, photographer, and graphic artist based in the Bay Area. From 2020-2024 I attended Colgate University in Hamilton, NY
              where I studied computer science and art history. Now I build responsive, effective web applications. When I'm not coding, 
              you can find me hiking, mountain biking, or spending time with my three dogs.
              </p>
            </div>
          </div> 
        </div>
      </main>
    );
  }
  