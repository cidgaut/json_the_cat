const request = require('request');

const apiUrl = "https://api.thecatapi.com/v1/breeds/search";
const breedToSearch = "sib"; // breed search both sib and siberian work for some reason sib is the ID and name is siberian 

const url = `${apiUrl}?q=${breedToSearch}`; // ?q= this means (? beginns query, q query, =assigned to cat breedtosearch)

request(url, (/*error, response, */body) => { // searching only for body
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);
});