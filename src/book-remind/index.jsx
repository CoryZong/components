import "./index.scss";
import { list, list1 } from "../../api";

export default () => {
  return (
    <div className="book-remind">
      <div className="book-remind__container">
        <div className="book-remind__body">
          <div className="book-expired__container block">
            <h2>過期未歸還</h2>
            <div className="book__block">
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
          </div>
          <div className="book-get__container block">
            <h2>可以取書囉</h2>
            <div className="book__block">
              {list1.map((e) => {
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
          </div>
        </div>
        <div className="book-remind__footer">
          <button>確認</button>
        </div>
      </div>
    </div>
  );
};
