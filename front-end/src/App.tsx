import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonuChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar/>

      <div className="container">

        <h1 className="text-primary">Dashboard de Vendas</h1>

        <div className="row py-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Percentagem de sucesso (%)</h5>
            <BarChart/>
          </div>
          
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Percentagem de sucesso (%)</h5>
            <DonuChart/>
          </div>
        </div>


        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        
        <DataTable/>
      </div>
      
      <Footer/>
    </>
   
  );
}

export default App;
