import { Link, useParams } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const params = useParams();
  const lang = params.lang || 'en';

  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link to={`/${lang}/privacy`} className="text-gray-500 hover:text-gray-600">
            {t('footer.privacy')}
          </Link>
          <Link to={`/${lang}/terms`} className="text-gray-500 hover:text-gray-600">
            {t('footer.terms')}
          </Link>
          <a href="https://twitter.com/comicsai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
            Twitter
          </a>
          <a href="https://discord.gg/comicsai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
            Discord
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} ComicsAI. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
} 