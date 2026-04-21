# Sprzedaż, zwroty, preordery i chaos magazynowy

## Jak połączyliśmy fulfillment z OMS i odzyskaliśmy kontrolę nad operacjami e-commerce

---

### Autor

**Bartłomiej Kraśniewski**
Specjalista ds. Rozwoju E-commerce i IT

- 15 lat doświadczenia
- Automatyzacja procesów
- Ekspert e-commerce
- Integracje systemów
- Operacje w e-commerce

> *escape the ordinary*

---

## Marka

### Poznaj NAOKO STUDIO — markę, która łączy kreatywność społeczności z technologią

NAOKO to polska marka modowa, która zrewolucjonizowała podejście do codziennej garderoby. To nie tylko ubrania — to manifest odwagi i kreatywności, skierowany do kobiet, które nie boją się wyróżniać z tłumu.

NAOKO jedna z pierwszych marek w Polsce, która z sukcesem połączyła świat mody ze Sztuczną Inteligencją (AI).

---

## Poznaj NAOKO STUDIO — tak było

Dynamiczny wzrost sprzedaży oznaczał jedno: rosnącą złożoność procesów, więcej kanałów, więcej zamówień i coraz więcej punktów, w których coś mogło pójść nie tak.

| Obszar | Problem |
|---|---|
| **Sprzedaż wielokanałowa** | Dane i zamówienia pojawiają się w różnych systemach |
| **Magazyn i fulfillment** | Trudność w utrzymaniu spójnych stanów i statusów |
| **Zwroty** | Procesy komplikują operacje i komunikację |
| **Kontrola biznesowa** | BOK, logistyka, analityka i księgowość pracują na różnych perspektywach danych |
| **Integracje** | Systemy nie wymieniają danych wystarczająco płynnie |

---

## Wyzwanie

### Systemy zaczęły przeszkadzać zamiast pomagać

**Symptomy kryzysu:**

- Dane w 7 miejscach — żadne nie jest wiarygodne.
- Zespół traci czas na ręczne uzgadnianie stanów.
- Błędy w komunikacji między działami.
- BOK nie widzi pełnej ścieżki zamówienia i zwrotów.

> Narzędzia, które miały pomagać w skalowaniu, stały się główną przeszkodą w operacjach.

---

## Wyzwanie

### Im większa sprzedaż, tym większy chaos

- **Zwroty** — niekontrolowany przepływ zwracanych towarów bez centralnej widoczności
- **Wiele kanałów** — Shopify, marketplace, hurtownie — każdy z własną logiką i stanem
- **Magazyn i Fulfillment** — stany magazynowe rozsynchronizowane między systemami
- **Obsługa klienta** — brak jednego widoku zamówienia = wolniejsza i błędna obsługa
- **Raporty** — dane rozproszone w arkuszach i systemach — brak jednego źródła prawdy o sprzedaży i marżach
- **Reklamacje** — ręczne śledzenie statusów reklamacji bez integracji z magazynem i obsługą klienta
- **Preordery** — zamówienia na produkty jeszcze niedostępne — trudne do śledzenia i realizacji
- **Różne systemy** — ERP, WMS, CRM, platforma sprzedażowa — każdy system mówi innym językiem
- …i inne

---

## Definicje

### Szybka mapa pojęć

- **OMS** — system do zarządzania zamówieniami; łączy kanały sprzedaży i kontroluje cały cykl życia zamówienia.
- **PIM** — system do zarządzania danymi produktowymi; utrzymuje spójne opisy, zdjęcia i parametry we wszystkich kanałach.
- **CRM** — system do zarządzania relacjami z klientami; porządkuje dane o kliencie i wspiera marketing oraz sprzedaż.
- **Feed produktowy** — plik z danymi o ofercie; automatycznie przesyła ofertę do marketplace'ów, reklam i porównywarek.
- **WMS** — system do zarządzania magazynem; usprawnia przyjęcia, kompletację, pakowanie i wysyłkę.
- **API** — interfejs komunikacji między systemami; pozwala systemom wymieniać dane automatycznie i w czasie rzeczywistym.
- **BI** — system analityczny i raportowy; zamienia dane z firmy w dashboardy i wspiera decyzje biznesowe.

---

## Decyzja strategiczna

