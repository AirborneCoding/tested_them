
// styles
import "@/styles/globals.css";
import "@/styles/font.css";

// local direction
import useTextDirection from "./useTextDirection";
import { metadataAr, metadataEn, metadataEs, metadataFr } from "./metadata";

// provider

// components
import NavBar from "@/components/layouts/navbar/Navbar";
import MainFooter from "@/components/layouts/global/MainFooter";
import FooterBar from "@/components/layouts/footerbar/FooterBar";
import Providers from "../providers";

// META DATA
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {

  if (locale === 'en') {
    return metadataEn
  } else if (locale === 'ar') {
    return metadataAr
  }
  else if (locale === 'fr') {
    return metadataFr
  }
  else if (locale === 'es') {
    return metadataEs
  }
  else {
    return metadataAr
  }
}


interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

const themes = {
  winter: 'garden',
  dracula: 'black',
};
const getThemeFromLocalStorage = () => {
  if (typeof localStorage !== 'undefined') {
    const theme = localStorage.getItem('theme') || themes.winter;
    document.documentElement.setAttribute('data-theme', theme);
    return theme;
  } else {
    return themes.winter;
  }
};


export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {

  const direction = useTextDirection(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning={true}
      dir={direction}
      data-theme={getThemeFromLocalStorage()}
    >
      <body
        className=""
        suppressHydrationWarning={true} >
        <Providers>
          <main className="!py-36">
            {children}
          </main>
          <>
            <NavBar />
            <MainFooter />
            <FooterBar />
          </>
        </Providers>
      </body>
    </html >
  );
}