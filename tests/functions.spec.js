// =============================================================================
// Tests — Mini LAB | Map, Filter & Reduce — Intermedio
// =============================================================================

// =============================================================================
// ITERACION 1 — .map() intermedio
// =============================================================================

describe("Iteracion 1 — .map() intermedio", function () {

  // ---------------------------------------------------------------------------
  // celsiusToFahrenheit
  // ---------------------------------------------------------------------------
  describe("celsiusToFahrenheit()", function () {
    it("deberia convertir temperaturas basicas correctamente", function () {
      expect(celsiusToFahrenheit([0, 100, 37])).toEqual([32, 212, 98.6]);
    });

    it("deberia funcionar con temperaturas negativas", function () {
      expect(celsiusToFahrenheit([-40, -10])).toEqual([-40, 14]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(celsiusToFahrenheit([])).toEqual([]);
    });
  });

  // ---------------------------------------------------------------------------
  // addFullName
  // ---------------------------------------------------------------------------
  describe("addFullName()", function () {
    it("deberia anadir fullName a cada persona", function () {
      var people = [
        { firstName: "Ana", lastName: "Garcia" },
        { firstName: "Luis", lastName: "Lopez" }
      ];
      expect(addFullName(people)).toEqual([
        { firstName: "Ana", lastName: "Garcia", fullName: "Ana Garcia" },
        { firstName: "Luis", lastName: "Lopez", fullName: "Luis Lopez" }
      ]);
    });

    it("deberia funcionar con una sola persona", function () {
      var people = [{ firstName: "Marta", lastName: "Ruiz" }];
      expect(addFullName(people)).toEqual([
        { firstName: "Marta", lastName: "Ruiz", fullName: "Marta Ruiz" }
      ]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(addFullName([])).toEqual([]);
    });

    it("no deberia modificar el array original", function () {
      var people = [{ firstName: "Ana", lastName: "Garcia" }];
      var result = addFullName(people);
      expect(result).not.toBe(people);
      expect(people[0].fullName).toBeUndefined();
    });
  });

  // ---------------------------------------------------------------------------
  // getAcronyms
  // ---------------------------------------------------------------------------
  describe("getAcronyms()", function () {
    it("deberia generar acronimos en mayusculas", function () {
      expect(getAcronyms(["as soon as possible", "frequently asked questions"]))
        .toEqual(["ASAP", "FAQ"]);
    });

    it("deberia funcionar con frases de una sola palabra", function () {
      expect(getAcronyms(["javascript"])).toEqual(["J"]);
    });

    it("deberia funcionar con frases de muchas palabras", function () {
      expect(getAcronyms(["do it yourself", "thank god it is friday"]))
        .toEqual(["DIY", "TGIIF"]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(getAcronyms([])).toEqual([]);
    });
  });

  // ---------------------------------------------------------------------------
  // applyDiscount
  // ---------------------------------------------------------------------------
  describe("applyDiscount()", function () {
    it("deberia aplicar el descuento y guardar el precio original", function () {
      var products = [
        { name: "Libro", price: 20 },
        { name: "Cafe", price: 10 }
      ];
      expect(applyDiscount(products, 10)).toEqual([
        { name: "Libro", price: 18, originalPrice: 20 },
        { name: "Cafe", price: 9, originalPrice: 10 }
      ]);
    });

    it("deberia funcionar con descuento del 50%", function () {
      var products = [{ name: "Camiseta", price: 30 }];
      expect(applyDiscount(products, 50)).toEqual([
        { name: "Camiseta", price: 15, originalPrice: 30 }
      ]);
    });

    it("deberia funcionar con descuento del 0%", function () {
      var products = [{ name: "Agua", price: 1 }];
      expect(applyDiscount(products, 0)).toEqual([
        { name: "Agua", price: 1, originalPrice: 1 }
      ]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(applyDiscount([], 20)).toEqual([]);
    });
  });
});


// =============================================================================
// ITERACION 2 — .filter() intermedio
// =============================================================================

describe("Iteracion 2 — .filter() intermedio", function () {

  // ---------------------------------------------------------------------------
  // getInStock
  // ---------------------------------------------------------------------------
  describe("getInStock()", function () {
    it("deberia devolver solo productos con stock mayor que 0", function () {
      var products = [
        { name: "Teclado", stock: 5 },
        { name: "Raton", stock: 0 },
        { name: "Monitor", stock: 3 }
      ];
      expect(getInStock(products)).toEqual([
        { name: "Teclado", stock: 5 },
        { name: "Monitor", stock: 3 }
      ]);
    });

    it("deberia devolver un array vacio si ningun producto tiene stock", function () {
      var products = [
        { name: "A", stock: 0 },
        { name: "B", stock: 0 }
      ];
      expect(getInStock(products)).toEqual([]);
    });

    it("deberia devolver todos si todos tienen stock", function () {
      var products = [
        { name: "X", stock: 10 },
        { name: "Y", stock: 1 }
      ];
      expect(getInStock(products)).toEqual([
        { name: "X", stock: 10 },
        { name: "Y", stock: 1 }
      ]);
    });
  });

  // ---------------------------------------------------------------------------
  // getUniqueValues
  // ---------------------------------------------------------------------------
  describe("getUniqueValues()", function () {
    it("deberia eliminar duplicados numericos", function () {
      expect(getUniqueValues([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it("deberia eliminar duplicados de strings", function () {
      expect(getUniqueValues(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
    });

    it("deberia devolver el mismo array si no hay duplicados", function () {
      expect(getUniqueValues([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(getUniqueValues([])).toEqual([]);
    });
  });

  // ---------------------------------------------------------------------------
  // searchByName
  // ---------------------------------------------------------------------------
  describe("searchByName()", function () {
    it("deberia filtrar por nombre de forma case insensitive", function () {
      var items = [
        { name: "JavaScript" },
        { name: "Java" },
        { name: "Python" }
      ];
      expect(searchByName(items, "java")).toEqual([
        { name: "JavaScript" },
        { name: "Java" }
      ]);
    });

    it("deberia devolver un array vacio si no hay coincidencias", function () {
      var items = [
        { name: "React" },
        { name: "Angular" }
      ];
      expect(searchByName(items, "vue")).toEqual([]);
    });

    it("deberia funcionar con query en mayusculas", function () {
      var items = [
        { name: "express" },
        { name: "Express.js" }
      ];
      expect(searchByName(items, "EXPRESS")).toEqual([
        { name: "express" },
        { name: "Express.js" }
      ]);
    });

    it("deberia devolver todos si el query coincide parcialmente con todos", function () {
      var items = [
        { name: "Node.js" },
        { name: "Nodemon" }
      ];
      expect(searchByName(items, "node")).toEqual([
        { name: "Node.js" },
        { name: "Nodemon" }
      ]);
    });
  });

  // ---------------------------------------------------------------------------
  // getInRange
  // ---------------------------------------------------------------------------
  describe("getInRange()", function () {
    it("deberia devolver numeros dentro del rango (inclusive)", function () {
      expect(getInRange([5, 10, 15, 20, 25], 10, 20)).toEqual([10, 15, 20]);
    });

    it("deberia incluir los extremos del rango", function () {
      expect(getInRange([1, 2, 3, 4, 5], 2, 4)).toEqual([2, 3, 4]);
    });

    it("deberia devolver un array vacio si ningun numero esta en el rango", function () {
      expect(getInRange([1, 2, 3], 10, 20)).toEqual([]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(getInRange([], 0, 100)).toEqual([]);
    });
  });
});


// =============================================================================
// ITERACION 3 — .reduce() intermedio
// =============================================================================

describe("Iteracion 3 — .reduce() intermedio", function () {

  // ---------------------------------------------------------------------------
  // getLongestString
  // ---------------------------------------------------------------------------
  describe("getLongestString()", function () {
    it("deberia devolver el string mas largo", function () {
      expect(getLongestString(["sol", "estrella", "luna"])).toBe("estrella");
    });

    it("deberia devolver el primero si hay empate en longitud", function () {
      expect(getLongestString(["ab", "cd", "ef"])).toBe("ab");
    });

    it("deberia funcionar con un solo string", function () {
      expect(getLongestString(["unico"])).toBe("unico");
    });

    it("deberia funcionar con strings vacios", function () {
      expect(getLongestString(["", "hola", ""])).toBe("hola");
    });
  });

  // ---------------------------------------------------------------------------
  // buildObject
  // ---------------------------------------------------------------------------
  describe("buildObject()", function () {
    it("deberia combinar dos arrays en un objeto", function () {
      expect(buildObject(["name", "age"], ["Ana", 25])).toEqual({ name: "Ana", age: 25 });
    });

    it("deberia funcionar con tres pares clave-valor", function () {
      expect(buildObject(["a", "b", "c"], [1, 2, 3])).toEqual({ a: 1, b: 2, c: 3 });
    });

    it("deberia devolver un objeto vacio si los arrays estan vacios", function () {
      expect(buildObject([], [])).toEqual({});
    });
  });

  // ---------------------------------------------------------------------------
  // calculateAverage
  // ---------------------------------------------------------------------------
  describe("calculateAverage()", function () {
    it("deberia calcular la media correctamente", function () {
      expect(calculateAverage([10, 20, 30])).toBe(20);
    });

    it("deberia funcionar con decimales", function () {
      expect(calculateAverage([1, 2, 3, 4])).toBe(2.5);
    });

    it("deberia devolver 0 para un array vacio", function () {
      expect(calculateAverage([])).toBe(0);
    });

    it("deberia funcionar con un solo numero", function () {
      expect(calculateAverage([42])).toBe(42);
    });
  });

  // ---------------------------------------------------------------------------
  // mergeObjects
  // ---------------------------------------------------------------------------
  describe("mergeObjects()", function () {
    it("deberia fusionar multiples objetos en uno", function () {
      expect(mergeObjects([{ a: 1 }, { b: 2 }, { c: 3 }])).toEqual({ a: 1, b: 2, c: 3 });
    });

    it("deberia sobreescribir claves duplicadas con el ultimo valor", function () {
      expect(mergeObjects([{ a: 1 }, { b: 2 }, { a: 3, c: 4 }])).toEqual({ a: 3, b: 2, c: 4 });
    });

    it("deberia devolver un objeto vacio si recibe un array vacio", function () {
      expect(mergeObjects([])).toEqual({});
    });

    it("deberia funcionar con un solo objeto", function () {
      expect(mergeObjects([{ x: 10, y: 20 }])).toEqual({ x: 10, y: 20 });
    });
  });
});


// =============================================================================
// ITERACION 4 — Combinando metodos
// =============================================================================

describe("Iteracion 4 — Combinando metodos", function () {

  // ---------------------------------------------------------------------------
  // getTopStudents
  // ---------------------------------------------------------------------------
  describe("getTopStudents()", function () {
    it("deberia filtrar y formatear nombres como APELLIDO, Nombre", function () {
      var students = [
        { firstName: "Ana", lastName: "Garcia", grade: 9 },
        { firstName: "Luis", lastName: "Lopez", grade: 4 },
        { firstName: "Marta", lastName: "Ruiz", grade: 7 }
      ];
      expect(getTopStudents(students, 5)).toEqual(["GARCIA, Ana", "RUIZ, Marta"]);
    });

    it("deberia devolver un array vacio si nadie cumple la nota minima", function () {
      var students = [
        { firstName: "Ana", lastName: "Garcia", grade: 3 },
        { firstName: "Luis", lastName: "Lopez", grade: 2 }
      ];
      expect(getTopStudents(students, 5)).toEqual([]);
    });

    it("deberia incluir estudiantes con exactamente la nota minima", function () {
      var students = [
        { firstName: "Pedro", lastName: "Martinez", grade: 5 }
      ];
      expect(getTopStudents(students, 5)).toEqual(["MARTINEZ, Pedro"]);
    });

    it("deberia devolver un array vacio si recibe un array vacio", function () {
      expect(getTopStudents([], 5)).toEqual([]);
    });
  });

  // ---------------------------------------------------------------------------
  // getTotalCartPrice
  // ---------------------------------------------------------------------------
  describe("getTotalCartPrice()", function () {
    it("deberia calcular el precio total del carrito", function () {
      var cart = [
        { name: "Libro", price: 10, quantity: 2 },
        { name: "Pen", price: 1, quantity: 5 }
      ];
      expect(getTotalCartPrice(cart)).toBe(25);
    });

    it("deberia funcionar con un solo producto", function () {
      var cart = [{ name: "Laptop", price: 999, quantity: 1 }];
      expect(getTotalCartPrice(cart)).toBe(999);
    });

    it("deberia devolver 0 para un carrito vacio", function () {
      expect(getTotalCartPrice([])).toBe(0);
    });

    it("deberia funcionar con cantidades altas", function () {
      var cart = [
        { name: "Tornillo", price: 0.5, quantity: 100 },
        { name: "Tuerca", price: 0.3, quantity: 100 }
      ];
      expect(getTotalCartPrice(cart)).toBe(80);
    });
  });

  // ---------------------------------------------------------------------------
  // getWordFrequencies
  // ---------------------------------------------------------------------------
  describe("getWordFrequencies()", function () {
    it("deberia contar frecuencias y ordenar por count desc", function () {
      expect(getWordFrequencies("hola mundo hola")).toEqual([
        { word: "hola", count: 2 },
        { word: "mundo", count: 1 }
      ]);
    });

    it("deberia ser case insensitive", function () {
      expect(getWordFrequencies("Hola HOLA hola")).toEqual([
        { word: "hola", count: 3 }
      ]);
    });

    it("deberia funcionar con muchas palabras distintas", function () {
      expect(getWordFrequencies("a b a b a")).toEqual([
        { word: "a", count: 3 },
        { word: "b", count: 2 }
      ]);
    });

    it("deberia funcionar con una sola palabra", function () {
      expect(getWordFrequencies("ironhack")).toEqual([
        { word: "ironhack", count: 1 }
      ]);
    });

    it("deberia devolver un array vacio si recibe un string vacio", function () {
      expect(getWordFrequencies("")).toEqual([]);
    });
  });
});
