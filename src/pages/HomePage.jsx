function HomePage() {
  return (
    <div className="Homepage">
      <p className="Homepage-title">Juzt an Homepage</p>
          <ul className="Homepage-items">
            <li>
              {" "}
              <a href="/resume">Resume</a>
            </li>
            <li>
              {" "}
              <a href="/tollList">TollList</a>
            </li>
            <li>
              {" "}
              <a href="/vehicleLogs">VehicleLogs</a>
            </li>
            <li>
              {" "}
              <a href="/expenseTracker">ExpenseTracker</a>
            </li>
          </ul>
      </div>
  );
}

export default HomePage;
