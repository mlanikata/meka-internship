import React from "react";
import SelectedItemVideo from "../../assets/selected-collection.mp4";
import SelectedItemThumbnail from "../../assets/selected-collection-thumbnail.jpg";
import SelectedItemLogo from "../../assets/selected-collection-logo.avif";
import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../ui/Skeleton.jsx";
import { useState, useEffect } from "react";

export default function SelectedCollection() {

  const [selectedCollection, setSelectedCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchSelectedCollection() {
    setLoading(true);
    const { data } = await axios.get(
      "https://remote-internship-api-production.up.railway.app/selectedCollection"
    );

    const collections = data.data;

    setSelectedCollection(collections);
    setLoading(false);  

  }

  useEffect(() => {
    fetchSelectedCollection();
  }, []);

  return (
    <header>
      {loading ? (
          <div className="selected-collection">
    <div className="selected-collection__description">
      <Skeleton width="80px" height="80px" borderRadius="50%" />
      <Skeleton width="300px" height="36px" borderRadius="6px" />
      <Skeleton width="150px" height="20px" borderRadius="6px" />
      <Skeleton width="200px" height="16px" borderRadius="6px" />
      <Skeleton width="140px" height="44px" borderRadius="22px" />
    </div>
  </div>
      ) : (
        <div className="selected-collection">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={selectedCollection.thumbnail}
            src={selectedCollection.videoLink}
            className="selected-collection__bg"
          />
      <div className="selected-collection__description">
            <img src={selectedCollection.logo} alt="" className="selected-collection__logo" />
            <h1 className="selected-collection__title">{selectedCollection.title}</h1>
            <Link
              to={`collection/${selectedCollection.creatorId}`}
              className="selected-collection__author"
            >
              By {selectedCollection.creator}
              <img src={VerifiedIcon} className="selected-collection__author__verified" />
            </Link>
            <div className="selected-collection__details">
              {selectedCollection.amountOfItems} items · {selectedCollection.floorPrice} ETH
            </div>
            <Link
              to={`collection/${selectedCollection.collectionId}`}
              className="selected-collection__button"
            >
              <div className="green-pulse"></div>
              View Collection
          </Link>
        </div>
      </div>
      )}
    </header>
  );
}

