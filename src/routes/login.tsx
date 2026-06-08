import { createFileRoute, Link } from "@tanstack/react-router";
import { Stethoscope, Mail, Lock, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — MedStep" },
      { name: "description", content: "Entre no MedStep para continuar seus estudos médicos." },
      { property: "og:title", content: "Login — MedStep" },
      { property: "og:description", content: "Plataforma educacional para revisão rápida de procedimentos médicos." },
    ],
  }),
  component: LoginPage,
});

const diferenciais = [
  "Procedimentos Padronizados",
  "Conteúdo Validado",
  "Aprendizado Prático",
  "Simulações Clínicas",
];

function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Cabeçalho */}
      <div className="pt-10 pb-6 px-6 text-center">
        <div className="w-16 h-16 rounded-2xl bg-medical-gradient flex items-center justify-center mx-auto shadow-glow">
          <Stethoscope className="w-8 h-8 text-white" />
        </div>
        <h1 className="mt-4 text-2xl font-bold text-gradient-medical">MedStep</h1>
        <p className="mt-1 text-sm text-muted-foreground font-medium">
          Aprenda. Pratique. Salve vidas.
        </p>
      </div>

      {/* Área de Login */}
      <div className="flex-1 px-6">
        <div className="bg-card rounded-3xl shadow-card border border-border/60 p-6">
          <h2 className="text-xl font-bold text-primary text-center">Bem-vindo ao MedStep</h2>
          <p className="text-sm text-muted-foreground text-center mt-1">
            Faça login para continuar seus estudos
          </p>

          <div className="mt-6 flex flex-col gap-4">
            {/* E-mail */}
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-input focus:outline-none focus:ring-2 focus:ring-medical/50 transition-all text-sm"
              />
            </div>

            {/* Senha */}
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-input focus:outline-none focus:ring-2 focus:ring-medical/50 transition-all text-sm"
              />
            </div>
          </div>

          {/* Botões */}
          <div className="mt-6 flex flex-col gap-3">
            <Link
              to="/"
              className="w-full py-3.5 rounded-xl bg-medical text-white font-semibold text-center shadow-soft hover:shadow-glow transition-all active:scale-[0.98]"
            >
              Entrar
            </Link>
            <Link
              to="/"
              className="w-full py-3.5 rounded-xl bg-card text-medical font-semibold text-center border-2 border-medical hover:bg-medical-soft transition-all active:scale-[0.98]"
            >
              Entrar como visitante
            </Link>
          </div>

          {/* Links */}
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="text-medical font-medium hover:underline cursor-pointer">
              Esqueci minha senha
            </span>
            <span className="text-medical font-medium hover:underline cursor-pointer">
              Criar conta
            </span>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          {diferenciais.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-card rounded-xl border border-border/60 px-3 py-2.5 shadow-soft"
            >
              <div className="w-5 h-5 rounded-full bg-medical-soft flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-medical" strokeWidth={3} />
              </div>
              <span className="text-xs font-medium text-primary leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <div className="px-6 pb-8 pt-4 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Plataforma educacional para revisão rápida de procedimentos médicos
        </p>
      </div>
    </div>
  );
}
