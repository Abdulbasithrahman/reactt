import logo from './logo.svg';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


import './App.css';
function App() {
   const cards=data.map(dat=>{
    return(
        <Card 
          key={dat.id}
           {...dat}
        />
    )
   })
   return(
    <div>
      <Navbar/>
     <Hero/>
     <section className='cards--list'>
       {cards}
     </section>
    </div>
   )
}

export default App;
