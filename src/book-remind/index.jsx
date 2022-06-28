import "./index.scss";
import { list } from "../../api";

export default () => {
  return (
    <div className="book-remind">
      {list.map((e) => {
        return (
          <div className="book-container">
            <img src="https://fakeimg.pl/120x130/" />
            <div className="book-info">
              <h4>{e.title}</h4>
              <p>借閱日期 {e.borrowDate}</p>
              <p>還書日期 {e.returnDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
