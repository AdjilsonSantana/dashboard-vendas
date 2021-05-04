import Chart from 'react-apexcharts';

// BarChart é uma função que tem um retorno, logo antes do retorno podemos inserir qualquer logica

function BarChart() {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        
        // Aprende-se a utilizar o Chart lendo a documentação da biblioteca.
        <Chart
            options= {{ ...options, xaxis: mockData.labels}}
            series= {mockData.series}
            type="bar"
            height= "240"
        />
    );
}

export default BarChart;