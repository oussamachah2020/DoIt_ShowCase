import AndroidLogo from "@/assets/android-logo.svg";
import IosLogo from "@/assets/ios-logo.svg";

type Props = {
  setOs: (value: string) => void;
  open: () => void;
};

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const DeviceTypeDropDown = ({ setOs, open }: Props) => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="shadow"
          color="danger"
          className="mt-5 text-white w-52 font-semibold"
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="solid"
        aria-label="Dropdown menu with icons"
        onAction={(key) => {
          setOs(key.toString());
          open();
        }}
      >
        <DropdownItem
          key="ios"
          startContent={<img src={IosLogo} width={"24%"} />}
        >
          IOS
        </DropdownItem>
        <DropdownItem
          key="android"
          startContent={<img src={AndroidLogo} width={"24%"} />}
        >
          ANDROID
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DeviceTypeDropDown;
