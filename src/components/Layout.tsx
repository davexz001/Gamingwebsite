import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { STUDIO_PROFILE } from '../data/studioData';

interface LayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/games', label: 'Games', end: false },
  { to: '/services', label: 'Services', end: false },
  { to: '/studio', label: 'Studio', end: false },
  { to: '/contact', label: 'Contact', end: false },
];

export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F5F7] text-[#0F172A]">
      <header className="sticky top-0 z-40 border-b border-slate-900/8 bg-[#F4F5F7]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF]"
          >
            {STUDIO_PROFILE.name}
          </Link>

          <nav
            aria-label="Primary Navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E40AF] ${
                    isActive
                      ? 'text-[#0F172A] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-[#1E40AF]'
                      : 'text-slate-600 hover:text-[#0F172A]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="hidden rounded-lg bg-[#0F172A] px-4 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1E40AF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E40AF] md:inline-flex"
            >
              Get in touch
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#0F172A] transition-colors hover:bg-slate-200/70 focus-visible:outline-2 focus-visible:outline-[#1E40AF] md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-900/8 bg-white px-6 py-4 md:hidden">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-[#1E40AF]'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#0F172A]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F172A] px-4 py-2.5 text-sm font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1E40AF]"
              >
                Get in touch
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-900/10 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Link
                to="/"
                className="font-display text-lg font-bold tracking-tight text-[#0F172A]"
              >
                {STUDIO_PROFILE.name}
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                Independent game development studio focused on atmospheric original worlds, senior
                co-development, and deterministic rendering pipelines.
              </p>
              <p className="mt-4 text-xs text-slate-500">{STUDIO_PROFILE.location}</p>
            </div>

            <div className="md:col-span-4">
              <h2 className="text-xs font-semibold tracking-wide text-slate-500">Navigation</h2>
              <ul className="mt-4 grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-slate-700 transition-colors hover:text-[#1E40AF]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h2 className="text-xs font-semibold tracking-wide text-slate-500">
                Business & Inquiries
              </h2>
              <div className="mt-4 space-y-2 text-sm">
                <a
                  href={`mailto:${STUDIO_PROFILE.email}`}
                  className="block font-medium text-[#0F172A] transition-colors hover:text-[#1E40AF]"
                >
                  {STUDIO_PROFILE.email}
                </a>
                <p className="text-xs text-slate-500">
                  Response window: {STUDIO_PROFILE.responseTime}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-900/8 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {STUDIO_PROFILE.name}. Studio showcase demo.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/services" className="hover:text-[#0F172A]">
                Co-Development
              </Link>
              <Link to="/games" className="hover:text-[#0F172A]">
                Portfolio
              </Link>
              <Link to="/contact" className="hover:text-[#0F172A]">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
