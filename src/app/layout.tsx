import "./globals.css";

export const metadata = {
  title: "Portfólio Denilson",
  description: "Projetos e trabalhos recentes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-black">{children}</body>
    </html>
  );
}
