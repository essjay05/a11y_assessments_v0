export const BasicNoTheadWRolesWScope = () => {
  return (
    <>
      <h2>Table no thead/tbody (with aria-roles AND NO scopes)</h2>
      <table id="BasicNoTheadWRolesWScope" role="table">
        <tr role="row">
          <th role="columnheader" scope="col">Date</th>
          <th role="columnheader" scope="col">Event</th>
          <th role="columnheader" scope="col">Venue</th>
        </tr>
        <tr role="row">
          <td role="cell">24 March</td>
          <td role="cell">The What</td>
          <td role="cell">Main Hall</td>
        </tr>
        <tr role="row">
          <td role="cell">12 February</td>
          <td role="cell">Waltz with Strauss</td>
          <td role="cell">Main Hall</td>
        </tr>
        <tr role="row">
          <td role="cell">14 April</td>
          <td role="cell">The Obelisks</td>
          <td role="cell">West Wing</td>
        </tr>
      </table>
    </>
  )
}
