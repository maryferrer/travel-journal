import Header from './Header';
import Card from './Card';
import array from './Data';

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
      {cards}
    </div>
  )
}

export default App;
