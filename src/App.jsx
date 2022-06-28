import BookStatus from "./book-status";
import BookStars from "./book-stars";
import BookRemind from "./book-remind";

function App() {
  return (
    <div className="App">
      <h1>Homepage</h1>
      <BookStatus />
      <BookStars />
      <BookRemind />
    </div>
  );
}

export default App;
