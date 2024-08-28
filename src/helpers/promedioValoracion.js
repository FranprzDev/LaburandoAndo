export const promedioValoracion = (promedios) => {
    promedios.reduce((acumulador, valorActual) => Math.round((acumulador+valorActual)/promedios.length))
}