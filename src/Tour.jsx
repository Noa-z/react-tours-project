import { useState } from 'react'

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isAddMore, setIsAddMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>

        <p>{isAddMore ? info : `${info.substring(0, 200)}...`}</p>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setIsAddMore(!isAddMore)
          }}
        >
          {isAddMore ? 'show less' : 'read more'}
        </button>
      </div>

      <button
        type="button"
        className="btn btn-block delete-btn"
        onClick={() => {
          removeTour(id)
        }}
      >
        remove tour
      </button>
    </article>
  )
}
export default Tour
