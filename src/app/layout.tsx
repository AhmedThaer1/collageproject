import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import TopNav from "./_components/TopNav";
import { ThemeProvider } from "./_components/theme-provider";
import Footer from "./_components/Footer";
import { Toaster } from "~/components/ui/sonner";

export const metadata = {
  title: "Alkadhim Journal",
  description:
    "KJCS is a free journal published by Imam Al-Kadhim university College (IKU), Baghdad, Iraq. It is international open access for all researchers in the world to share and promote their ideas.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="light-mode dark:dark-mode min-h-screen transition-colors duration-300">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <div className="sticky top-0 w-full">
                <TopNav />
              </div>
              <main className="mt-16 flex-grow md:mt-[6.6rem]">
                {children}
                <div>
                  <Footer />
                </div>
              </main>
              <Toaster />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
