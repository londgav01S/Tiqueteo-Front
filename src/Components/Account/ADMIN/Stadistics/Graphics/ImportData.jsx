//TODO: traer las estadisticas del back para generar los graficos
export const lineChatData = {
    labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio'],
    datasets: [
        {
            label: 'Usuarios por persona',
            data: [10,13, 4, 9, 5, 4, 10],
            borderColor: 'rgb(0,10,28)',
            backgroundColor: [
                'rgb(228,0,0)',
                'rgb(0,238,238)',
                'rgb(0,238,0)',
                'rgb(238,238,0)',
                'rgb(238,0,238)',
                'rgb(0,0,238)',
                'rgb(135,0,204)',
            ],
            hoverOffset: 1,
        }
    ]
};