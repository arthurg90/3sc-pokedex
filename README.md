### 3SC Pokedex App

Coding task submission for 3 Sided Cube

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
* The above will run the tests present in the directory

## Q & A 
* If you used any particular libraries why did you choose them?
  * I used primarily `React` with Hooks for state management because this was a fairly simple app, for a more complex app and data structures I would use `Redux` to deal with state
  * I used `styled-components` for the majority of the styling as I believe it to be a quick and efficient way to add styles within Components and use props (where needed) in the future
  * For modals I used `react-modal` and `styled-react-modal` to work with the styled components.
  * For testing I used `jest` and `enzyme` as they are compatible/built for react
* Did you have any challenges and if so, how did you overcome them?
  * The main challenge for me was to ensure that the saving, removing pokemon feature worked reliably. I overcame this by including some filtering logic when handling adding/removing pokemon to the saved state.
  * Another challenge was to make sure the saved Pokemon persisted on reload of the page, I overcame this by used Chrome dev tools to test that the localStorage was saving the saved items.
* Did you add any extra features?
  * I added visual cues for the old school gameboy-style fonts and to make the Header look like a Pokedex console.
* If you had more time, what else would you implement?
  * I would add better type checking i.e. `TypeScript`
  * I would include more filtering options e.g. filter by Type
  * I would include more details for each Pokemon, depending on what was relevant for the user
  * A better way to compare each pokemon side-by-side
