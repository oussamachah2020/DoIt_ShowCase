import React, { useEffect } from "react";
import TopBar from "@/components/Navbar";
import AOS from "aos";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main>
      <TopBar />
      {children}
    </main>
  );
};

export default Layout;
