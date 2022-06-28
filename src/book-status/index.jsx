import "./index.scss";

export default () => {
  return (
    <div className="book-status">
      <div className="borrow-count">
        <div>8,654</div>
        <div>借閱</div>
      </div>
      <div className="love-count">
        <div>9,999</div>
        <div>最愛</div>
      </div>
      <div className="status">
        <div>借出</div>
      </div>
    </div>
  );
};
