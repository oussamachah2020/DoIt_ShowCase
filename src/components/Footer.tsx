import Discord from "@/assets/dark_mode_icons/discord-dark.svg";
import Logo from "@/assets/logo.svg";
import { Button, Image } from "@nextui-org/react";

const Footer = () => {
  return (
    <div className="mt-20 md:mt-40 footer w-full h-full p-5">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-row justify-center items-center gap-2">
          <Image src={Logo} alt="logo" width={"100%"} />
          <h2 className="text-white text-3xl font-custom font-semibold">
            DO IT
          </h2>
        </div>
        <p className="text-white font-Montserrat md:w-[50%] text-lg font-semibold text-center">
          Join the discord server to stay in touch, i'll be happy to receiver
          your opinions, new features suggestions, improvement and bugs reports.
        </p>
        <Button
          variant="shadow"
          color="primary"
          className="flex flex-row justify-start items-center font-Montserrat font-semibold w-28"
          onClick={() => window.open("https://discord.gg/TyRk4RZ9")}
        >
          <Image src={Discord} width={"90%"} />
          DO IT
        </Button>
        <div className="w-full mt-1">
          <p className="text-white font-semibold text-center">
            &copy;2023 DoIt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
