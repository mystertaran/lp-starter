import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Polityka prywatności — The Fabos",
  description:
    "Zasady przetwarzania danych osobowych w The Fabos Sp. z o.o. — formularz kontaktowy, Google Analytics 4, Twoje prawa.",
};

const UPDATED_AT = "21 kwietnia 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-muted-foreground mb-5 text-sm font-semibold tracking-[0.14em] uppercase">
            Polityka prywatności
          </p>
          <h1 className="text-display-lg font-display text-foreground uppercase">
            Jak chronimy Twoje dane.
          </h1>
          <p className="text-muted-foreground mt-6 text-sm">Ostatnia aktualizacja: {UPDATED_AT}.</p>

          <div className="prose prose-neutral text-foreground [&_h2]:font-display mt-12 max-w-none text-base leading-relaxed [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:tracking-tight [&_h2]:uppercase [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_li]:mt-2 [&_p]:mt-4 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-5">
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest <strong>The Fabos Sp. z o.o.</strong> z
              siedzibą w Łodzi, ul. Pomorska 175 lok. 26, 90-236 Łódź, wpisana do rejestru
              przedsiębiorców KRS pod numerem 0001226281, NIP 7252364610, REGON 544067052 (dalej:
              „My” lub „The Fabos”).
            </p>
            <p>
              Kontakt z administratorem:{" "}
              <a
                className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
                href="mailto:bartek@fabos.pl"
              >
                bartek@fabos.pl
              </a>
              , tel. +48 794 433 282.
            </p>

            <h2>2. Jakie dane zbieramy i w jakim celu</h2>
            <h3>2.1. Formularz kontaktowy</h3>
            <p>Gdy wypełniasz formularz kontaktowy na stronie fabos.pl, zbieramy:</p>
            <ul>
              <li>imię i nazwisko,</li>
              <li>nazwę firmy lub domenę sklepu,</li>
              <li>adres e-mail,</li>
              <li>opcjonalnie numer telefonu,</li>
              <li>wolumen zamówień miesięcznie,</li>
              <li>kanały sprzedaży, z których korzystasz,</li>
              <li>opcjonalnie wiadomość, którą wpisujesz w pole tekstowe.</li>
            </ul>
            <p>
              Cel: nawiązanie kontaktu handlowego i odpowiedź na Twoje zapytanie. Podstawa prawna:
              art. 6 ust. 1 lit. a RODO (Twoja zgoda) oraz art. 6 ust. 1 lit. f RODO (nasz prawnie
              uzasadniony interes w prowadzeniu rozmów handlowych).
            </p>

            <h3>2.2. Analityka ruchu (Google Analytics 4)</h3>
            <p>
              Korzystamy z Google Analytics 4 do anonimowego mierzenia ruchu na stronie —
              wyświetlenia, zdarzenia konwersji (kliknięcie CTA, rozpoczęcie i wysłanie formularza),
              głębokość scrolla. GA4 zbiera dane zanonimizowane (IP jest skracany) i nie
              wykorzystujemy ich do profilowania pojedynczych osób.
            </p>
            <p>
              Podstawa prawna: art. 6 ust. 1 lit. f RODO — nasz prawnie uzasadniony interes w
              mierzeniu skuteczności strony.
            </p>

            <h2>3. Komu przekazujemy dane</h2>
            <ul>
              <li>
                <strong>Resend, Inc.</strong> (USA) — dostawca usługi wysyłki wiadomości e-mail z
                formularza. Transfer danych do USA odbywa się na podstawie standardowych klauzul
                umownych zatwierdzonych przez Komisję Europejską.
              </li>
              <li>
                <strong>Google Ireland Ltd.</strong> — dostawca Google Analytics 4. Dane analityczne
                są przetwarzane w UE, transfer ewentualnych danych zagregowanych do USA odbywa się w
                oparciu o Data Privacy Framework.
              </li>
              <li>
                <strong>Vercel Inc.</strong> (USA) lub inny dostawca hostingu — w zakresie logów
                technicznych niezbędnych do utrzymania strony.
              </li>
            </ul>

            <h2>4. Jak długo przechowujemy dane</h2>
            <ul>
              <li>
                Dane z formularza kontaktowego — do 24 miesięcy od ostatniego kontaktu lub do
                momentu wycofania zgody.
              </li>
              <li>
                Dane analityczne GA4 — maksymalnie 14 miesięcy, po czym są automatycznie usuwane.
              </li>
            </ul>

            <h2>5. Twoje prawa</h2>
            <p>Masz prawo do:</p>
            <ul>
              <li>dostępu do swoich danych i otrzymania ich kopii,</li>
              <li>sprostowania (poprawienia) danych,</li>
              <li>usunięcia danych („prawo do bycia zapomnianym”),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przeniesienia danych,</li>
              <li>
                wniesienia sprzeciwu wobec przetwarzania opartego na naszym prawnie uzasadnionym
                interesie,
              </li>
              <li>wycofania zgody w dowolnym momencie,</li>
              <li>
                wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193
                Warszawa).
              </li>
            </ul>
            <p>
              Aby zrealizować któreś z tych praw, napisz do nas na{" "}
              <a
                className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
                href="mailto:bartek@fabos.pl"
              >
                bartek@fabos.pl
              </a>
              . Odpowiemy w ciągu 30 dni.
            </p>

            <h2>6. Pliki cookies</h2>
            <p>
              Strona używa niezbędnych plików cookies technicznych (do działania strony) oraz
              analitycznych (Google Analytics 4). Możesz w każdej chwili zablokować cookies w
              ustawieniach przeglądarki — strona będzie działać, ale nie zobaczymy zanonimizowanych
              statystyk odwiedzin.
            </p>

            <h2>7. Automatyczne decyzje i profilowanie</h2>
            <p>
              Nie podejmujemy wobec Ciebie zautomatyzowanych decyzji, w tym profilowania, które
              wywoływałyby wobec Ciebie skutki prawne lub istotnie na Ciebie wpływały.
            </p>

            <h2>8. Zmiany w polityce</h2>
            <p>
              Jeśli zmienimy tę politykę, zaktualizujemy datę na górze tego dokumentu i — jeśli
              zmiany będą istotne — poinformujemy Cię drogą mailową (o ile podałeś/-aś adres
              e-mail).
            </p>

            <p className="text-muted-foreground mt-14 text-sm">
              Masz pytanie do tej polityki? Napisz na{" "}
              <a
                className="text-foreground decoration-accent font-semibold underline decoration-2 underline-offset-4"
                href="mailto:bartek@fabos.pl"
              >
                bartek@fabos.pl
              </a>
              .
            </p>
          </div>

          <div className="border-border mt-20 border-t pt-8">
            <Link
              href="/"
              className="text-foreground decoration-accent hover:text-accent text-sm font-semibold underline decoration-2 underline-offset-4"
            >
              ← Wróć na stronę główną
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
