const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '093e3f71ccmsh72df2fa85457498p1ddb1ejsnf75e54dbd942',
		'X-RapidAPI-Host': 'pet-name-generator.p.rapidapi.com'
	}
};

fetch('https://pet-name-generator.p.rapidapi.com/female-pet-names?search=G', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));