import React from 'react'
import progressData from "../dataProgress"

type ProgressProps = {
  darkMode: boolean
}

const ProgressTable = (props: ProgressProps) => {

  const progressItems = progressData.map(item =>
    <tr key={item.id}>
      <td>-{item.date}-</td>
      <td>{item.skill}</td>
    </tr> 

  )
  return (
    <section>
      <table className = {props.darkMode? "progress-table" : "progress-table light"}>
        <tbody>
          {progressItems}
        </tbody>
      </table>
    </section>
    
  )
}

export default ProgressTable