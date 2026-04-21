\# Formularis reactius



\## Validadors síncrons

El camp `termeCerca` utilitza dos validadors síncrons:

\- `minLength(2)`: obliga a escriure com a mínim 2 caràcters

\- `maxLength(50)`: limita la longitud màxima a 50 caràcters



\## Validador asíncron

S’ha implementat el validador asíncron `codiDisponibleValidator`, que simula una consulta a l’API amb un retard de 500 ms. Si la cerca no retorna cap element, el validador genera l’error:

\- `{ senseResultats: true }`



\## Comportament Debounce

La cerca automàtica es gestiona amb un `debounceTime(400)`, de manera que la consulta només s’emet quan l’usuari deixa d’escriure durant 400 ms, això evita peticions contínues i millora l’experiència d’usuari.

## FormArray de notes
Al component `preferits-panel` s’ha implementat un formulari dinàmic amb `FormArray` per gestionar múltiples notes per a cada element preferit.

### Funcionalitats
- afegir notes amb el botó `+`
- eliminar notes individualment amb el botó `x`
- validació de cada nota:
  - `required`
  - `minLength(3)`

Les notes es guarden conjuntament amb els preferits a `localStorage`
