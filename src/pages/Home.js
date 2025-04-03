import React from 'react';
import Nav from '../Components/Nav';


const Home = () => {
  return (
    <>
      <Nav/>

      <div className="container-fluid">
        {/* Left Column */}
        <div className="col-sm-3">
          {/* List-Group Panel */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 className="panel-title"><span className="glyphicon glyphicon-random"></span> Completely Synergize</h1>
            </div>
            <div className="list-group">
              <a href="#" className="list-group-item">Resource Taxing</a>
              <a href="#" className="list-group-item">Premier Niche Markets</a>
              <a href="#" className="list-group-item">Dynamically Innovate</a>
              <a href="#" className="list-group-item">Objectively Innovate</a>
              <a href="#" className="list-group-item">Proactively Envisioned</a>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-sm-6">
          <div className="alert alert-success alert-dismissible" role="alert">
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Synergize:</strong> Seamlessly visualize quality intellectual capital!
          </div>
          {/* Articles */}
          <div className="row">
            <article className="col-xs-12">
              <h2>Premier Niche Markets</h2>
              <p>Phosfluorescently engage worldwide methodologies with web-enabled technology.</p>
              <p><button className="btn btn-default">Read More</button></p>
            </article>
          </div>
          <hr />
        </div>

        {/* Right Column */}
        <div className="col-sm-3">
          {/* Login Form */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                <span className="glyphicon glyphicon-log-in"></span> Log In
              </h3>
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="uid" name="uid" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="pwd" name="pwd" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-default">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
