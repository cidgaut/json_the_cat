const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  console.log(error)
  console.log(desc)
  if (error) {
    console.log('Error fetching details:', error);
  } else {
    console.log(desc);
  }
});