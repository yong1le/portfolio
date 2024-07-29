const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-screen justify-center bg-secondary px-10 py-20 lg:px-48">
      {children}
    </div>
  );
};

export default Layout;
