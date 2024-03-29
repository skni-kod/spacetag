import { Titillium_Web } from "next/font/google";
import Head from "next/head";

const titilliumWeb = Titillium_Web({
  display: "fallback",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Fonts = () => (
  <Head>
    <style
      dangerouslySetInnerHTML={{
        __html: `:root { --font-titillium-web: ${titilliumWeb.style.fontFamily} }`,
      }}
      id="next-font"
    />
  </Head>
);
