\# Formularis reactius



\## Validadors síncrons

El camp `termeCerca` utilitza dos validadors síncrons:

\- `minLength(2)`: obliga a escriure com a mínim 2 caràcters.

\- `maxLength(50)`: limita la longitud màxima a 50 caràcters.



\## Validador asíncron

S’ha implementat el validador asíncron `codiDisponibleValidator`, que simula una consulta a l’API amb un retard de 500 ms. Si la cerca no retorna cap element, el validador genera l’error:

\- `{ senseResultats: true }`



\## Comportament Debounce

La cerca automàtica es gestiona amb un `debounceTime(400)`, de manera que la consulta només s’emet quan l’usuari deixa d’escriure durant 400 ms. Això evita peticions contínues i millora l’experiència d’usuari.

