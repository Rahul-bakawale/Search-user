import React from "react";

const List = () => {
  return(
    <>
      <html lang="en">
        <body>
          {/* <div id="overlay">
            <img src="./img/preloader.gif" alt="Preloader icon" />
          </div> */}
          <main>
            <div id="table-section">
              {/* <form action="/">
                <img src='./img/search-icon.svg' alt="Search Icon" />
                <input type="text" placeholder="Enter something" name="search-box" id="search-box" value="" />
              </form> */}
              <div id="table-wrapper">
                <div id="table-headers">
                  <table>
                    <thead>
                      <tr>
                        <th className="column1">Id</th>
                        <th className="column2">FirstName</th>
                        <th className="column3">LastName</th>
                        <th className="column4">Email</th>
                        <th className="column5">Phone</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div id="table-data">
                  <table>
                    <tbody>
                   
                      <tr className="data-row">
                          <td className="column1">856</td>
                          <td className="column2">Yeqing</td>
                          <td className="column3">Elshoff</td>
                          <td className="column4">RKimmel@tincidunt.com</td>
                          <td className="column5">(230)488-3157</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div id="info-wrapper">
              <h1>Details</h1>
              <p>Click on a table item to get detailed information</p>
              <div id="info-content">
                <div><b>User selected:</b> Marcellin Shrestha</div>
                <div>
                  <b>Description: </b>
                  <textarea cols="50" rows="5" readonly>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
                  </textarea>
                </div>
                <div><b>Address:</b> 6480 Nec Ct</div>
                <div><b>City:</b> Dinwiddie</div>
                <div><b>State:</b> NV</div>
                <div><b>Zip:</b> 91295</div>
              </div>
            </div>
          </main>
          <script src="./script.js"></script>
        </body>
      </html>
    </>
  );
};

export default List;