### Nie dokładaliśmy kolejnych narzędzi. Zbudowaliśmy centrum dowodzenia.

Zamiast kolejnej integracji — architektura. Zamiast łatania dziur — jeden system, który stał się jedynym źródłem prawdy dla całej operacji.

> To była zmiana strategiczna, nie techniczna.

---

## Rozwiązanie

### Czym stał się System Zarządzania OMS?

**Integrator systemów:**

- Zamówienia
- Magazyn
- Zwroty i Reklamacje — `zwroty.naoko-store.pl`
- Marketplace
- Księgowość
- BOK
- Raporty

---

## Architektura

### Schemat architektury systemu

| Obszar | Moduł | Funkcja |
|---|---|---|
| Produkty | **Baza produktów** | Zarządza asortymentem. Synchronizacja. |
| Sprzedaż | **Baza zamówień** | Zbiera zamówienia ze wszystkich kanałów, statusy. |
| Posprzedaż | **Zwroty** | Obsługuje proces zwrotu od magazynu po korektę. |
| Posprzedaż | **Reklamacje** | Rejestrowanie i prowadzenie reklamacji. |
| Logistyka | **Magazyn** | Synchronizacja stanów magazynowych i dostępności produktów w kanałach. |
| Finanse | **Moduł księgowy** | Integruje z systemem księgowym. Pilnuje obiegu faktur, korekt. |
| Finanse | **Faktury / proformy** | Wystawianie dokumentów sprzedażowych. |
| Klienci | **Baza klientów** | Buduje kartotekę klienta z historii zamówień. |
| Techniczne | **Integracje** | Spina OMS z zewnętrznymi systemami i partnerami operacyjnymi. |
| Techniczne | **API** | Komunikacja między OMS a systemami zewnętrznymi. |
| Techniczne | **Automatyzacja** | Definiowanie reguł dla powtarzalnych działań. |
| Analityka | **Feed produktowy** | Automatyczne przygotowanie i dystrybucja oferty do zewnętrznych kanałów sprzedaży. |
| Logistyka | **Strefa BOK** | Kluczowe dane o zamówieniu w jednym miejscu. Szybka obsługa dokumentów, zwrotów, reklamacji i statusów. |

---

## Architektura

### Schemat połączeń — przykłady

| Kategoria | Narzędzia / Partnerzy |
|---|---|
| **Systemy sklepowe** | Shopify, Triso Shop, Selly.pl, Shoper |
| **Magazyny** | Integriser, W2S, fulfillment partnerzy |
| **Feed produktowy** | Meta Feed, Google Merchant Center, afiliacje, porównywarki |
| **BOK / Support** | Zowie, Zendesk, Thulium |
| **Zwroty** | Własny portal zwrotów, Wygodne Zwroty |
| **Automatyzacje** | EmailLabs |
| **Kurierzy** | DPD, InPost, DHL, GLS |
| **Księgowość / ERP** | Optima, Subiekt, wFirma |
| **Marketplace** | Allegro, Empik, Amazon |
| **BI / Raportowanie** | Google Cloud, Power BI |
| **Marketing / CRM** | GetResponse, Edron |

---

## Efekty

### Wyniki, które mówią same za siebie

- ✅ Większa kontrola
- ✅ Mniej błędów
- ✅ Szybsza obsługa
- ✅ Lepsza skalowalność

---

## Wniosek

### Nie każdy potrzebuje własnego OMS

### Ale każdy potrzebuje jednego centrum operacyjnego

> Niezależnie od skali pytanie nie brzmi: *„czy potrzebuję OMS?"*, ale: *„gdzie w moim biznesie dziś zbiegają się wszystkie informacje?"*

---

## Framework

### 3 poziomy dojrzałości operacyjnej

**Poziom 1 — Mały sklep**
SaaS + gotowe integracje.

**Poziom 2 — Rosnący sklep**
Centralizacja danych. iPaaS (Baselinker) lub lekki OMS. Jeden widok zamówień i magazynu. Priorytet: eliminacja chaosu.

**Poziom 3 — Skala**
Własny OMS lub dedykowana platforma. Pełna automatyzacja logiki biznesowej. System rośnie z firmą.

---

> ### Największym problemem e-commerce nie jest brak narzędzi.
> ### To brak jednego źródła prawdy.
