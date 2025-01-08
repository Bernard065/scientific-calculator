import NavBar from "@/components/navigation/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {" "}
      <NavBar />
      {children}
    </main>
  );
}
