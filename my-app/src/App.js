import Header from './components/Header/header'

import Main from "./components/Main/main"

import Items from './components/Items/items'
import ItemsaddOn from './components/Items/itemsaddon'
import Products from './components/objects/product.json'


import White from './components/Whitepage/white';
import eastteam from './components/objects/east-team.json'
import westteam from './components/objects/west-team.json'

import './App.css'
function App() {
  console.log(Products);
  return (
    <div className="App">
      <Header />

      <Main />

      <Items
        title="bestsellers"
        colortitle={
          <ItemsaddOn
            firstText="BESTSELLER"
            firstColor="#FB0223"
          />
        }
        collection="COLLECTION"
        subtitle="The jerseys of the best nba players of the regular seasons."
        product={Products}
      />


      <White
        playersEast={eastteam}
        playersWest={westteam}
      />
    </div>
  );
}

export default App;
