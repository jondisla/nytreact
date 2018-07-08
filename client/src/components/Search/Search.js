import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div
        style={{
          //   width: 600,
          border: "1px solid black"
        }}
        className="container"
      >
        <div className="row">
          <div className="col-sm-12">
            <form>
              <center>
                <h1>Search</h1>

                {/* <!-- Here we create the text box for capturing the search term--> */}
                <div className="form-group">
                  <label for="search">Topic:</label>
                  <input type="text" class="form-control" id="search-term" />
                </div>
                {/* <!-- Here we capture the Start Year Parameter--> */}
                <div class="form-group">
                  <label for="start-year">Start Year (Optional):</label>
                  <input type="text" class="form-control" id="start-year" />
                </div>
                {/* <!-- Here we capture the End Year Parameter --> */}
                <div class="form-group">
                  <label for="end-year">End Year (Optional):</label>
                  <input type="text" class="form-control" id="end-year" />
                </div>
                {/* <!-- Here we have our final submit button --> */}
                <button type="submit" class="btn btn-default" id="run-search">
                  <i class="fa fa-search" /> Search
                </button>
                {/* <button type="button" class="btn btn-default" id="clear-all">
              <i class="fa fa-trash" /> Clear Results
            </button> */}
              </center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
