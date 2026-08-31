import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Skeleton from '../ui/Skeleton.jsx';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function PopularCollections() {
  const [popularCollections, setPopularCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPopularCollections() {
    setLoading(true);
    const { data } = await axios.get(
      'https://remote-internship-api-production.up.railway.app/popularCollections',
    );

    const collections = data.data;

    setPopularCollections(collections);
    setLoading(false);
  }

  useEffect(() => {
    fetchPopularCollections();
  }, []);

  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={16}
              slidesPerView={6}
              loop
            >
              {loading
                ? new Array(6).fill(0).map((_, index) => (
                    <SwiperSlide key={index}>
                      <div className="collection-column">
                        <Skeleton width="100%" height="180px" />
                      </div>
                    </SwiperSlide>
                  ))
                : popularCollections.map((collection) => (
                    <SwiperSlide key={collection.collectionId}>
                      <div className="collection-column">
                        <Link
                          to={`/collection/${collection.id}`}
                          className="collection"
                        >
                          <img
                            src={collection.imageLink}
                            alt={collection.title}
                            className="collection__img"
                          />
                          <div className="collection__info">
                            <h3 className="collection__name">
                              {collection.title}
                            </h3>
                            <div className="collection__stats">
                              <div className="collection__stat">
                                <span className="collection__stat__label">
                                  Floor
                                </span>
                                <span className="collection__stat__data">
                                  {Number(collection.floor).toFixed(2)}
                                </span>
                              </div>
                              <div className="collection__stat">
                                <span className="collection__stat__label">
                                  Total Volume
                                </span>
                                <span className="collection__stat__data">
                                  {collection.totalVolume}ETH
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
