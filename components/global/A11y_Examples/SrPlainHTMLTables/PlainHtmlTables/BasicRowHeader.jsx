export const BasicRowHeader = () => {
  return (
    <section>
      <h2>10. Row Header Table Sample (no aria-roles AND no scopes)</h2>
      <p>Basic table html tags except this has a th tag in each row signifying row-headers.</p>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <td>24 March</td>
            <td>12 February</td>
            <td>14 April</td>
          </tr>
          <tr>
            <th>Event</th>
            <td>Waltz with Strauss</td>
            <td>The What</td>
            <td>The Obelisks</td>
          </tr>
          <tr>
            <th>Venue</th>
            <td>West Wing</td>
            <td>Main Hall</td>
            <td>Main Hall</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}