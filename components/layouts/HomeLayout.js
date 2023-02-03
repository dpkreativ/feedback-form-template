export default function HomeLayout({ children }) {
  return (
    <main className="md:px-10 md:py-5 lg:px-16 grid place-items-center min-h-screen">
      {children}
    </main>
  );
}
