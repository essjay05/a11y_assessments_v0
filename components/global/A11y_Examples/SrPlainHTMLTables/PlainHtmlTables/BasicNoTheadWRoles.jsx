export const BasicNoTheadWRoles = () => {
  return (
    <>
      <h2>5*. Table no thead/tbody (with aria-roles AND NO scopes)</h2>
      <table id="BasicNoTheadWRoles" role="table">
        <tr role="row">
          <th role="columnheader">Date</th>
          <th role="columnheader">Event</th>
          <th role="columnheader">Venue</th>
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
