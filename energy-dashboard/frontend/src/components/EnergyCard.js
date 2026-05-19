function EnergyCard({
siteName,
kwh,
co2,
temperature
}){

return(

<div
style={{
border:"1px solid gray",
padding:"20px",
margin:"10px",
borderRadius:"10px"
}}
>

<h2>{siteName}</h2>

<p>Energy: {kwh} kWh</p>

<p>CO₂: {co2} kg</p>

<p>Temperature: {temperature}°C</p>

</div>

)

}

export default EnergyCard;