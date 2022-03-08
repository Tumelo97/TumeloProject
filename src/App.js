import "./App.css";
/*Importing our components*/

import {Navbar,Header,Features,Download,Subscribe,Footer,Faq, Product } from "./components";


function App() {
  return (
    <main>
      <header className="header-bg">
      <Navbar/>
      <Header/>
      </header>
      <Features/>
      <Product/>
      
    </main>
    
  );
}

export default App;
