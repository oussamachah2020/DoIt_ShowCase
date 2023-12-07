import React from "react";
import TopBar from "@/components/Navbar";

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

