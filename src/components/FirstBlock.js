import React from 'react';

import { audiImage } from '../assets/images/images';
import {
  date_type,
  subtype,
  price_title_1,
  price_subtitle_1,
  price_1,
  price_title_2,
  price_subtitle_2,
  price_2,
  first_block_description,
 } from './constants';

const FirstBlock = () => (
  <section className="first-block_wrapper"> 
    <div className="first-block_central-container">
      <div className="first-block_central-container__left-part">
        <img src={audiImage} alt="AudiQ5" />
      </div>
      <div className="first-block_central-container__right-part">
        <div className="first-block_right-first-line">
          <p className="first-block_right-first-line__main">{date_type}</p>
          <p className="first-block_right-first-line__secondary">{subtype}</p>
        </div>
        <div className="first-block_right-second-line">
          <div className="first-block_right-second-line__info-block">
            <p className="first-block_right-second-line__info-block__first">{price_title_1}</p>
            <p className="first-block_right-second-line__info-block__second">{`${price_1[0]}`}<span>{`${price_1.slice(1,4)}`}</span>{`${price_1.slice(4, price_1.length)}`}</p>
            <p className="first-block_right-second-line__info-block__third">{price_subtitle_1}</p>
          </div>
          <div className="first-block_right-second-line__info-block">
            <p className="first-block_right-second-line__info-block__first">{price_title_2}</p>
            <p className="first-block_right-second-line__info-block__second">{`${price_2[0]}`}<span>{`${price_2.slice(1,4)}`}</span>{`${price_2.slice(4, price_1.length)}`}</p>
            <p className="first-block_right-second-line__info-block__third">{price_subtitle_2}</p>
          </div>
        </div>
        <div className="first-block_right-divider-line" />
        <div className="first-block_right-description">
          <p>{first_block_description}</p>
        </div>
      </div>
    </div>
  </section>
);

export default FirstBlock;
