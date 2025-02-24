import React from 'react'
import style from "./Megacontainer.module.css"

const Megacontainer = (item) => {
  return (
  <>
  <div className={style.bigContainer}>{item.children}</div>
  </>
  )
}

export default Megacontainer