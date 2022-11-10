import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  });
  return (
    <div>
     <Navbar />
     {cards}
     <Footer />
     </div>
  )
}

export default App
