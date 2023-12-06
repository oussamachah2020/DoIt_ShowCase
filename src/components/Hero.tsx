import AppMockup from "@/assets/app.svg";
import { Button } from "@nextui-org/react";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="bg-gradient-to-br from-[#ffffff3b] to-20% to-[#060D0D] h-[50em]">
      <div className="pt-5 flex flex-col justify-center items-center mx-5">
        <img src={AppMockup} alt="app" className="w-full h-full" />
        <h2 className="text-white font-Montserrat font-semibold text-xl">
          Welcome to DO IT
        </h2>
        <p className="text-[#ffffffce] text-center text-md mt-5 w-18 font-Montserrat font-semibold leading-7">
          Powerful and User friendly task management, offering a seamless and
          intuitive mobile app experience. Seamlessly organize your life with
          streamlined task lists, smart reminders, and intuitive scheduling.
          From daily errands to ambitious projects, the ultimate task manager
          for a proactive and organized lifestyle.
        </p>
        <Button
          color="danger"
          className="mt-5 w-52 font-bold text-white hover:text-white"
          variant="shadow"
        >
          CHECK THE APP
        </Button>
      </div>
    </div>
  );
};

export default Hero;
