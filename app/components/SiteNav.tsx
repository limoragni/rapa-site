"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fixed site nav shared by the home and the case pages.
 *  >= 900px: logo, section links, optional ES/EN switch and the talk button.
 *  < 900px: compact menu. Focus goes to the first link on open; Escape, an
 *  outside click or a link closes it and returns focus to the button; Tab
 *  cycles inside the panel only. */
export default function SiteNav({
  logoHref,
  items,
  activeId = null,
  langSwitch,
  menuLabel,
  talk,
}: {
  logoHref: string;
  items: readonly (readonly [string, string, string])[]; // [id, href, label]
  activeId?: string | null;
  langSwitch?: ReactNode;
  menuLabel: string;
  talk: ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = (returnFocus = true) => {
    setMenuOpen(false);
    // Deferred so it lands after the browser's own focus handling of the
    // click (outside click, anchor navigation).
    if (returnFocus) setTimeout(() => menuBtnRef.current?.focus(), 0);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const panel = menuRef.current;
    const focusables = () =>
      panel ? [...panel.querySelectorAll<HTMLElement>("a[href], button")] : [];
    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      const list = focusables();
      if (list.length === 0) return;
      const first = list[0];
      const last = list[list.length - 1];
      const inside = panel?.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === first || !inside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || !inside)) {
        e.preventDefault();
        first.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panel?.contains(target) || menuBtnRef.current?.contains(target)) return;
      closeMenu();
    };
    const mq = window.matchMedia("(min-width: 900px)");
    const onWide = () => mq.matches && closeMenu(false);

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    mq.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      mq.removeEventListener("change", onWide);
    };
  }, [menuOpen]);

  return (
    <nav
      className={
        scrolled || menuOpen ? "site-nav site-nav--scrolled" : "site-nav surface-dark"
      }
    >
      <div className="site-nav-inner">
        <a href={logoHref} className="site-nav-logo">
          Juan Rapacioli
        </a>
        <ul className="site-nav-links">
          {items.map(([id, href, label]) => (
            <li key={id}>
              <a href={href} className={activeId === id ? "active" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="site-nav-right">
          {langSwitch && (
            <div className="lang-switch lang-switch--bar" role="group" aria-label="Language">
              {langSwitch}
            </div>
          )}
          <button
            ref={menuBtnRef}
            type="button"
            className="btn btn-secondary nav-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          >
            {menuLabel}
          </button>
          {talk}
        </div>
      </div>
      <div
        id="mobile-menu"
        ref={menuRef}
        className={menuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}
      >
        <div className="container">
          <ul className="mobile-menu-links">
            {items.map(([id, href, label]) => (
              <li key={id}>
                <a
                  href={href}
                  className={activeId === id ? "active" : undefined}
                  onClick={() => closeMenu()}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {langSwitch && (
            <div className="lang-switch" role="group" aria-label="Language">
              {langSwitch}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
