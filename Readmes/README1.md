## Elemento:
Las etiquetas por defecto son cajas que tienen limitaciones que no podemos ver a menos que les apliquemos un borde, pero estas cajas son diferentes al contenido que está dentro de ellas. Literalmente, se guardan en esas cajas. Un ejemplo es que podemos guardar una imagen dentro de la etiqueta, es decir, dentro del elemento, y a ambos les podemos dar características diferentes en cuanto a tamaño, color, fuente, etc.

## Contenido:
Un contenido, en el caso de ejemplo como una imagen, también se convierte en un elemento dentro de otro elemento, en este caso, una etiqueta que tiene dentro una imagen, a los cuales les puedo aplicar diferentes reglas.

## Width:
Es el tamaño que le aplico como regla a un elemento o a su contenido.

## Border:
Es el borde que le aplico a un elemento o al contenido de los cuatro lados de su caja. Este viene acompañado de diferentes estilos y no puede ir solo. Los estilos son:

Solid (sólido): Crea un borde sólido y continuo.
Dotted (punteado): Crea un borde punteado.
Dashed (discontinuo): Crea un borde discontinuo.
Double (doble): Crea un borde doble.
None (ninguno): No se muestra ningún borde.

## Margin:
El margen es el tamaño exterior que deseo que tenga el elemento como caja, hacia fuera del elemento desde su borde.

## Padding:
El relleno (padding) es el espacio interior que deseo que tenga el elemento desde el borde hacia el interior con relación a su contenido.

Tanto el margen como el relleno se le agregan al elemento como tamaño total del mismo elemento, por lo cual pueden sobrescribir su tamaño dependiendo del padre, es decir, si están contenidos dentro de otro elemento que no pueden desbordar, en tal caso sobrescriben el elemento y lo adecuan para que no sea más grande que el padre.

Podemos visualizar una línea invisible que se separa a sí misma desde la mitad. La de la derecha es la exterior y la de la izquierda es la interior.

El relleno y el margen vienen con valores por defecto dependiendo del navegador, que tiene diferentes valores para los elementos que los visualiza. Es por eso que es buena práctica ponerlos en cero. 