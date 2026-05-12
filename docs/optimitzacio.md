\# Optimització



\## Components amb ChangeDetectionStrategy.OnPush



S'ha aplicat `ChangeDetectionStrategy.OnPush` als components següents:



| Component | Motiu |

|---|---|

| TargetaElementComponent | Component que rep dades mitjançant `@Input()`. Amb OnPush es redueixen comprovacions innecessàries de detecció de canvis. |

| DetallComponent | Component que mostra informació basada en el paràmetre de la ruta i no necessita actualitzacions contínues. |



L'estratègia `OnPush` permet millorar el rendiment perquè Angular només actualitza el component quan canvia la referència de les dades d'entrada o es produeix un esdeveniment rellevant.



\## Virtualització de llistes amb Angular CDK



S'ha implementat virtualització amb `CdkVirtualScrollViewport` del paquet `@angular/cdk/scrolling`.



Configuració aplicada:



| Propietat | Valor |

|---|---|

| Nombre d'elements | 50 |

| itemSize | 110 |

| Alçada del viewport | 80vh |



S'ha utilitzat la directiva `\*cdkVirtualFor` en lloc de `\*ngFor` per renderitzar únicament els elements visibles dins del viewport, millorant així el rendiment quan la llista és gran.

