export const promedioValoracion = (promedios) => {
    return promedios.map((valores) => {
        const suma = valores.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
        return Math.round(suma/valores.length)
    })
}

export const promedioValoracionDetalle = (reviews) => {
    const suma = reviews.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
    return Math.round(suma/reviews.length)
}