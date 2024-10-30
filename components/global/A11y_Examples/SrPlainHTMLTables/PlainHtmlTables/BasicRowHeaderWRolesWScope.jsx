export const BasicRowHeaderWRolesWScope = () => {
  return (
    <section>
      <h2>10. Row Header Table Sample (with aria-roles AND no scopes)</h2>
      <p>Basic table html tags except this has a th tag in each row signifying row-headers.</p>
      <table id="BasicRowHeaderWRoles" role="table">
        <tbody>
          <tr role="row">
            <th role="columnheader" scope="row">Date</th>
            <td role="cell">24 March</td>
            <td role="cell">12 February</td>
            <td role="cell">14 April</td>
          </tr>
          <tr role="row">
            <th role="columnheader" scope="row">Event</th>
            <td role="cell">Waltz with Strauss</td>
            <td role="cell">The What</td>
            <td role="cell">The Obelisks</td>
          </tr>
          <tr role="row">
            <th role="columnheader" scope="row">Venue</th>
            <td role="cell">West Wing</td>
            <td role="cell">Main Hall</td>
            <td role="cell">Main Hall</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}