export const BasicWTheadWAriaWScope = () => {
  return (
    <>
      <h2>Base HTML Table with Aria Roles</h2>
      <h3>Plain HTML table. No aria roles/attributes and no scopes applied.</h3>
      <table role="table" id="BasicWTheadWAriaWScope">
        <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader" scope="col">Date</th>
            <th role="columnheader" scope="col">Event</th>
            <th role="columnheader" scope="col">Venue</th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          <tr role="row">
            <td role="cell">March 12</td>
            <td role="cell">Metallica</td>
            <td role="cell">Staples Center</td>
          </tr>
          <tr role="row">
            <td role="cell">June 11</td>
            <td role="cell">Martin Garrix</td>
            <td role="cell">Bill Graham Theatre</td>
          </tr>
          <tr role="row">
            <td role="cell">November 15</td>
            <td role="cell">Celine Dion</td>
            <td role="cell">Madison Square Garden</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};