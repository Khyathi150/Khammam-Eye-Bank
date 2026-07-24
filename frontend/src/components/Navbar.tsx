import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { primaryNav, siteConfig } from '@/config/site';
import { LinkButton } from './Button';
import logo from '@/assets/icons/eye_logo.png';

export default function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isHome = pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 shadow-soft backdrop-blur'
      }`}
    >
      <nav
        className="container-content flex items-center justify-between py-4"
        aria-label="Primary"
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
        <div
          className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full ${
            transparent ? 'bg-white' : 'bg-white'
          }`}
        >
          <img
            src={logo}
            alt="Khammam Eye Bank Logo"
            className="h-15 w-15 object-contain"
          />
        </div>

          <span className="font-heading text-lg md:text-lg font-bold leading-tight text-primary text-center">
            The Khammam <br /> Eye Bank
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => (
            <li key={item.path} className="group relative">
              <NavLink
                to={item.path}
                className="text-sm font-semibold text-primary transition-colors"
              >
                {t(item.label)}
              </NavLink>

              {item.children && (
                <ul className="invisible absolute left-0 top-full z-10 mt-2 w-56 rounded-xl bg-white p-2 opacity-0 shadow-lift transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path}
                        className="block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-surface hover:text-primary"
                      >
                        {t(child.label)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Register Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <LinkButton
            to={siteConfig.registrationFormUrl}
            external
            variant="primary"
          >
            {t('nav.register')}
          </LinkButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((v) => !v);
            if (mobileOpen) setOpenDropdown(null);
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>
            {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white shadow-lift lg:hidden"
          >
            <ul className="container-content flex flex-col gap-1 py-4">
              {primaryNav.map((item) => (
                <li key={item.path}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.path ? null : item.path
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold text-ink hover:bg-surface"
                      >
                        {t(item.label)}

                        <motion.span
                          animate={{
                            rotate: openDropdown === item.path ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          ▼
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.path && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-5"
                          >
                            {item.children.map((child) => (
                              <li key={child.path}>
                                <button
                                  type="button"
                                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted hover:bg-surface"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setOpenDropdown(null);

                                    setTimeout(() => {
                                      navigate(child.path);
                                      window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                      });
                                    }, 250);
                                  }}
                                >
                                  {t(child.label)}
                                </button>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenDropdown(null);

                        setTimeout(() => {
                          navigate(item.path);
                          window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                          });
                        }, 250);
                      }}
                      className="block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-ink hover:bg-surface"
                    >
                      {t(item.label)}
                    </button>
                  )}
                </li>
              ))}

              <li className="px-3 pt-2">
                <LinkButton
                  to={siteConfig.registrationFormUrl}
                  external
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  {t('nav.register')}
                </LinkButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}