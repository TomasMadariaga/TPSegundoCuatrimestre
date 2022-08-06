var carrito = document.querySelector('.carrito');
var precio = document.querySelector('.precio');
var btnCarrito = document.querySelector('.boton-carrito');
var btnDescuento = document.querySelector('.boton-descuento');
var lista = document.querySelector('.lista');
var oferta = document.querySelector('.oferta')
var productos = [];
var precios = [];


var agregarAlCarrito = function () {
  productos.push(carrito.value);
  precios.push(Number(precio.value));
  lista.innerHTML += "<li>".concat(carrito.value, ": $").concat(precio.value, "</li>");
};

btnCarrito.addEventListener('click', agregarAlCarrito);

var calcularPrecio = function () {
  let suma = 0;
  for (let i = 0; i < precios.length; i++) {
    suma += precios[i]
  };
  if (suma >= 2500) {
    oferta.innerHTML = `Usted tiene un descuento del 10%, el total es $${suma * 0.9}`
  } else {
    oferta.innerHTML = 'Con su compra de 2500 puede acceder a un descuento'
  };
};

btnDescuento.addEventListener('click', calcularPrecio);