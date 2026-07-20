"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#101820]/90 backdrop-blur-md">
      <div className="grid h-14 w-full grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12 xl:px-16">
        <Link
          href="/"
          className="justify-self-start text-lg font-bold tracking-tight text-white"
        >
          {siteConfig.name}
        </Link>

        <nav
          className="hidden items-center justify-center gap-0.5 lg:flex"
          aria-label="Hauptnavigation"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3 py-1 text-sm font-semibold transition-colors",
                  active
                    ? "text-[#f2aa4c]"
                    : "text-white/70 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex justify-self-end lg:min-w-0">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 lg:hidden"
                aria-label="Menü öffnen"
              >
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,20rem)] border-white/10 bg-[#101820] text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-bold text-white">
                  {siteConfig.name}
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-8 flex flex-col gap-1"
                aria-label="Mobilnavigation"
              >
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-full px-4 py-3 text-lg font-semibold transition-colors",
                        active
                          ? "text-[#f2aa4c]"
                          : "text-white/80 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
