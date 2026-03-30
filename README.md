# Mini LAB | JS Map, Filter & Reduce — Intermedio (TDD con Jasmine)

## Introduccion

Ya dominas lo basico de `.map()`, `.filter()` y `.reduce()`. Ahora toca subir el nivel: vamos a trabajar con **arrays de objetos**, **transformaciones multi-paso** y **combinaciones de metodos**. Estos ejercicios te preparan para el lab avanzado y para problemas reales que encontraras en cualquier proyecto.

```
 ________________________________________
/ Ya sabes map, filter y reduce.         \
| Ahora toca combinarlos como un         |
\ verdadero ironhacker.                  /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

## Objetivos de aprendizaje

- Usar `.map()` para transformar arrays de objetos (no solo primitivos)
- Usar `.filter()` con condiciones sobre propiedades de objetos y busquedas parciales
- Usar `.reduce()` para construir objetos, calcular promedios y encontrar maximos
- Encadenar dos o mas metodos de array para resolver problemas complejos
- Practicar TDD: escribir codigo hasta que los tests pasen

## Requisitos

- Haber completado el mini-lab basico de Map, Filter & Reduce
- Conocer la sintaxis de objetos en JavaScript
- Entender `.split()`, `.join()`, `.toUpperCase()`, `.toLowerCase()`, `.includes()`

## Setup

1. Haz fork de este repo y clonalo en tu maquina
2. Abre `index.html` en el navegador — veras Jasmine con todos los tests en **rojo**
3. Trabaja en `src/functions.js` completando las funciones
4. Cada vez que guardes, recarga el navegador para ver si tus tests pasan

> :bulb: **Consejo:** no intentes resolver todas a la vez. Ve iteracion por iteracion.

> :warning: **Importante:** no modifiques los tests. Si un test falla, el problema esta en tu funcion, no en el test.

## Estructura

```
mini-lab-js-map-filter-reduce-intermediate/
├── index.html              ← SpecRunner (abre esto en el navegador)
├── src/
│   └── functions.js        ← Aqui escribes tu codigo
└── tests/
    └── functions.spec.js   ← Tests (NO modificar)
```

## Iteraciones

### Iteracion 1 — `.map()` intermedio

Ya sabes que `.map()` transforma cada elemento de un array. Ahora vamos a transformar **objetos** y crear **nuevas propiedades**.

```javascript
var result = array.map(function (element) {
  return // ... transformacion del elemento
});
```

Completa: `celsiusToFahrenheit`, `addFullName`, `getAcronyms`, `applyDiscount`

<details>
<summary>Pistas</summary>

- **celsiusToFahrenheit:** `.map()` con la formula `temp * 9 / 5 + 32`
- **addFullName:** `.map()` creando un nuevo objeto con spread (`Object.assign` o copia manual) y anadiendo `fullName: firstName + " " + lastName`. Recuerda: no modifiques el objeto original
- **getAcronyms:** `.map()` sobre las frases, dentro `.split(" ")` para obtener las palabras, luego `.map()` para sacar la primera letra, `.join("")` y `.toUpperCase()`
- **applyDiscount:** `.map()` creando un nuevo objeto con `originalPrice` igual al precio original y `price` con el descuento aplicado: `price * (1 - discount / 100)`

</details>

---

### Iteracion 2 — `.filter()` intermedio

`.filter()` devuelve un nuevo array con los elementos que cumplen una condicion. Ahora vamos a filtrar con condiciones mas interesantes: propiedades de objetos, busquedas parciales y rangos.

```javascript
var result = array.filter(function (element) {
  return // ... condicion booleana
});
```

Completa: `getInStock`, `getUniqueValues`, `searchByName`, `getInRange`

<details>
<summary>Pistas</summary>

- **getInStock:** `.filter()` con `product.stock > 0`
- **getUniqueValues:** `.filter()` comparando `array.indexOf(element) === index` — si la primera posicion donde aparece el elemento es la posicion actual, es unico
- **searchByName:** `.filter()` con `.toLowerCase().includes(query.toLowerCase())`
- **getInRange:** `.filter()` con `num >= min && num <= max`

</details>

---

### Iteracion 3 — `.reduce()` intermedio

`.reduce()` acumula todos los valores de un array en uno solo. Pero ese "uno solo" puede ser un numero, un string, un objeto, o incluso otro array. Aqui practicaras los tres primeros.

```javascript
var result = array.reduce(function (acc, element) {
  return // ... nuevo valor del acumulador
}, valorInicial);
```

Completa: `getLongestString`, `buildObject`, `calculateAverage`, `mergeObjects`

<details>
<summary>Pistas</summary>

- **getLongestString:** compara `acc.length` con `element.length`, devuelve el mas largo. Puedes usar `reduce` sin valor inicial (empieza con el primer elemento)
- **buildObject:** reduce sobre el array de keys, usando el index para acceder al valor correspondiente en values: `keys.reduce(function (acc, key, index) { ... }, {})`
- **calculateAverage:** primero comprueba si el array esta vacio (devuelve 0). Si no, usa `.reduce()` para sumar y divide por `.length`
- **mergeObjects:** reduce con valor inicial `{}`, usa `Object.assign(acc, obj)` o copia las propiedades manualmente

</details>

---

### Iteracion 4 — Combinando metodos

Ahora viene lo divertido: encadenar `.filter()`, `.map()` y `.reduce()` para resolver problemas en un solo flujo. Piensa siempre en los pasos: primero **seleccionar** (filter), luego **transformar** (map), y finalmente **acumular** (reduce).

```javascript
var result = array
  .filter(function (el) { return /* seleccionar */ })
  .map(function (el) { return /* transformar */ })
  .reduce(function (acc, el) { return /* acumular */ }, valorInicial);
```

Completa: `getTopStudents`, `getTotalCartPrice`, `getWordFrequencies`

<details>
<summary>Pistas</summary>

- **getTopStudents:** `.filter()` por `grade >= minGrade`, luego `.map()` formateando como `lastName.toUpperCase() + ", " + firstName`
- **getTotalCartPrice:** `.map()` para calcular `price * quantity` de cada item, luego `.reduce()` para sumar. O directamente `.reduce()` acumulando `acc + item.price * item.quantity`
- **getWordFrequencies:** `.split(" ")` para separar en palabras → `.map()` con `.toLowerCase()` → `.reduce()` para contar en un objeto `{ word: count }` → `Object.keys()` para convertir a array de `{ word, count }` → `.sort()` por count descendente. Cuidado con el string vacio: `.split(" ")` devuelve `[""]`, asi que filtra primero

</details>

---

## Resultado esperado

Cuando todo este completo, Jasmine mostrara: **58 specs, 0 failures**

Happy coding! :heart:
