import React from "react";
import { Block } from "./style";

export default function App() {
  return (
    <Block>
      <img src={require("./assets/cover.png")} className="head-image" />
      <section className="first">
        <div className="line">
          <p>GREED</p>
          <p>1440 PX / 8 COLUMNS / MARGIN 60 / GUTTER 16</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <img src={require("./assets/table.png")} />
        <div className="line">
          <p>/ ABOUT PROJECT /</p>
          <p>DESIGN PROCESS</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="box">
          <div className="content">
            <p>
              <span>Target audience analysis</span>
              <span>Research</span>
              <span>01</span>
            </p>
            <p>Analysis of competitors</p>
          </div>
          <hr />
          <div className="content">
            <p>
              <span>Information architecture</span>
              <span>Structure</span>
              <span>02</span>
            </p>
            <p>Wireframes</p>
          </div>
          <hr />
          <div className="content">
            <p>
              <span>Moodboard</span>
              <span>Design</span>
              <span>03</span>
            </p>
            <p>UI design</p>
            <p>Responsive</p>
            <p>UI Kit</p>
            <p>Animation</p>
          </div>
        </div>
      </section>
      <section className="second">
        <div className="line">
          <p>/ MAIN PAGE /</p>
          <p>/ DESKTOP /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <img src={require("./assets/desktop.png")} />
      </section>
      <section className="third">
        <div className="images">
          <div className="box">
            <img src={require("./assets/mobile-1.png")} />
            <img src={require("./assets/mobile-2.png")} />
          </div>
          <div className="box">
            <img src={require("./assets/mobile-3.png")} />
            <img src={require("./assets/mobile-4.png")} />
          </div>
        </div>
        <div className="line">
          <p>/ APARTMENT PAGE /</p>
          <p>/ DESKTOP /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <img src={require("./assets/apartments.png")} className="image" />
      </section>
      <section className="fourth">
        <div className="line">
          <p>/ RESPONSIVE /</p>
          <p>/ TABLET / MOBILE /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="images">
          <div className="box">
            <img src={require("./assets/apartment-mobile-1.png")} />
            <img src={require("./assets/apartment-mobile-2.png")} />
          </div>
          <img
            src={require("./assets/apartment-tablet.png")}
            className="image"
          />
        </div>
      </section>
      <img src={require("./assets/bg-image-2.png")} className="image" />
      <section className="fifth">
        <div className="line">
          <p>/ TYPOGRAPHY /</p>
          <p>/ COLOURS /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="blog">
          <div className="box">
            <h1>PolySans</h1>
            <div>
              <p>
                <span>60</span>
                <span>48</span>
                <span>30</span>
                <span>24</span>
                <span>18</span>
                <span>16</span>
                <span>14</span>
                <span>10</span>
                <span>8</span>
              </p>
              <img src={require("./assets/lines.png")} />
            </div>
          </div>
          <img src={require("./assets/a-letter.png")} />
        </div>
        <img src={require("./assets/colours.png")} className="img" />
      </section>
      <section className="sixth">
        <div className="line">
          <p>/ MENU /</p>
          <p>/ DESKTOP / MOBILE /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="images">
          <img src={require("./assets/menu-desktop.png")} />
          <img src={require("./assets/menu-mobile.png")} />
        </div>
        <div className="line">
          <p>/ APARTMENTS MORE INFO /</p>
          <p>/ DESKTOP /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <img src={require("./assets/info.png")} className="image" />
        <div className="line">
          <p>/ FAVORITES /</p>
          <p>/ DESKTOP /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <img src={require("./assets/saved.png")} className="image" />
      </section>
      <section className="seventh">
        <div className="line">
          <p>/ ABOUT US /</p>
          <p>/ DESKTOP / MOBILE /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="images">
          <img src={require("./assets/about-mobile.png")} />
          <img src={require("./assets/about-desktop.png")} />
        </div>
        <div className="line">
          <p>/ GALLERY /</p>
          <p>/ DESKTOP / MOBILE /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="images">
          <img src={require("./assets/gallery.png")} className="mobile-image"/>
        </div>
      </section>
      <section className="eighth">
        <div className="line">
          <p>/ MENU /</p>
          <p>/ DESKTOP / MOBILE /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <img src={require("./assets/call.png")} className="image" />
      </section>
      <section className="nineth">
        <div className="line">
          <p>/ CONTACTS /</p>
          <p>/ DESKTOP / MOBILE /</p>
          <p>/ DREAM HOME TODAY /</p>
        </div>
        <div className="images">
          <img src={require("./assets/contacts-mobile.png")} />
          <img src={require("./assets/contacts-desktop.png")} />
        </div>
        <div className="line">
          <p>/ CORPORATIVE WEBSITE /</p>
          <p>/ ABDURASHID ZUKHURI /</p>
          <p>/ UX/UI DESIGNER /</p>
        </div>
        <h1>Thank you for watching</h1>
      </section>
    </Block>
  );
}
