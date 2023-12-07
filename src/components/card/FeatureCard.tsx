import { Card, CardHeader, Image } from "@nextui-org/react";

type Props = {
  title: string;
  image: string | undefined;
  description: string;
};

const FeatureCard = ({ title, image, description }: Props) => {
  return (
    <Card className="animated-border bg-gradient-to-br border-2 from-[#000000cc] to-[#060D0D] col-span-12 sm:col-span-4 w-[90%] md:w-[40%] h-[100%] group">
      <CardHeader className="absolute z-10 top-0 flex-col !items-start">
        <p className="text-md text-white/80 uppercase font-bold">{title}</p>
        <h4 className="text-white font-medium text-large">{description}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 mt-16 w-full h-full object-cover"
        src={image}
      />
    </Card>
  );
};

export default FeatureCard;
