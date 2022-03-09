import Header from './Header';
import Card from './Card';
import array from './Data';
import Footer from './Footer'

function App() {
  const cards = array.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div>
      <Header />,
      {cards},
      <Footer />
    </div>
  )
}

export default App;
