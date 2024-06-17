import { AppProps } from "next/app";
import { Sofia_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const sofia = Sofia_Sans({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sofia.className}>
      <Component {...pageProps} />
    </main>
  );
}
