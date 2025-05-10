import React, { useRef } from "react";

const Header = () => {
  const getStaticPath = (path) => {
    return `${process.env.PUBLIC_URL || ""}/static/${path}`;
  };

  return (
    <>
      <nav className="header d-flex p-absolute align-items-center justify-content-between w-100 px-3 py-2 position-fixed top-0">
        <div className="d-flex align-items-center gap-2">
          <h2>Logo</h2>
          {/* <div className="logoImg btn btn-light">logo</div>*/}
        </div>

        <div className="searchBarContainer flex-grow-1 gap-3 d-flex justify-content-center px-3">
          <div className="searchBar w-100" style={{ maxWidth: "600px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search Guides"
            />
          </div>
          <a href="/new-guide/">
            <button className="createButton btn btn-light">+create</button>
          </a>
        </div>

        <div className="d-flex align-items-center gap-3">
          <div
            className="avatar rounded-circle"
            style={{ width: "40px", height: "40px" }}
          ></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
