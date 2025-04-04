import Image from 'next/image'
import Portrait from './CadeSmith.jpg'
import { bebas } from '../fonts';

export default function About() {
    return (
      <main >
        <div className="grid bg-white justify-items-center xl:py-10 xl:flex xl:justify-center">
          <div className="w-full xl:w-1/3"> 
            <Image 
              src={Portrait}
              alt=''
              placeholder="blur"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="grid text-black my-10 w-4/5 xl:flex md:flex-col xl:w-1/3 xl:pl-10 xl:mt-auto xl:mb-28"> 
            <div className="">
              <h1 className={`${bebas.className} text-6xl`}>ABOUT ME</h1>
            </div>
            <div className='text-md'>
              <p>I'm a developer, photographer, and graphic artist based in the Bay Area. From 2020-2024 I attended Colgate University in Hamilton, NY
              where I studied computer science and art history. Now I build responsive, effective web applications. When I'm not coding 
              you can find me taking pictures, reading a good book, working on a graphic design project, or solving the New York Times crossword puzzle.
              </p>
            </div>
          </div> 
        </div>
      </main>
    );
  }
  