import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const HERO_IMG = 'https://cdn.poehali.dev/projects/4768ad25-1fa0-45b3-a8c0-1751048ec07e/bucket/ffe026f7-7ff8-4636-a6f4-e580c2a5e71f.png';

const NAV = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'Обо_мне' },
  { id: 'services', label: 'Услуги' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contact', label: 'Контакты' },
];

const COMPANIES = ['hh.ru', 'ANCOR', 'Talent Tech', 'Mail.Ru', 'S8 Capital', 'GSK', 'Danone', 'ДОМ.РФ'];

const STATS = [
  { value: '400+', label: 'офферов от Junior до CEO' },
  { value: '+35%', label: 'средний рост дохода' },
  { value: '8+ лет', label: 'опыта в HR и HR-Tech' },
];

const ABOUT_POINTS = [
  'Работала в HeadHunter (hh.ru), ANCOR, Talent Tech.',
  'Знаю изнутри, как компании ищут, выбирают и увольняют людей.',
  'Руководила проектами по автоматизации подбора персонала и HR-консалтингу для таких компаний как: Mail.Ru, S8 Capital, GSK, Danone, ДОМ.РФ и др. крупных компаний.',
  'Высшее образование в области управления персоналом, РАНХиГС.',
  'Веду блог, который читают в HR-отделах.',
];

const SERVICES = [
  { icon: 'FileText', title: 'Сильное резюме и сопроводительное письмо', desc: 'Резюме, которое проходит ATS и цепляет рекрутера с первого взгляда.' },
  { icon: 'MessagesSquare', title: 'Репетиция собеседования', desc: 'Отработка ответов, поведения и сложных вопросов под конкретную вакансию.' },
  { icon: 'Rocket', title: 'Сопровождение: хакнем наём за 1 месяц', desc: 'Полный путь от стратегии, CV до первых собеседований.' },
  { icon: 'Search', title: 'Аудит резюме и откликов', desc: 'Разбор, почему не зовут на интервью, и точечные правки.' },
  { icon: 'Network', title: 'Нетворкинг', desc: 'Стратегия выхода на нужных людей и скрытый рынок вакансий.' },
  { icon: 'Handshake', title: 'Переговоры при увольнении', desc: 'Подготовка к разговору, чтобы выйти с лучшими условиями.' },
];

