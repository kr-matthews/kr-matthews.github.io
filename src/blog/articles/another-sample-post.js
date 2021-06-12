import React from "react"

function Content(props) {
  return (
    <>
      <p>
      No content here. Actually, here's a generic table with no styling:
      </p>
      <table>
        <tbody>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </tbody>
      </table>
      <p>Seems to work.</p>
    </>
  )
}

export default Content;
