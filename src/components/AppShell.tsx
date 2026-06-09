import { Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Menu, Stethoscope, User, X, LogOut, CheckCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
  title?: string;
  showBack?: boolean;
}

const procedimentosConcluidos = [
  {
    nome: "Desengasgo em Bebês",
    teoria: true,
    pratica: true,
    quiz: true,
  },
];

const totalProcedimentos = 11;

export function AppShell({ children, title, showBack }: AppShellProps) {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/teorica", label: "Aula Teórica" },
    { to: "/pratica", label: "Aula Prática" },
    { to: "/quiz", label: "Quiz" },
    { to: "/vr", label: "Realidade Virtual" },
    { to: "/sobre", label: "Sobre o MedStep" },
  ] as const;

  const concluidos = procedimentosConcluidos.length;
  const percentual = Math.round((concluidos / totalProcedimentos) * 100);

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

          <button
            onClick={() => setProfileOpen(true)}
            className="relative w-10 h-10 rounded-full bg-medical-gradient border-2 border-primary/80 flex items-center justify-center text-white shadow-soft hover:shadow-glow transition-all"
            aria-label="Acessar perfil"
          >
            <span className="text-xs font-bold">CR</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-medical border-2 border-card" />
          </button>
        </div>
      </header>

      {/* Menu lateral esquerdo */}
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

      {/* Painel de perfil direito */}
      {profileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm animate-in fade-in"
            onClick={() => setProfileOpen(false)}
          />
          <aside className="relative w-80 bg-card shadow-glow h-full flex flex-col animate-in slide-in-from-right">

            {/* Topo */}
            <div className="p-6 bg-medical-gradient text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium opacity-80">Meu Perfil</span>
                <button onClick={() => setProfileOpen(false)} className="p-1 opacity-80 hover:opacity-100">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center">
                  <span className="text-xl font-bold">CR</span>
                </div>
                <div>
                  <p className="font-bold text-lg leading-tight">Dr(a). Cristiano Ronaldo</p>
                  <p className="text-sm opacity-80">cristianoronaldo@hotmail.com</p>
                </div>
              </div>
            </div>

            {/* Progresso */}
            <div className="flex-1 overflow-y-auto p-6">
              <h3 className="font-bold text-primary mb-4">Meu Progresso</h3>

              <div className="mb-5">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">{concluidos} de {totalProcedimentos} procedimentos concluídos</span>
                  <span className="font-semibold text-medical">{percentual}%</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-medical-gradient rounded-full transition-all"
                    style={{ width: `${percentual}%` }}
                  />
                </div>
              </div>

              {procedimentosConcluidos.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {procedimentosConcluidos.map((proc) => (
                    <div key={proc.nome} className="bg-muted rounded-xl p-4 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-sm text-primary">{proc.nome}</p>
                        <span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">
                          Concluído
                        </span>
                      </div>
                      <div className="flex gap-3 text-xs text-green-600 font-medium">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> Teoria
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> Prática
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5" /> Quiz
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground text-center py-8">
                  Nenhum procedimento concluído ainda.
                </p>
              )}
            </div>

            {/* Rodapé */}
            <div className="p-6 border-t border-border">
              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-destructive/10 text-destructive font-semibold hover:bg-destructive/20 transition-colors"
                onClick={() => setProfileOpen(false)}
              >
                <LogOut className="w-4 h-4" />
                Sair
              </Link>
            </div>
          </aside>
        </div>
      )}

      <main className="mx-auto max-w-xl px-4 pb-16 pt-6">{children}</main>
    </div>
  );
}
