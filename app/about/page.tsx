import Image from 'next/image'
import Portrait from './CadeSmith.jpg'
import { Bebas_Neue } from 'next/font/google'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function About() {
    return (
      <main>
        <div className="flex justify-center p-14">
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
            <div className="text-">
              <h1 className={bebas.className}>Hi, I'm Cade.</h1>
            </div>
            <div>
              <p>I'm a developer, photographer, and graphic artist based in San Francisco, California. Growing up near Silicon Valley, 
                it was impossible to feel the effects of xyz. For college, I chose to move across the country and attend Colgate University
                in the small upstate town of Hamilton, New York where I studied computer science and art history.
              </p>
            </div>
          </div> 
        </div>
      </main>
    );
  }
  