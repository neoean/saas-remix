import { Link, NavLink } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import clsx from "clsx";


export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                ComicsAI
              </span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                clsx(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive
                    ? "border-b-2 border-primary-500 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )
              }
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/price"
              className={({ isActive }) =>
                clsx(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive
                    ? "border-b-2 border-primary-500 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )
              }
            >
              {t("nav.price")}
            </NavLink>
            <NavLink
              to="/try-free"
              className={({ isActive }) =>
                clsx(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive
                    ? "border-b-2 border-primary-500 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )
              }
            >
              {t("nav.tryFree")}
            </NavLink>
            <NavLink
              to="/cases"
              className={({ isActive }) =>
                clsx(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive
                    ? "border-b-2 border-primary-500 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )
              }
            >
              {t("nav.cases")}
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                clsx(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive
                    ? "border-b-2 border-primary-500 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )
              }
            >
              {t("nav.blog")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                clsx(
                  "inline-flex items-center px-1 pt-1 text-sm font-medium",
                  isActive
                    ? "border-b-2 border-primary-500 text-gray-900"
                    : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                )
              }
            >
              {t("nav.about")}
            </NavLink>
          </div>
          <div className="flex items-center">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
}
