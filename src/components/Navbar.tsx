import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Discord from "@/assets/dark_mode_icons/discord-dark.svg";
import Github from "@/assets/dark_mode_icons/github-dark.svg";

import Logo from "@/assets/logo.svg";
export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Features", "Technologies"];

  return (
    <Navbar
      className="bg-[#060d0d18] shadow-sm shadow-white text-white"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-3">
          <img src={Logo} width={38} height={38} alt="logo" />
          <p className="font-semibold text-xl font-custom">DO IT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#home" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#features" aria-current="page" className="text-white">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#technologies" className="text-white">
            Technologies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <button onClick={() => window.open("https://discord.gg/TyRk4RZ9")}>
          <img src={Discord} width={28} height={28} />
        </button>
        <button
          onClick={() => window.open("https://github.com/oussamachah2020/DoIt")}
        >
          <img src={Github} width={28} height={28} />
        </button>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={`#${item}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
