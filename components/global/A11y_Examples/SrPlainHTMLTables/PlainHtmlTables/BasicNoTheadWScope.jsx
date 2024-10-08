export const BasicNoTheadWScope = () => {
  return (
    <>
      <h2>Table no thead/tbody (NO aria-roles AND WITH scopes)</h2>
      <p>Basic HTML table that does NOT use thead/tbody tags. No aria-roles, but it does have scopes.</p>
      <table id="BasicNoTheadWScope">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Event</th>
          <th scope="col">Venue</th>
        </tr>
        <tr>
          <td>24 March</td>
          <td>The What</td>
          <td>Main Hall</td>
        </tr>
        <tr>
          <td>12 February</td>
          <td>Waltz with Strauss</td>
          <td>West Wing</td>
        </tr>
        <tr>
          <td>14 April</td>
          <td>The Obelisks</td>
          <td>Main Hall</td>
        </tr>
      </table>
    </>
  )
}
