import * as React from "react"
import * as style from "./banner.module.scss";
import bannerPicture from "../../../images/hero-img.jpeg";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Pagination, Scrollbar} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
    return (
        <div className={style.bannerStyle}>
            <div className="container">
                <Swiper
                    modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="wrap-banner">
                            <div className="description">
                                <ul className="category">
                                    <li>metabolic health</li>
                                    <li>ultimate guides</li>
                                </ul>
                                <h1>The ultimate guide to metabolic health</h1>
                                <p className="author">Casey Means, MD</p>
                                <time>11 min read</time>
                            </div>
                            <div className="banner-img">
                                <img src={bannerPicture} alt="banner"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrap-banner">
                            <div className="description">
                                <ul className="category">
                                    <li>metabolic health</li>
                                    <li>ultimate guides</li>
                                </ul>
                                <h1>The ultimate guide to metabolic health</h1>
                                <p className="author">Casey Means, MD</p>
                                <time>11 min read</time>
                            </div>
                            <div className="banner-img">
                                <img src={bannerPicture} alt="banner"/>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="wrap-banner">
                            <div className="description">
                                <ul className="category">
                                    <li>metabolic health</li>
                                    <li>ultimate guides</li>
                                </ul>
                                <h1>The ultimate guide to metabolic health</h1>
                                <p className="author">Casey Means, MD</p>
                                <time>11 min read</time>
                            </div>
                            <div className="banner-img">
                                <img src={bannerPicture} alt="banner"/>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>



            </div>
        </div>
    )
}

export default Banner
