import './App.css'

function App() {
  return (
    <div className="wrapper">
      <header>
        <a href="">
          <img src="logo.svg" alt="Fauxica logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="left-col">
          <h1>Quality apparel without the price tag</h1>
          <p className="subhead">
            No need to spend $xxx on apparel just for the name’s sake. Our
            premium apparel is made from the same stuff.
          </p>
          <div className="cta-btns">
            <a href="" className="primary-btn">
              Browse our collection
            </a>
            <a href="" className="secondary-btn">
              <span>Spring ‘23 Collection</span>
              <svg viewBox="0 0 19 9" fill="none">
                <path
                  d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
          <div className="news">
            <p className="employees">50K</p>
            <p className="details">
              We’re proud to announce that we now employ a workforce of over{' '}
              <strong>50,000</strong>. It’s all possible because of you.
            </p>
          </div>
        </div>

        <div className="right-col">
          <div className="card card1">
            <div className="card-details">
              <div>
                <a href="" className="product-title">
                  Fauxica Sport
                </a>
                <p className='product-description'>Running shoes</p>
              </div>
              <p className="product-price">$59</p>
            </div>
          </div>
          <div className="card card2">
            <div className="card-details">
              <div>
                <a href="" className="product-title">
                  Fauxica Sport
                </a>
                <p className='product-description'>Running shoes</p>
              </div>
              <p className="product-price">$59</p>
            </div>
          </div>
          <div className="card card3">
            <div className="card-details">
              <div>
                <a href="" className="product-title">
                  Fauxica Sport
                </a>
                <p className='product-description'>Running shoes</p>
              </div>
              <p className="product-price">$59</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
