import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "@/theme/theme";

import "./globals.css";

const montserrat = localFont({
  src: "../fonts/Montserrat-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "BagPack",
  description: "Time to pack your bags!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
