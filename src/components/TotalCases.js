import React from 'react';

export default function TotalCases({ confirmed, deaths, recovered }) {
    return (
        <section className="total">
            <div className="container">
                <div className="total__group">
                    <img className="total__icon" src="/icons/svg/037-medical-mask.svg"/>
                    <span className="total__title">Confirmed: </span>
                    <h1 className="total__item total__item--confirmed">{confirmed}</h1>
                </div>

                <div className="total__group">
                    <img className="total__icon" src="/icons/svg/020-coronavirus.svg"/>
                    <span className="total__title">Deaths: </span>
                    <h1 className="total__item total__item--deaths">{deaths}</h1>
                </div>
                
                <div className="total__group">
                    <img className="total__icon" src="/icons/svg/008-hand.svg"/>
                    <span className="total__title">Recovered: </span>
                    <h1 className="total__item total__item--recovered">{recovered}</h1>
                </div>
            </div>
        </section>
    );
}
