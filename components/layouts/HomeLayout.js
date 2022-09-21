export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#E0E9F4]">
      <main className="flex items-center justify-center px-5 py-20">
        {children}
      </main>
    </div>
  );
}
