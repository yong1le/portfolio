const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen justify-center bg-secondary p-20">
      {children}
    </div>
  );
};

export default Layout;
