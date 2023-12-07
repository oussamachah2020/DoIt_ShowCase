import { Button, Card, CardFooter, Image } from '@nextui-org/react'

type Props = {
  tech: {
    label: string;
    icon: string | undefined;
    link: string;
  };
};

const TechCard = ({ tech }: Props) => {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="py-5 last:rounded-md bg-gradient-to-br border-2 from-[#000000cc] to-[#060D0D] w-[100%] h-[12em] justify-center flex flex-col items-center"
    >
      <Image
        alt="Woman listing to music"
        className="object-contain md:w-[8em] w-full h-full"
        src={tech.icon}
      />
      <CardFooter className="flex flex-row  items-center justify-between bg-black/10 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[99%] shadow-small ml-1 z-10">
        <p className=" text-white font-bold text-md">{tech.label}</p>
        <Button
          onClick={() => window.open(tech?.link)}
          className="text-tiny text-white"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TechCard