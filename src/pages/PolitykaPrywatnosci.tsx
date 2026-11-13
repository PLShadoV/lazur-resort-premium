import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { routeData } from '@/seo/Seo';

const sections: [string, string[]][] = [
  ["Kto jest administratorem danych", [
    "Administratorem Twoich danych osobowych jest LAZUR RESORT sp. z o.o., ul. Makowa 6, 72-330 Rogowo (dalej: „my”).",
    "W sprawach danych osobowych napisz na lazurresort@op.pl albo zadzwoń: +48 502 939 725.",
  ]],
  ["Jakie dane zbieramy i po co", [
    "Formularz kontaktowy: imię, nazwisko, e-mail, telefon, daty pobytu, liczba osób i treść wiadomości — aby odpowiedzieć na Twoje pytanie (art. 6 ust. 1 lit. b i f RODO).",
    "Rezerwacja online: dane podane w systemie rezerwacji — aby zawrzeć i wykonać umowę o pobyt, przyjąć zadatek i rozliczyć pobyt (art. 6 ust. 1 lit. b i c RODO).",
    "Statystyki strony: anonimowe informacje o odwiedzinach (Google Analytics) — aby wiedzieć, jak goście korzystają ze strony (art. 6 ust. 1 lit. f RODO).",
  ]],
  ["Komu przekazujemy dane", [
    "Danych nie sprzedajemy. Korzystają z nich tylko firmy, które technicznie obsługują stronę i rezerwacje: RoomAdmin (system rezerwacji), Supabase i Resend (wysyłka wiadomości z formularza), Cloudflare (hosting strony), Google (statystyki Google Analytics i mapa dojazdu).",
    "Część z tych firm może przetwarzać dane poza Europejskim Obszarem Gospodarczym — na podstawie standardowych klauzul umownych Komisji Europejskiej lub decyzji o odpowiednim stopniu ochrony.",
    "Dane rozliczeniowe przekazujemy też, gdy wymaga tego prawo, np. biuru rachunkowemu lub urzędom.",
  ]],
  ["Jak długo przechowujemy dane", [
    "Wiadomości z formularza — do czasu zakończenia rozmowy, nie dłużej niż rok.",
    "Dane z rezerwacji — przez czas wymagany przepisami podatkowymi i rachunkowymi (zwykle 5 lat od końca roku, w którym odbył się pobyt).",
  ]],
  ["Twoje prawa", [
    "Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia oraz sprzeciwu wobec przetwarzania opartego na naszym uzasadnionym interesie.",
    "Możesz złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).",
    "Podanie danych jest dobrowolne, ale bez nich nie odpowiemy na wiadomość ani nie przyjmiemy rezerwacji.",
  ]],
  ["Pliki cookie", [
    "Strona używa plików cookie Google Analytics do statystyk oraz plików cookie systemu rezerwacji i mapy Google, gdy z nich korzystasz.",
    "Możesz je w każdej chwili usunąć lub zablokować w ustawieniach przeglądarki.",
  ]],
];

export default function PolitykaPrywatnosci() {
  return <main className="min-h-screen pt-28 bg-background">
    <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
      <nav aria-label="Ścieżka strony" className="mb-8 text-sm text-muted-foreground"><Link to="/">Lazur Resort</Link> / Polityka prywatności</nav>
      <ShieldCheck size={40} className="text-[#967d48] mb-6" aria-hidden="true" />
      <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">{routeData['/polityka-prywatnosci'].h1}</h1>
      <p className="text-lg text-muted-foreground leading-relaxed mb-12">Tu wyjaśniamy, jakie dane zbiera strona lazurrogowo.pl, w jakim celu i jakie masz prawa.</p>
      <div className="space-y-6">
        {sections.map(([title, paras]) => <Card key={title} className="glass-card"><CardContent className="p-6 md:p-8">
          <h2 className="text-2xl font-light tracking-tight mb-4">{title}</h2>
          <div className="space-y-3">{paras.map((p) => <p key={p} className="text-muted-foreground leading-relaxed">{p}</p>)}</div>
        </CardContent></Card>)}
      </div>
    </section>
  </main>;
}
