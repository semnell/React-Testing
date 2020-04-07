import React from "react";
import "./App.css";
import Emoji from "react-emoji-render";
import Footer from "./modules/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const startDateTime = new Date(2017, 11, 16, 4, 0, 0, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
const startStamp = startDateTime.getTime();

let newDate = new Date();
let newStamp = newDate.getTime();

// eslint-disable-next-line no-unused-vars
let timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
  newDate = new Date();
  newStamp = newDate.getTime();
  let diff = Math.round((newStamp - startStamp) / 1000);

  const d = Math.floor(
    diff / (24 * 60 * 60)
  ); /* though I hope she won't be working for consecutive days :) */
  diff = diff - d * 24 * 60 * 60;
  const h = Math.floor(diff / (60 * 60));
  diff = diff - h * 60 * 60;
  const m = Math.floor(diff / 60);
  diff = diff - m * 60;
  const s = diff;

  document.getElementById("time-elapsed").innerHTML =
    d + " day(s), " + h + " hour(s), " + m + " minute(s), " + s + " second(s)";
}

timer = setInterval(updateClock, 1000);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Emoji className="app-emoji" text="I Love you Sedef :heart:" />
        </p>
        <p>I have loved you for a long time</p>
        <p>
          <div id="time-elapsed" />
          and counting
          <Emoji className="app-emoji" text=":smile:" />
        </p>
        <p>
          <Button type="button" variant="light">
            <a href="https://wa.me/31683981805"> Text me! </a>
          </Button>
        </p>
      </header>
      <footer className="App-Footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
