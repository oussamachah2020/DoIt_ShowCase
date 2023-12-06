import { techs } from '@/constants/techs'
import TechCard from './card/TechCard'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
        <h2 className='text-2xl text-white text-center font-Montserrat font-semibold mb-10'>Technologies</h2>
        <div className='grid grid-cols-2 gap-2 w-[90%]'>

        {techs.map((tech) => (
            <TechCard key={tech.id} label={tech.label} icon={tech.icon}/>
        ))}
        </div>
    </div>
  )
}

export default Stack