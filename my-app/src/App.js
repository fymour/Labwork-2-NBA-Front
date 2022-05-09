import Header from './components/Header/header'

import Main from "./components/Main/main"

import Items from './components/Items/items'
import ItemsAddon from './components/Items/itemsaddon'
import Products from './components/objects/product.json'

import ItemsKobe from './components/ItemsKobe/itemforkobe'
import ProductsKobe from './components/objects/productskobe.json'

import White from './components/Whitepage/white';
import eastteam from './components/objects/east-team.json'
import westteam from './components/objects/west-team.json'

import Hall from './components/HallofFame/hall'

import './App.css'
function App() {
  console.log(ProductsKobe);
  return (
    <div className="App">
      <Header />

      <Main />

      <Items
        title="bestsellers"
        colortitle={
          <ItemsAddon
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

      <ItemsKobe
        title="KOBE BRYANT"
        colortitle={
          <ItemsAddon
            firstText="KOBE"
            firstColor="YELLOW"
            secondText="BRYANT"
            secondColor="PURPLE"
          />
        }
        collection="AUTHENTIC EDITION"
        subtitle="KOBE BRYANT: A BASKETBALL LEGEND. BRYANT CRAFTED A STORIED CAREER IN HIS 20 SEASONS WITH THE LAKERS. THE LEGACY OF KOBE BRYANT WAS A FAR-REACHING ONE. "
        products={ProductsKobe}
      />
      <Hall
      />


    </div>
  );
}

export default App;
