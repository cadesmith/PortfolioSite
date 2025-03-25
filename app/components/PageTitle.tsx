import { bebas } from "../fonts"

export default function PageTitle({title}: any) {
  return (
    <div className='w-fit bg-white pt-6 px-6 pb-3 mt-4 mb-10'>
        <div className={`${bebas.className} text-8xl block text-black`}>
            {title}
        </div>
    </div>
  )
}
