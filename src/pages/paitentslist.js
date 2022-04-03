import React, { useState, useEffect } from "react";
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";


function PaientsList() {
  const url = "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails";
  const [person, setPerson] = useState({});
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setPerson(res[0]));
  }, []);
  
  return (
    <>
      <div className="conatiner-fluid mx-auto mt-4 border border-dark w-50 rounded">
        <div className="row justify-content-center ">
          <div className="col-md-3">
            <img src="C:\Users\mihir\Downloads\react-sidebar-v1-master\Internship 1\public\icon.jpeg"></img>
            <h3 className="mt-4">{person.name}</h3>
            <span style = {{"margin-left": "1rem", "font-size": "12px"}}>dainacooper@gamil.com</span>
            <div className="row"style = {{"margin-top": "25px", "margin-bottom": "16px"}}>
              <div className="col-md-2">
                <h5>{person.Past}</h5>
                <span style = {{"margin-left": "0rem", "color": "grey"}}>Past</span>
              </div>
              <div className="col-md-1" style = {{"margin-left": "73px" }}>
                <h5>{person.Upcoming}</h5>
                <span  style = {{"margin-left": "-22px", "color":"grey" }}>Upcoming</span>
              </div>
            </div>
            <button type="button" className="btn btn-light border border-dark"  style = {{"margin-left": "-19px", "width":"197px","margin-bottom":"8px" }}> 
              Send Message
            </button>
          </div>

          <div className="col-md-7">
            <div className="row justify-content-between">
              <div className="col-md-1">
                <span>Gender</span>
                <br></br>
                <span>{person.Gender}</span>
              </div>
              <div className="col-md-4">
                <span>Birthday</span>
                <br></br>
                <span>{person.Birthday}</span>
              </div>
              <div className="col-md-1">
                <span>Phone Number</span>
                <br></br>
                <span>{person["Phone Number"]}</span>
              </div> 
            </div>
            <div className="row">
              <div className="col-md-4">
                <span>Street Address</span>
                <br></br>
                <span>{person["Street Address"]}</span>
              </div>

              <div className="col-md-2">
                <span>Zip Code</span>
                <br></br>
                <span>{person["ZIP Code"]}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <span>Member Status</span>
                <br></br>
                <span>{person["Member Status"]}</span>
              </div>

              <div className="col-md-2">
                <span>Register Date</span>
                <br></br>
                <span>{person["Register Date"]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner-fluid  mx-auto mt-4 border border-dark w-50 rounded ">
        <div className="row justify-content-around">
          <div className="col-md-4 mx-4">
            <h6>
              <b>Notes</b>
            </h6>
          </div>
          <div className="col-md-2">
            <span>See all</span>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid">
            <ul>
              <li>This is the paitent</li>
              <li>He has some disease</li>
              <li>now he is fine</li>
            </ul>
            <button type="button" class="btn btn-primary">
              save notes
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h6>doctor details are here</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <h7>Drg.Shristi Sahay</h7>
          </div>
          <div className="col-md-2">
            <h7>27 nov 19</h7>
          </div>
        </div>
      </div>
      <div className="conatiner-fluid mx-auto mt-4 border border-dark w-50 rounded">
        <div className="conatiner-fluid  mt-2 mb-2  w-50 rounded d-flex justify-content-start d-flex align-items-center">
          <div className="row d-flex justify-content-start">
            <div className="col-md-3 mx-1">
              <button type="button" class="btn btn-secondary">
                Upcoming Appointment
              </button>
            </div>
            <div className="col-md-3 mx-4">
              <button type="button" class="btn btn-secondary">
                Past Appointment
              </button>
            </div>
            <div className="col-md-3 mx-2">
              <button type="button" class="btn btn-secondary">
                Medical Records
              </button>
            </div>
          </div>
        </div>
        <div className="conatiner-fluid  mt-2 mb-2  w-70 border border-dark rounded d-flex justify-content-start d-flex align-items-center">
          <div className="row d-flex justify-content-between">
            <div className="col-md-4 mx-3 d-flex align-items-center">
              <h6>Root canal treatment</h6>
            </div>
            <div className="col-md-4">
              <div class="btn-group dropup">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style = {{"margin-right" : "16rem"}}
                >
                  Show previous treatment
                </button>
                <div class="dropdown-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaientsList;
