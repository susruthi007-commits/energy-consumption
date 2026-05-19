import EnergyCard from "../components/EnergyCard";

function Dashboard() {

const sampleData=[

{
site:"Plant A",
kwh:45,
co2:18.9,
temp:31
},

{
site:"Plant B",
kwh:60,
co2:22,
temp:28
}

];

return(

<div>

<h1>Energy Dashboard</h1>

{
sampleData.map((item,index)=>(

<EnergyCard

key={index}

siteName={item.site}

kwh={item.kwh}

co2={item.co2}

temperature={item.temp}

/>

))
}

</div>

)

}

export default Dashboard;