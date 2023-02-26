import React from 'react'
import { memo } from 'react'
function Child() {
    console.log("Child Component")
  return (
    <div>Child</div>
  )
}
export default memo(Child)
