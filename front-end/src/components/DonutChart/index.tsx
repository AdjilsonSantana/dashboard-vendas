import Chart from 'react-apexcharts';

// BarChart é uma função que tem um retorno, logo antes do retorno podemos inserir qualquer logica
function DonuChart() {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (

         // Aprende-se a utilizar o Chart lendo a documentação da biblioteca.
         <Chart
         options= {{ ...options, labels: mockData.labels}}
         series= {mockData.series}
         type="donut"
         height= "240"
     />
    );
  }
  
  export default DonuChart;