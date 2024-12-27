import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  LiveReload,
} from "@remix-run/react";
import { useEffect } from "react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n";
import { languageMiddleware, getLocale } from "./middleware/language";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  // Check if we need to redirect to add language prefix
  const languageRedirect = await languageMiddleware({ request, params: {}, context: {} });
  if (languageRedirect) return languageRedirect;

  // Get the current locale from the URL
  const locale = getLocale(request);
  
  return { locale };
}

function App() {
  const { locale } = useLoaderData<typeof loader>();

  useEffect(() => {
    if (i18next.isInitialized) {
      i18next.changeLanguage(locale);
    } else {
      i18next.init().then(() => {
        i18next.changeLanguage(locale);
      });
    }
  }, [locale]);

  return (
    <I18nextProvider i18n={i18next}>
      <html lang={locale}>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
              <Outlet />
            </main>
            <Footer />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </I18nextProvider>
  );
}

export default App;
