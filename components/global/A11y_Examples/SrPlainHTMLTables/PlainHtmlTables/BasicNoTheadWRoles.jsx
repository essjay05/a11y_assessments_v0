export const BasicNoTheadWRoles = () => {
  return (
    <>
      <h2>5*. Table no thead/tbody (with aria-roles AND NO scopes)</h2>
      <table id="BasicNoTheadWRoles">
        <tr>
          <th>Date</th>
          <th>Event</th>
          <th>Venue</th>
        </tr>
        <tr>
          <td>24 March</td>
          <td>The What</td>
          <td>Main Hall</td>
        </tr>
        <tr>
          <td>12 February</td>
          <td>Waltz with Strauss</td>
          <td>Main Hall</td>
        </tr>
        <tr>
          <td>14 April</td>
          <td>The Obelisks</td>
          <td>West Wing</td>
        </tr>
      </table>
    </>
  )
}
