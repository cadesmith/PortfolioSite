import { bebas } from "../fonts"

export default function PageTitle({title}: any) {
  return (
    <div className='w-fit pt-6 px-6 mt-4 mb-6'>
        <div className={`${bebas.className} text-8xl block text-black`}>
            {title}
        </div>
    </div>
  )
}
