export const DivTableWRolesWScopes = () => {
  return (
    <>
      <h2>Div/span table using Aria roles With Scopes</h2>
      <p>Table which is created only using div and span tags with aria-roles indicating a table. Scopes are added.</p>
      <div role="table">
        <div role="row" class="th-row">
          <span role="columheader" scope="col">Date</span>
          <span role="columheader" scope="col">Event</span>
          <span role="columheader" scope="col">Venue</span>
        </div>
        <div role="row">
          <span role="cell">24 March</span>
          <span role="cell">The What</span>
          <span role="cell">West Wing</span>
        </div>
        <div role="row">
          <span role="cell">12 February</span>
          <span role="cell">Waltz with Strauss</span>
          <span role="cell">Main Hall</span>
        </div>
        <div role="row">
          <span role="cell">14 April</span>
          <span role="cell">The Obelisks</span>
          <span role="cell">Main Hall</span>
        </div>
      </div>
    </>
  )
}
