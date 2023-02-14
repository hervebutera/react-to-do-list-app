const BottomNavBar = () => {
  return (
    <div className="bottomNav">
      <span className="bottom-li items-count">5 items left</span>
      <ul>
        <li className="bottom-li nav-li">All</li>
        <li className="bottom-li nav-li">Active</li>
        <li className="bottom-li nav-li">Completed</li>
        <li className="bottom-li clear-btn">Clear completed</li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
