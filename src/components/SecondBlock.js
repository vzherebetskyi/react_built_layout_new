import React, { useState, createRef, useRef } from 'react';

import {
  second_block_left_title,
  second_block_left_first_article,
  second_block_left_second_article,
  placeholders,
  label_first,
  label_second,
  contact_us,
  second_block_right_title,
  inputsPlaceholders,
  search_message,
  findit_message,
  automobiles_array,
} from './constants';
import { ExpandIcon } from '../assets/images/images';

const SecondBlock = () => {

const [inputValues, setInputValues] = useState({ firstname: '', lastname: '', email: '', phone: '' });
const [menuOpened, setMenuOpened] = useState(false);
const [automobileSelected, setAutomobileSelected] = useState(inputsPlaceholders[3]);

const inputsRef = useRef(Object.keys(inputValues).map(() => createRef()));

const inPutChange = event => {
  const { name, value } = event.target;
  setInputValues({ ...inputValues, [name]: value })
}

const changeAutomobile = automobile => {
  setAutomobileSelected(automobile);
  setMenuOpened(false);
} 
    
return (
  <section className="second-block__wrapper">
    <div className="second-block__content-container">
      <div className="second-block__content-container__left">
        <p className="second-block-left__title">{second_block_left_title}</p>
        <p className="second-block-left__article">{second_block_left_first_article}</p>
        <p className="second-block-left__article">{second_block_left_second_article}</p>
        <div className="second-block-left__inputs-container">
          <form>
            {
              Object.keys(inputValues).map((inputValue, index) => (
                <div className="input-placeholder" key={inputValue}>
                  <input
                    autoComplete="off"
                    className="second-block-left__input"
                    type='text'
                    name={inputValue}
                    value={inputValues.inputValue}
                    onChange={inPutChange}
                    ref={inputsRef.current[index]}
                  />
                  <p onClick={() => inputsRef.current[index].current.focus()} style={{ display: inputValues[inputValue].length > 0 ? 'none' : 'block' }} className="placeholder-element">{`${placeholders[index]}`} {index < 3 && <span>*</span>}</p>
              </div>
              ))
            }
          </form>
          <div className="second-block-left__radio-buttons-container">
            <input type="radio" id="email" name="contacttype" value="email" />
            <label htmlFor="email">{label_first}</label>
            <input type="radio" id="phone" name="contacttype" value="phone" />
            <label htmlFor="phone">{label_second}</label>
          </div>
          <button className="second-block-left__contact-button">{contact_us}</button>
        </div>
      </div>
      <div className="second-block__content-container__right">
        <div className="second-block-right__title">
          <p>{second_block_right_title}</p>
        </div>
        <div className="second-block-right__flex-container-first">
          <div className="second-block-right__input-container">
            <div className="second-block-right__input-container__input" />
            <p className="placeholder-element placeholder-right">{inputsPlaceholders[0]}<span>*</span></p>
            <div className="second-block__expand-icon">
                <ExpandIcon />
              </div>
          </div>
            <div className="second-block-right__calendar-container">
              <div className="second-block-right__calendar-input">
                <div className="second-block-right__calendar-input__input-field" />
                <p className="placeholder-element placeholder-right">{inputsPlaceholders[1]}<span>*</span></p>
                <div className="second-block__expand-icon">
                  <ExpandIcon />
                </div>
             </div>
             <div className="divider">-</div>
             <div className="second-block-right__calendar-input">
                <div className="second-block-right__calendar-input__input-field" />
                <p className="placeholder-element placeholder-right">{inputsPlaceholders[2]}<span>*</span></p>
                <div className="second-block__expand-icon">
                  <ExpandIcon />
                </div>
             </div>
            </div>
        </div>
        <div className="second-block-right__flex-container-second">
         <div className="second-block-right__input-container">
            <div className="second-block-right__input-container__input" />
            <p className="placeholder-element placeholder-right">{automobileSelected}<span>*</span></p>
            <div onClick={() => setMenuOpened(!menuOpened)} className={`second-block__expand-icon expand-clickable ${menuOpened && 'arrow-turned'}`}>
              <ExpandIcon />
            </div>
            {menuOpened &&
              <div className="second-block__aoutomobiles-menu">
                {
                  automobiles_array.map((automobile) => (
                  <div key={automobile}>
                    <p onClick={() => changeAutomobile(automobile)}>{automobile}</p>
                  </div>
                  ))
                }
              </div>
            }
          </div>
          <div className="second-block-right__input-container">
            <div className="second-block-right__input-container__input" />
            <p className="placeholder-element placeholder-right">{inputsPlaceholders[4]}<span>*</span></p>
            <div className="second-block__expand-icon">
              <ExpandIcon />
            </div>
          </div>
        </div>
        <div className="second-block-right__flex-container-third">
          <div className="second-block-right__input-container">
            <div className="second-block-right__input-container__input" />
            <p className="placeholder-element placeholder-right">{inputsPlaceholders[5]}<span>*</span></p>
            <div className="second-block__expand-icon">
              <ExpandIcon />
            </div>
          </div>
            <div className="second-block-right__calendar-container">
              <div className="second-block-right__calendar-input">
                <div className="second-block-right__calendar-input__input-field" />
                <p className="placeholder-element placeholder-right">{inputsPlaceholders[6]}<span>*</span></p>
                <div className="second-block__expand-icon">
                  <ExpandIcon />
                </div>
             </div>
             <div className="second-block-right__calendar-input">
                <div className="second-block-right__calendar-input__input-field" />
                <p className="placeholder-element placeholder-right">{inputsPlaceholders[7]}<span>*</span></p>
                <div className="second-block__expand-icon">
                  <ExpandIcon />
                </div>
             </div>
            </div>        
        </div>
        <div className="second-block-right__flex-container-fourth">
          <div className="second-block-right__input-container-full">
            <div className="second-block-right__input-container-full__input" />
            <p className="placeholder-element placeholder-right">{inputsPlaceholders[8]}<span>*</span></p>
            <div className="second-block__expand-icon">
              <ExpandIcon />
            </div>
          </div>
        </div>
        <div className="second-block__search-message">
          <p>{search_message}</p>
        </div>
        <button className="second-block-right__contact-button">{findit_message}</button>
      </div>
    </div>
  </section>
)
};

export default SecondBlock;
