\# Navegació



\## Mapa de rutes



| Path | Component | Accés |

|---|---|---|

| / | Redirecció a /cataleg | Públic |

| /cataleg | CatalegComponent | Públic |

| /cerca | CercaComponent | Públic |

| /detall/:id | DetallComponent | Públic |

| /preferits | PreferitsComponent | Públic |

| /login | LoginComponent | Públic |

| \*\* | Redirecció a /cataleg | Públic |



\## Configuració



Les rutes s'han definit al fitxer `src/app/app.routes.ts` mitjançant una constant `routes` de tipus `Routes`.



La configuració de navegació s'ha activat a `app.config.ts` amb `provideRouter(routes)`.



El component principal de l'aplicació utilitza `<router-outlet></router-outlet>` per poder carregar les diferents vistes segons la ruta activa.



També s'ha creat un component de navegació amb enllaços `routerLink` i l'indicador visual `routerLinkActive` per destacar la ruta actual.

