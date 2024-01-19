const request = require('request');

const apiUrl = "https://api.thecatapi.com/v1/breeds/search";
const breedToSearch = process.argv[2]; // breed search is now enterred by the command line.

const url = `${apiUrl}?q=${breedToSearch}`; // ?q= this means (? beginns query, q query, = assigned to cat breedtosearch)

request(url, (error, response, body) => {
  //console.log('body:', body);// Print the HTML for the Google homepage.
  ///console.log('type of body:', typeof body)        
  if (error) {
    console.log('error:', error); // Print the error if one occurred 
    return;
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  
  const data = JSON.parse(body); //body transformmed by json is stored in data
  console.log('data:', data); //print
  //console.log('type of data:', typeof data);

  const searchTerm = breedToSearch.toLowerCase(); // Convert the arg input to lowercase for case-insensitive comparison
  console.log('searchterm',searchTerm);
  // Check if arg matches any id or name in the data array. Doing both id and name to lowercase, but name seems to be the only one with upercase
  const breedFound = data.some(breed => breed.id.toLowerCase() === searchTerm || breed.name.toLowerCase() === searchTerm);

  if (breedFound) {
    const description = data[0].description;
    console.log('Description:', description);
  } else {
    console.log('Breed not found');
  }

});


/*
console.logs
body: []
type of body: string
error: null
statusCode: 200
data without command line arg [], data with command line arg sib [{ object filled with all keys and values of sibe}]
type of data object
*/