import React, { useEffect, useRef, useState } from 'react';
import slideImg from "../../assets/img/slideshow.png";
import noImg from "../../assets/img/img-notfound/image-notavailable.png";
import filterIcon from "../../assets/icons/Filter.svg";
import searchIcon from "../../assets/icons/Search.svg";
import "./style.scss";
import ProductCart from '../../components/product-cart';
import { getAllProduct } from '../../services/ProductService';
import { getAllBrands } from '../../services/BrandService';

function Home(props) {

    const [filterModalStatus, setFilterModalStatus] = useState(false);
    const [brandList, setBrandList] = useState([]);
    const [productList, setProductList] = useState([]);

    const fetchData = async () => {
        const [brands, products] = await Promise.all([
            getAllBrands(),
            getAllProduct()
        ]);
        setBrandList([...brands]);
        setProductList([...products]);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='container home'>
            <div className="home__container">
                <div className="slideshow">
                    <div className="slideshow__inner">
                        <div className="slideshow__item">
                            <picture>
                                <img src={slideImg} alt="loading" className="slideshow__img" />
                            </picture>
                        </div>
                    </div>
                </div>

                <section className="home__container">
                    <div className="home__row">
                        <h2 className="home__heading">Brands</h2>
                    </div>
                    <div className="home__cate row row-cols-3 row-cols-md-1 g-3">
                        {
                            brandList.map((item, idx) => (
                                <div className="col" key={idx}>
                                    <a href="#!">
                                        <article className="cate__item">
                                            <img src={item.brandImg || noImg} alt="loading" className="cate__item--thumb" />
                                            <div className="cate__item--info">
                                                <h3 className="cate__item--heading">{item.brandName}</h3>
                                                <p className="cate__item--desc">New sumatra mandeling coffe blend</p>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className="home__container">
                    <div className="home__row">
                        <h2 className="home__heading">Feature products</h2>
                        <div className="filter-wrap">
                            <button className="filter-btn" onClick={() => setFilterModalStatus(pre => !pre)}>
                                Filter
                                <img src={filterIcon} alt="Loading" className="filter-btn__icon icon" />
                            </button>
                            <div className={!filterModalStatus ? "filter hide" : "filter"} id="filter__menu">
                                <h3 className="filter__heading">Filter</h3>
                                <form action="" className="filter__form">
                                    <div className="filter__row filter__row--res">
                                        <div className="form__block">
                                            <label className="form__label">Price</label>
                                            <div className="form__action">
                                                <div className="form__slider"></div>
                                            </div>
                                            <div className="form__horizontal">
                                                <div className="">
                                                    <label className="form__label form__label--small">Minimum</label>
                                                    <div className="form__text-input form__text-input--small">
                                                        <input type="text" className="form__input" defaultValue="$30.00"/>
                                                    </div>
                                                </div>
                                                <div>
                                                        <label className="form__label form__label--small">Maximum</label>
                                                        <div className="form__text-input form__text-input--small">
                                                            <input type="text" className="form__input" defaultValue="$100.00"/>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="filter--seperate"></div>
                                        <div className="form__block">
                                            <label className="form__label">Size/Weight</label>
                                            <div className="form__action">
                                                <div className="form__select">
                                                    <div className="form__select--item">
                                                        <span className="form__select--item--title">500g</span>
                                                        <img src="./assets/icons/arrow-down.svg" alt="" className="form__select--item--arrow icon" />
                                                    </div>
                                                    <div className="form__select--item">
                                                        <span className="form__select--item--title">Gram</span>
                                                        <img src="./assets/icons/arrow-down.svg" alt="" className="form__select--item--arrow icon" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form__tags">
                                                <button className="form--tag">Small</button>
                                                <button className="form--tag">Medium</button>
                                                <button className="form--tag">Large</button>
                                            </div>
                                        </div>
                                        <div className="filter--seperate"></div>
                                        <div className="form__block">
                                            <label className="form__label">Brand</label>
                                            <div className="form__action">
                                                <div className="form__text-input">
                                                    <input type="text" className="form__input" placeholder="Search brand name" />
                                                    <img src={searchIcon} alt="Loading" className="form__input-icon icon" />
                                                </div>
                                            </div>
                                            <div className="form__tags">
                                                <button className="form--tag">Lavazza</button>
                                                <button className="form--tag">Nescafe</button>
                                                <button className="form--tag">Starbucks</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="filter__row  filter__form--footer">
                                        <button onClick={() => setFilterModalStatus(pre => !pre)} className="btn btn--text filter-btn-text">Cancel</button>
                                        <button type='button' className="btn btn--primary filter-btn-submit">Show Result</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
                        <div className="col">
                            <ProductCart />
                        </div>
                        <div className="col">
                            <ProductCart />
                        </div>
                        <div className="col">
                            <ProductCart />
                        </div>
                        <div className="col">
                            <ProductCart />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;