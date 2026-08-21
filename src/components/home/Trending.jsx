import React from "react";
import VerifiedIcon from "../../assets/verified.png";
import TrendingCollection from "../../assets/trending-collection.avif";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "../ui/Skeleton.jsx";
import { useState, useEffect } from "react";

export default function Trending() {
  const [trendingCollections, setTrendingCollection] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchTrendingCollection() {
    setLoading(true);
    const { data } = await axios.get(
      "https://remote-internship-api-production.up.railway.app/trendingNFTs"
    );

    const collections = data.data;

    setTrendingCollection(collections);
    setLoading(false);
  }

  useEffect(() => {
    fetchTrendingCollection();
  }, []);

  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            {/* first column */}
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? new Array(5)
                      .fill(0)
                      .map((_, index) => (
                         <div key={index} className="trending-collection">
        <div className="trending-collection__rank">
          <Skeleton width="20px" height="20px" borderRadius="4px" />
        </div>
        <div className="trending-collection__collection">
          <figure className="trending-collection__img__wrapper">
            <Skeleton width="40px" height="40px" borderRadius="50%" />
          </figure>
          <div className="trending-collection__name">
            <Skeleton width="120px" height="16px" borderRadius="4px" />
          </div>
        </div>
        <div className="trending-collection__price">
          <Skeleton width="60px" height="16px" borderRadius="4px" />
        </div>
        <div className="trending-collection__volume">
          <Skeleton width="60px" height="16px" borderRadius="4px" />
        </div>
      </div>
    ))
                  : trendingCollections.slice(0, 5).map((collection, index) => (
                      <Link
                        to={"/collection"}
                        key={collection.id ?? index}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">
                          {collection.rank}
                        </div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={collection.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {collection.title}
                          </div>
                          <img
                            src={VerifiedIcon}
                            className="trending-collection__verified"
                          />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {Number(collection.floor).toFixed(2)} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {collection.totalvolume} ETH
                          </span>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
            {/* second column */}
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {loading
                  ? new Array(5)
                      .fill(0)
                      .map((_, index) => (
                       <div key={index} className="trending-collection">
        <div className="trending-collection__rank">
          <Skeleton width="20px" height="20px" borderRadius="4px" />
        </div>
        <div className="trending-collection__collection">
          <figure className="trending-collection__img__wrapper">
            <Skeleton width="40px" height="40px" borderRadius="50%" />
          </figure>
          <div className="trending-collection__name">
            <Skeleton width="120px" height="16px" borderRadius="4px" />
          </div>
        </div>
        <div className="trending-collection__price">
          <Skeleton width="60px" height="16px" borderRadius="4px" />
        </div>
        <div className="trending-collection__volume">
          <Skeleton width="60px" height="16px" borderRadius="4px" />
        </div>
      </div>
    ))
                  : trendingCollections.slice(5, 10).map((collection, index) => (
                      <Link
                        to={"/collection"}
                        key={collection.collectionId ?? index}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">
                          {collection.rank}
                        </div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={collection.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {collection.title}
                          </div>
                            <img
                              src={VerifiedIcon}
                              className="trending-collection__verified"
                            />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {Number(collection.floor).toFixed(2)} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {collection.totalvolume} ETH
                          </span>
                        </div>
                      </Link>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


