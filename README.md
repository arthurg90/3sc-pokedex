### Pokedex App

This is a web app which allows user to interface with the [PokeAPI](https://pokeapi.co/) for finding and displaying Pokemon.

<img width="1354" alt="Screenshot 2021-05-29 at 22 19 35" src="https://user-images.githubusercontent.com/32075763/120085087-2ebe8a80-c0cd-11eb-91b0-7af32410e8a3.png">

## Getting Started
* Clone the git project into a directory of your choice
  ```bash
  git clone https://github.com/arthurg90/3sc-pokedex.git
  cd 3sc-pokedex
  npm install
  npm start
  ```  
* App should open up in http://localhost:3000/
## Usage
This is a single page app which uses [PokeAPI](https://pokeapi.co/) to display, search and save pokemon. 
* The app will load the 1st generation "Kanto" pokemon by default
* Use the dropdown select to choose a generation (up to 8), the pokemon list will update accordingly
* Use the search bar to search for specific pokemon
* The search will only cover the selected generation of pokemon
* Clicking on each pokemon will bring up a pop-up modal displaying detailed info for each pokemon
* Hovering over a pokemon will bring up an option to "Save Pokemon"
* Saved Pokemon will appear at the top of the page
* Saved Pokemon will persist on each page reload
* You can remove saved Pokemon from the saved list by hovering over it and clicking "Remove Pokemon"

## Testing
```bash
cd src/tests
yarn test
```  
* The above will run the tests present in the directory using Jest JS library
* The App was tested in Chrome/Safari/Firefox web browsers

