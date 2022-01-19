// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/view-reservations" page={ViewReservationsPage} name="viewReservations" />
        <Route path="/change-booking/{id:String}" page={ChangeBookingPage} name="changeBooking" />
        <Route path="/edit-hub/{id:Int}" page={EditHubPage} name="editHub" />
        <Route path="/book-reservation/{id:Int}" page={BookReservationPage} name="bookReservation" />
        <Route path="/confirm-reservation/{id:String}" page={ConfirmReservationPage} name="confirmReservation" />
        <Route path="/view-hubs" page={ViewHubsPage} name="viewHubs" />
        <Route path="/list-hubs" page={ListHubsPage} name="listHubs" />
        <Route path="/list-hubs/{stepId:Int}" page={ListHubsPage} name="listHubs" />
        <Route path="/profile" page={ProfilePage} name="profile" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
