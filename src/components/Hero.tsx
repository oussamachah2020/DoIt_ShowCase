import AppMockup from "@/assets/app.svg";
import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import DeviceTypeDropDown from "./DeviceTypeDropDown";

import IosDevice from "@/assets/ios.svg";
import AndroidDevice from "@/assets/android.svg";

const Hero = () => {
  const [os, setOs] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div
      id="home"
      className="bg-gradient-to-br from-[#ffffff3b] to-20% to-[#060D0D] h-[50em] md:h-full"
    >
      <div className="pt-5 flex flex-col md:flex-row md:justify-between justify-center items-center mx-5">
        <img src={AppMockup} alt="app" className="w-full h-full md:w-[50%]" />
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
          <h2 className="text-white font-Montserrat font-semibold text-xl md:text-2xl">
            Welcome to DO IT
          </h2>
          <p className="text-[#ffffffce] text-center md:text-left text-md md:text-lg mt-5 w-18 md:w-[80%] font-Montserrat font-semibold leading-7 md:leading-8">
            Powerful and User friendly task management, offering a seamless and
            intuitive mobile app experience. Seamlessly organize your life with
            streamlined task lists, smart reminders, and intuitive scheduling.
            From daily errands to ambitious projects, the ultimate task manager
            for a proactive and organized lifestyle.
          </p>
          <DeviceTypeDropDown setOs={setOs} open={onOpen} />
        </div>
      </div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent className="flex justify-center items-center">
          <ModalBody className="bg-transparent">
            {os == "ios" ? (
              <Image src={IosDevice} width={"100%"} />
            ) : (
              <Image src={AndroidDevice} width={"100%"} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Hero;
