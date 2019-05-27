import React from 'react'

const Stars = ({rating, handleClick,search}) => {
  let stars = []
    for (let i = 0; i < 5; ++i) {
        if (i<rating)
            {stars.push(<i onClick={(e)=>search ?handleClick(i+1):null} className="fas fa-star colorRate" key={i}></i>)}
        else
            {stars.push(<i  onClick={(e)=>search ?handleClick(i+1):null}  className="fas fa-star uncolorRate" key={i}></i>)} 
    }

  return (
    <div className="Stars">
      {stars}
    </div>
  )
}

export default Stars