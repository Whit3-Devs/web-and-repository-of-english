import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";

function HamburgerIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

const focusableSelector =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

type MobileNavBarProps = {
  pageTitle: string;
};

export function MobileNavBar({ pageTitle }: MobileNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) {
        return;
      }

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector);
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      hamburgerButtonRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex h-[60px] items-center gap-3 border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
        <button
          ref={hamburgerButtonRef}
          type="button"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-700 transition duration-200 ease-out hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-blue-950"
        >
          <HamburgerIcon />
        </button>
        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
            English Cheatsheet
          </p>
          <p className="truncate text-base font-bold text-slate-950 dark:text-slate-50">{pageTitle}</p>
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 h-full w-full bg-slate-900/45"
          />
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 left-0 flex w-[324px] max-w-[85vw] flex-col bg-white shadow-xl dark:bg-slate-950"
          >
            <div className="min-h-0 flex-1">
              <Sidebar
                onNavigate={() => setIsOpen(false)}
                headerAction={
                  <button
                    ref={closeButtonRef}
                    type="button"
                    aria-label="Close navigation"
                    onClick={() => setIsOpen(false)}
                    className="-mr-2 -mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-slate-500 transition duration-200 ease-out hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100 motion-reduce:transition-none dark:text-slate-400 dark:hover:bg-slate-800 dark:focus-visible:ring-blue-950"
                  >
                    <CloseIcon />
                  </button>
                }
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
