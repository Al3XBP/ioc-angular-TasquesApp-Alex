\# Serveis



\## ElementService

Servei encarregat de la comunicació HTTP amb l’API mock



\### Endpoints utilitzats

\- `GET /elements?popular=true` — carrega elements populars

\- `GET /elements?nom\_like=terme` — cerca elements pel nom



\### Mètodes

\- `obtenirPopulars()` — carrega els elements populars

\- `cercar(terme)` — cerca elements pel nom



\### Estats

\- `elements` — llista d’elements carregats

\- `carregant` — indica si hi ha una petició en curs

\- `error` — conté un missatge si s’ha produït un error



\## PreferitsService

Servei encarregat de gestionar els elements preferits amb persistència a `localStorage`



\### Funcionalitats

\- carregar preferits automàticament

\- afegir i eliminar preferits

\- comprovar si un element és preferit

\- actualitzar notes dels preferits

\- mantenir el total amb `computed`

