export const BaseHtmlTableWTheadAndScope = () => {
  return (
    <>
      <h2>Base HTML Table with Aria Roles</h2>
      <h3>Plain HTML table. No aria roles/attributes and no scopes applied.</h3>
      <table id="BaseHtmlTableWTheadAndScope">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Event</th>
            <th scope="col">Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>March 12</td>
            <td>Metallica</td>
            <td>Staples Center</td>
          </tr>
          <tr>
            <td>June 11</td>
            <td>Martin Garrix</td>
            <td>Bill Graham Theatre</td>
          </tr>
          <tr>
            <td>November 15</td>
            <td>Celine Dion</td>
            <td>Madison Square Garden</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};