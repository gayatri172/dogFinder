console.log('hello....')

document.getElementById('doggoDropDown');
const listButton = document.querySelector('.list');
window.addEventListener('load', populateList);
window.addEventListener('load', getDogTerm);
function getDogTerm(){
    fetch('https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=dog&formatversion=2')
      .then(checkStatus)
      .then(response => response.json())
      .then(data => displayDogInfo(data))
      .catch(error => notifyUser(error))
  }
  function populateList(){
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(checkStatus)
      .then(response => response.json())
      .then(data => createListItems(data.message))
      .catch(error => notifyUser(error))
  }


  async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()

}

start()

function createBreedList(breadList) {
    document.getElementById("breed").innerHTML = `
    <select>
    <opction>Choose a dog breed</opction>
    ${Object.keys(breedList).map(function (breed) {
        return `<option>${breed}<option>`
    }).join('')}
    </select>
    `
}