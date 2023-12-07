import { techs } from '@/constants/techs'
import TechCard from './card/TechCard'


const Stack = () => {
  return (
    <div
      id="technologies"
      className="mt-20 md:mt-40 flex flex-col justify-center items-center md:mx-10"
    >
      <h2 className="text-2xl text-white text-center font-Montserrat font-semibold mb-10">
        Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-2 md:gap-4 w-[90%] md:w-[100%] ">
        {techs.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default Stack