export const BaseHtmlTableWThead = () => {
  return (
    <>
      <h2>Base HTML Table</h2>
      <h3>Plain HTML table. No aria roles/attributes and no scopes applied.</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Venue</th>
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