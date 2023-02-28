# SpaceTag

Aplikacja internetowa do śledzenia elementów orbitalnych w 3D.

Strona internetowa wyświetla aktualne pozycje wybranych elementów orbitalnych,
które wyznaczane są przy użyciu danych w formacie
[TLE (Two-Line Element)](https://pl.wikipedia.org/wiki/TLE), uzyskiwanych z
systemu [CelesTrak](https://celestrak.org/). Aplikacja pozwala na dodanie
dowolnej ilości satelit, wraz z możliwością przypisania do każdego z nich
wybranego koloru znacznika oraz trajektorii. Możliwe jest wyświetlanie
przeszłych oraz przyszłych pozycji elementów poprzez wprowadzenie odpowiedniej
daty i czasu.

## Geneza projektu

W dniach 1-2 października 2022 roku odbyła się coroczna edycja globalnego
hackathonu
[NASA International Space Apps Challenge](https://www.spaceappschallenge.org/).
Organizatorem podkarpackiego wydarzenia
[Subcarpathian NASA Space Apps Challenge](https://2022.spaceappschallenge.org/locations/rzeszow/event)
było [Podkarpackie Centrum Innowacji](https://pcinn.org/). 26 drużyn zgromadziło
się w
[Centrum Sportu Akademickiego Politechniki Rzeszowskiej](https://csa.prz.edu.pl/),
aby w ciągu 28 godzin zrealizować projekt na wybrany temat, spośród 22 zadań
przygotowanych przez NASA.

Ośmiu reprezentantów
[Studenckiego Koła Naukowego Informatyków "KOD"](https://kod.prz.edu.pl/)
utworzyło dwa czteroosobowe zespoły. Drużyna
[SKNI KOD](https://2022.spaceappschallenge.org/challenges/2022-challenges/mars-habitat/teams/skni-kod/project)
podjął się zaprojektowania wielofunkcyjnego narzędzia z użyciem drukarki 3D,
natomiast zespół
[500 International Space Station](https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/teams/500-international-space-station/project)
zajął się implementacją aplikacji internetowej do śledzenia
[Międzynarodowej Stacji Kosmicznej](https://pl.wikipedia.org/wiki/Mi%C4%99dzynarodowa_Stacja_Kosmiczna)
w 3D.

Drużyny te odniosły sukces,
[zajmując kolejno I oraz III miejsce wśród podkarpackich zespołów](https://kod.prz.edu.pl/article/73-space-apps-hackathon-20222),
a także zdobywając liczne wyróżnienia w poszczególnych kategoriach. Z uwagi duży
potencjał pracy wykonanej w ciągu ponad doby przez zespół 500 ISS, zadecydowano
o kontynuuacji projektu w ramach działalności koła naukowego pod nową nazwą
SpaceTag. Jego nowym celem jest udoskonalenie aplikacji oraz implementacja
nowych funkcji umożliwiających śledzenie nie tylko Międzynarodowej Stacji
Kosmicznej, lecz dowolnych elementów orbitalnych.

## Zastosowane technologie

Projekt wyróżnia się zastosowaniem nowoczesnych, dopiero zysykujących
popularność rozwiązań do tworzenia aplikacji internetowych.

### [TypeScript](https://www.typescriptlang.org/)

Silnie typowany język, jakim jest TypeScript, posiada nieocenione zalety w
porównaniu z jego dynamicznie typowanym odpowiednikiem - JavaScript. Dzięki
zaawansowanemu wnioskowaniu kompilatora, potencjalne błędy są wykrywane już
podczas wprowadzania zmian w pliku, a edytor jest w stanie automatycznie
uzupełniać właściwości obiektów czy wyświetlać dokumentację dotyczącą użytych
funkcji oraz zmiennych. Zalety te w szczególności ułatwiają pracę zespołową oraz
wdrażanie nowych osób do projektu.

### [React](https://beta.reactjs.org/)

React to obecnie najpopularniejsza biblioteka do tworzenia interaktywnych
interfejsów użytkownika. Pozwala na implementację widoków w sposób deklaratywny,
którego kod jest prostszy w zapisie i bardziej przewidywalny. Umożliwia
tworzenie komponentów zarządzających swoim własnym stanem, oraz składanie ich w
większą całość. React stawia na minimalizm, skupiając się wyłącznie na
renderowaniu strony - resztę pozostawia społeczności, dzięki czemu w jego
ekosystemie ciągle powstają innowacyjne rozwiązania.

### [Next.js](https://nextjs.org/)

Next.js to framework pozwalający na generowanie aplikacji internetowych z
użyciem biblioteki React po stronie serwera - zarówno statycznie jak i na
żądanie. Umożliwia tworzenie pełnoprawnego API w architekturze serverless.
Posiada wiele funkcji usprawniających działanie aplikacji, w tym optymalizację
obrazów, czy czcionek.

### [Tailwind CSS](https://tailwindcss.com/)

Tailwind CSS to biblioteka ułatwiająca stylowanie nowoczesnych aplikacji.
Zastosowanie atomowego podejścia oraz generowanie wyłącznie użytych w kodzie
klas CSS skutkuje szybszym ładowaniem strony. Tailwind oferuje również możliwość
stworzenia własnego design systemu, wymuszając konsekwentny kod całym projekcie.

### [tRPC](https://trpc.io/)

tRPC umożliwia tworzenie bezpiecznie typowanych API bez generacji kodu,
wykorzystując w pełni potencjał wnioskowania kompilatora TypeScript. Jakakolwiek
zmiana w kodzie po stronie serwera skutkuje natychmiastowym wyświetleniem błędu
w edytorze po stronie klienta. Oferuje również w pełni bezpiecznie typowaną
implementację popularnej biblioteki do zarządzania asynchronicznym stanem
[TanStack Query](https://tanstack.com/query/v4), ułatwiając pobieranie i
kontrolowanie pobranych z API danych.

### [Three.js](https://threejs.org/)

Three.js to popularna, prosta w użyciu, niewielka oraz wieloplatformowa
biblioteka do grafiki 3D dla języka JavaScript.
[React Three Fiber](https://docs.pmnd.rs/react-three-fiber) natomiast umożliwia
tworzenie scen w Three.js w sposób deklaratywny, z użyciem Reacta jako
renderera.

## Autorzy

### 500 International Space Station

Twórcy projektu, uczestnicy hackathonu.

- Konrad Bochenek ([@Kazan1520](https://github.com/Kazan1520))
- Mariusz Dąbrowski ([@marioooo0o](https://github.com/marioooo0o)) - Project
  Leader
- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev))
- Mateusz Herda ([@mherda64](https://github.com/mherda64))

### SpaceTag

Zespół kontynuujący rozwój projektu w ramach działaności koła naukowego.

- Adrian Kosior ([@Nefraix](https://github.com/Nefraix))
- Cyprian Rejman ([@CyprianRejman](https://github.com/CyprianRejman))
- Dawid Pindara ([@Noname04](https://github.com/Noname04))
- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev)) - Project
  Leader
- Michał Partyka ([@Heryin](https://github.com/Heryin))