const REVIEWS = [
  { text: 'Алина — супер профессионал! Всё было сделано быстро и качественно! Видно, что человек любит своё дело и с ответственностью подходит к решению любого вопроса. Спасибо!', name: 'Елизавета', role: 'Менеджер по маркетингу и рекламе' },
  { text: 'Работал с Алиной в формате экспресс-сопровождения. Было очень продуктивно, закрыли все вопросы от резюме до выбора компании. Вышел на работу через 2,5 месяца поиска.', name: 'Андрей', role: 'Коммерческий директор' },
  { text: 'Алина круто помогла в составлении резюме и сопроводительного письма. После обновления резюме пришло приглашение на собеседование по моему отклику!', name: 'Сергей', role: 'Product Manager' },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', contact: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Заявка принята! Алина свяжется с вами.', {
      description: '> processing... request queued',
    });
    setForm({ name: '', contact: '', message: '' });
  };

  return (
    <div className="min-h-screen text-foreground antialiased overflow-x-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
            <span className="neon-gradient w-8 h-8 grid place-items-center rounded-sm box-glow">
              <Icon name="Terminal" size={18} className="text-background" />
            </span>
            <span className="font-display font-bold tracking-tight text-sm sm:text-base">
              career<span className="neon-text-gradient">_hacker</span>
            </span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors hover:text-glow"
              >
                <span className="text-primary">/</span>{n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contact')} className="hidden md:inline-flex neon-gradient text-background font-bold text-xs hover:opacity-90 box-glow">
            ./start
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 px-4 py-3 flex flex-col gap-1 animate-fade-in">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => { scrollTo(n.id); setMenuOpen(false); }} className="text-left py-2 text-sm text-muted-foreground hover:text-foreground">
                <span className="text-primary">/</span>{n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 grain">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
              ex. hh.ru · ANCOR · автор блога
            </div>
            <p className="text-primary text-sm mb-3">{'> whoami'}</p>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-4">
              Карьерный<br />
              <span className="neon-text-gradient text-glow">Хакер</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-foreground/90 mb-6">
              Алина Большева<span className="text-primary animate-blink">_</span>
            </h2>
            <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
              Привела к офферу <span className="text-foreground">400+</span> специалистов и руководителей — от Junior до CEO — со средним ростом дохода <span className="text-foreground">35%</span>. Мои клиенты уже работают в ТОП-компаниях.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => scrollTo('contact')} className="neon-gradient text-background font-bold box-glow hover:opacity-90">
                <Icon name="Zap" size={16} className="mr-1" /> Оставить заявку
              </Button>
              <Button onClick={() => scrollTo('services')} variant="outline" className="border-border hover:box-glow-blue">
                Услуги и цены
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-4 neon-gradient opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-lg overflow-hidden border border-border box-glow animate-float">
              <img src={HERO_IMG} alt="Алина Большева" className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none mix-blend-color" style={{ background: 'linear-gradient(135deg, hsl(265 90% 45% / 0.55), hsl(222 90% 50% / 0.45))' }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(160deg, hsl(265 90% 30% / 0.35), transparent 55%, hsl(222 90% 35% / 0.4))' }} />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="h-1/3 w-full bg-gradient-to-b from-primary/30 to-transparent animate-scan" />
              </div>
              <div className="absolute bottom-3 left-3 right-3 font-mono text-[11px] text-foreground/80 bg-background/60 backdrop-blur-sm rounded px-2 py-1 border border-border">
                {'> status: hiring_success · 99.9% uptime'}
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="container mx-auto px-4 mt-16">
          <div className="grid sm:grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="border border-border rounded-lg p-6 bg-card/50 hover:box-glow transition-shadow">
                <p className="font-display text-4xl font-bold neon-text-gradient mb-1">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xs text-muted-foreground mb-3">{'// trusted_stack'}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
              {COMPANIES.map((c) => (
                <span key={c} className="hover:text-glow-blue hover:text-foreground transition-colors">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-border">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary text-sm mb-2">{'> cat about.md'}</p>
            <h2 className="font-display font-bold text-4xl mb-4">
              Надёжная поддержка <span className="neon-text-gradient">на всех этапах</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              От резюме до оффера, во время адаптации и при увольнении. Карьерный консультант, который помогает найти работу, составляет грамотное резюме, готовит к собеседованиям и помогает получать офферы.
            </p>
            <div className="border-l-2 border-primary pl-4 box-glow rounded-r-lg py-3 bg-card/40">
              <p className="text-sm text-foreground/80">
                <span className="text-primary">8+ лет</span> опыта в HR и HR-Tech, <span className="text-primary">5+ лет</span> в карьерном консультировании.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {ABOUT_POINTS.map((p, i) => (
              <div key={i} className="flex gap-3 items-start border border-border rounded-lg p-4 bg-card/40 hover:border-primary/50 transition-colors">
                <Icon name="ChevronRight" size={18} className="text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/85">{p}</p>
              </div>
            ))}
            <div className="border border-border rounded-lg p-4 bg-card/40 flex gap-3 items-start">
              <Icon name="Newspaper" size={18} className="text-secondary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/85">
                <span className="text-foreground">ИИ решает вашу судьбу:</span> как баг в ATS оставляет людей без работы. HR-Tech в России 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-primary text-sm mb-2">{'> ls ./services'}</p>
          <h2 className="font-display font-bold text-4xl mb-10">Услуги и <span className="neon-text-gradient">цены</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="group border border-border rounded-lg p-6 bg-card/40 hover:box-glow hover:-translate-y-1 transition-all">
                <div className="neon-gradient w-11 h-11 grid place-items-center rounded-md mb-4 box-glow">
                  <Icon name={s.icon} size={20} className="text-background" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-glow transition-all">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <p className="text-primary text-sm mb-2">{'> git log --reviews'}</p>
          <h2 className="font-display font-bold text-4xl mb-10">Отзывы <span className="neon-text-gradient">клиентов</span></h2>
          <div className="grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r) => (
              <div key={r.name} className="border border-border rounded-lg p-6 bg-card/40 flex flex-col hover:box-glow-blue transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-primary fill-current" />
                  ))}
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed flex-1">{r.text}</p>
                <div className="mt-5 pt-4 border-t border-border">
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 border-t border-border grain relative">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <p className="text-primary text-sm mb-2">{'> ./run apply.sh'}</p>
            <h2 className="font-display font-bold text-4xl mb-3">Оставить <span className="neon-text-gradient text-glow">заявку</span></h2>
            <p className="text-muted-foreground">Запишитесь на консультацию — отвечу в течение дня.</p>
          </div>
          <form onSubmit={submit} className="border border-border rounded-lg p-6 sm:p-8 bg-card/60 backdrop-blur-sm box-glow space-y-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground border-b border-border pb-3 mb-2">
              <span className="w-3 h-3 rounded-full bg-destructive/70" />
              <span className="w-3 h-3 rounded-full bg-secondary/70" />
              <span className="w-3 h-3 rounded-full bg-primary/70" />
              <span className="ml-2">contact_form.tsx</span>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">{'> ваше имя'}</label>
              <Input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Иван Иванов"
                className="bg-background/60 border-border focus-visible:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">{'> телефон или telegram'}</label>
              <Input
                required
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="@username / +7..."
                className="bg-background/60 border-border focus-visible:ring-primary"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">{'> что хотите хакнуть?'}</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Кратко о вашей задаче..."
                rows={4}
                className="bg-background/60 border-border focus-visible:ring-primary resize-none"
              />
            </div>
            <Button type="submit" className="w-full neon-gradient text-background font-bold box-glow hover:opacity-90">
              <Icon name="Send" size={16} className="mr-2" /> Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Алина Большева · Карьерный Хакер</p>
          <p className="font-mono">{'<built with React /> · process exited 0'}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;