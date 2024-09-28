export const BasicNoThead = () => {
  return (
    <>
      <h2>6*. Table no thead/tbody (NO aria-roles AND NO scopes)</h2>
      <table id="BasicNoThead">
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
