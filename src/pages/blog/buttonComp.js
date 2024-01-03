import React from 'react'

const ButtonComp = ({title,count}) => {
  return (
    <button onClick={()=>alert(title)}>
        Data {count}
    </button>
  )
}

export default ButtonComp