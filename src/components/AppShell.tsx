import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Menu, Stethoscope, User, X } from "lucide-react";
import { useState, type ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

export function AppShell({ children, title, showBack }: AppShellProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/teorica", label: "Aula Teórica" },
    { to: "/pratica", label: "Aula Prática" },
    { to: "/quiz", label: "Quiz" },
    { to: "/vr", label: "Realidade Virtual" },
    { to: "/sobre", label: "Sobre o MedStep" },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-30 bg-card/95 backdrop-blur border-b border-border shadow-soft">
        <div className="mx-auto max-w-xl flex items-center justify-between px-4 h-16">
          {showBack ? (
            <button
              onClick={() => router.history.back()}
              className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Voltar"
            >
              <ArrowLeft className="w-6 h-6 text-primary" />
            </button>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>
          )}

          <div className="flex-1 text-center">
            {title ? (
              <h1 className="text-base font-semibold text-primary truncate">{title}</h1>
            ) : (
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-primary flex items-center justify-center gap-1.5">
                  Bem-vindo,
                  <Stethoscope className="w-5 h-5 text-medical" />
                </span>
                <span className="text-sm text-muted-foreground -mt-0.5">Dr(a)</span>
              </div>
            )}
          </div>

          <Link
            to="/login"
            className="relative w-10 h-10 rounded-full bg-medical-gradient border-2 border-primary/80 flex items-center justify-center text-white shadow-soft hover:shadow-glow transition-all"
            aria-label="Acessar conta"
          >
            <User className="w-5 h-5" />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-medical border-2 border-card" />
          </Link>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-in fade-in"
            onClick={() => setOpen(false)}
          />
          <nav className="relative w-72 bg-card shadow-glow h-full p-6 flex flex-col animate-in slide-in-from-left">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-medical-gradient flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-primary leading-none">MedStep</p>
                  <p className="text-xs text-muted-foreground">Medicina em segundos</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="p-1">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-foreground hover:bg-muted transition-colors font-medium"
                  activeProps={{ className: "bg-medical-soft text-medical font-semibold" }}
                  activeOptions={{ exact: true }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-auto text-xs text-muted-foreground pt-6 border-t border-border">
              MedStep · v1.0 — Educação médica acessível.
            </p>
          </nav>
        </div>
      )}

      <main className="mx-auto max-w-xl px-4 pb-16 pt-6">{children}</main>
    </div>
  );
}
