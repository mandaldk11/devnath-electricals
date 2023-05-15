import React from "react";
import { useState } from "react";
import "./Modal.css";

import {FcApproval } from "react-icons/fc";
export default function Modal({ closeModalHandler }) {

  return (
    <>
      <div className="modalWrapper" onClick={closeModalHandler}></div>
      <div className="modalContainer">
        <div
          className="container11"
        
        >
          <div className="d-flex p-2">
            <h2 style={{ color: "green", fontWeight: "bold", padding: "5px" }}>
             Successfully LogOut Visit Again
            </h2>
            <span>
              {" "}
              <button
                type="button"
                class="btn btn-light btn-lg"
                onClick={closeModalHandler}
              >
                X
              </button>
            </span>
          </div>
          <hr />
          <br/>
          <FcApproval style={{width:'350px',height:'100px'}}/>
          <form >
           
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-success mx-4 my-4 "
                onClick={closeModalHandler}
                style={{fontFamily:'Quicksand'}}
              >
                Cancel
              </button>
         
            </div>
          </form>
        </div>
      </div>
    </>
  );
}