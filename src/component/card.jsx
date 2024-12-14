const card = (props) => {
    const {textTile, img, price, textDesc} = props;

    return (
      <div className="card">
        <img
          src={img}
          alt=""
        />
        <div className="card_desc">
          <h4>{textTile}</h4>
          <p>{price}</p>
          <p>{price}</p>
          <span>{textDesc}</span>
          <button className="product__btn btn">Add to cart</button>
        </div>
      </div>
    );

};

export default card;
