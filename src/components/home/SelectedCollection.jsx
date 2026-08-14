import React from "react";
import SelectedItemVideo from "../../assets/selected-collection.mp4";
import SelectedItemThumbnail from "../../assets/selected-collection-thumbnail.jpg";
import SelectedItemLogo from "../../assets/selected-collection-logo.avif";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";

export default function SelectedCollection() {
  return (
    <header>
      <div className="selected-collection">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={SelectedItemThumbnail}
          src={SelectedItemVideo}
          className="selected-collection__bg"
        />
        <div className="selected-collection__description">
          <img
            src={SelectedItemLogo}
            alt=""
            className="selected-collection__logo"
          />
          <h1 className="selected-collection__title">
            Coachella Throwback Merchandise Trunk
          </h1>
          <Link to={'/user'} className="selected-collection__author">
            By Horatio_Vault
            <img
              src={VerifiedIcon}
              className="selected-collection__author__verified"
            />
          </Link>
          <div className="selected-collection__details">100 items · 10 ETH</div>
          <Link to={'/collection'} className="selected-collection__button">
            <div className="green-pulse"></div>
            View Collection
          </Link>
        </div>
      </div>
    </header>
  );
}
