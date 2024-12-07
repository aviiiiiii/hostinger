import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <div>
      <div className='eventNavBar'>
        <nav>
          <div class="nav-content">
            <div class="logo">
              <p>Event Management</p>
            </div>
            <ul class="nav-links">
              <li><a href='/eventsManagement'>Home</a></li>
              <li><a href="/eventsManagement/events">Events</a></li>
              <li><a href="/eventsManagement/feedback">Feedback</a></li>
              <li><a href="/eventsManagement/admin">Admin</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>



  );
}

export default NavBar;
