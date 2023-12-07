import FeatureCard from "./card/FeatureCard";
import { features } from "@/constants/features";


const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col justify-center items-center gap-8 md:mx-10 md:mt-32"
      data-aos="fade-right"
    >
      <h2 className="text-white text-2xl text-center font-Montserrat font-semibold mb-10">
        What's in The App?
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            image={feature.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
