import type { Metadata } from "next";

const Layout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <h1 className="text-3xl">nav bar</h1>
      {children}
    </div>
  );
}

export default Layout;
