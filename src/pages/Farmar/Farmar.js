import React from 'react'

export const Farmar = () => {

    const [clickedDivs, setClickedDivs] = useState([]);

    const handleClick = (divIndex) => {
      setClickedDivs((prevClicked) => [...prevClicked, divIndex]);
    };
  return (
    <div>
      <div className="row">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`div-item ${clickedDivs.includes(index) ? 'clicked' : ''}`}
            onClick={() => handleClick(index)}
          >
            <button>Click Me</button>
          </div>
        ))}
      </div>
    </div>
  )
}
