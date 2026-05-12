# TasquesApp - Alex

## Descripció del projecte

TasquesApp és una aplicació web desenvolupada amb Angular que permet gestionar tasques personals. L'objectiu del projecte és crear una eina senzilla per organtitzar activitats, afegir noves tasques i mantener un control de les pendents.

## Mapa de rutes

| Path | Component | Accés |
|---|---|---|
| / | Redirecció a /cataleg | Públic |
| /cataleg | CatalegComponent | Públic |
| /cerca | CercaComponent | Públic |
| /detall/:id | DetallComponent | Públic |
| /preferits | PreferitsComponent | Privat |
| /login | LoginComponent | Públic |
| ** | Redirecció a /cataleg | Públic |

## Instruccions d'execució en local

```bash
git clone https://github.com/Al3XBP/ioc-angular-TasquesApp-Alex.git
cd ioc-angular-TasquesApp-Alex
npm install
ng serve