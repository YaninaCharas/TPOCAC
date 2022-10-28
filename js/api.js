const fetchApp = (provincia) =>{
    return fetch(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${provincia}`)
    .then ( response => response.json())
    .catch ( error => console.log(error))
}

const $provincia = document.getElementById(`provincia`);
const $form = document.querySelector(`form`);
const $submit = document.querySelector(`#submit`);

$form.addEventListener(`submit`, async function(event)
{
    event.preventDefault();
    const valorProvincia = $provincia.value;


if (!valorProvincia) return 

let dateFetchApp = await fetchApp(valorProvincia);

if (dateFetchApp){
    console.log(dateFetchApp)
}

})
