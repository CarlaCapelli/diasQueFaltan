let arreglo: number[] = new Array(12);
arreglo = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let anio: number = Number(prompt("de que año quiere averiguar?"));

let mes: number = Number(prompt("desde que mes quiere ?"));
while (mes < 1 || mes > 12) {
  mes = Number(prompt("desde que mes quiere averiguar?"));
}

let dia = Number(prompt("desde que dia quiere averiguar?"));
if (
  mes === 1 ||
  mes === 3 ||
  mes === 5 ||
  mes === 7 ||
  mes === 8 ||
  mes === 10 ||
  mes === 12
) {
  while (dia < 1 || dia > 31) {
    dia = Number(prompt("desde que dia del 1 al 31 quiere averiguar"));
  }
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
  while (dia < 1 || dia > 30) {
    dia = Number(prompt("desde que dia del 1 al 31 quiere averiguar"));
  }
} else if (mes === 2) {
  if (anio % 4 === 0 && anio % 100 !== 0) {
    while (dia < 1 || dia > 29) {
      dia = Number(prompt("desde que dia del 1 al 29 quiere averiguar"));
    }
  } else {
    while (dia < 1 || dia > 28) {
      dia = Number(prompt("desde que dia del 1 al 28 quiere averiguar"));
    }
  }
}

function sumar() {
  if (anio % 4 === 0 && anio % 100 !== 0) {
    arreglo[1] = 29;
  }
  let cantidadTotal: number = 0;
  let i: number = 0;
  for (i = mes - 1; i < 12; i++) {
    cantidadTotal = cantidadTotal + arreglo[i];
  }
  console.log(arreglo);
  let diasTotal: number = cantidadTotal - dia;
  console.log("faltan ", diasTotal, "dias para que termine el año");
}
sumar();
