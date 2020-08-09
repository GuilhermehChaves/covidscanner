import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Header from '../components/Header';
import TotalCases from '../components/TotalCases';
import covidsearcher from '../api/covidsearcher';

export default function Country() {
    let { country } = useParams();

    const [total, setTotal] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const totalResponse = await covidsearcher.get(`/v1/countries/${country}/total`);
            setTotal(totalResponse.data);
        }
        fetchData();
    }, []);


    console.log(total);

    return (
        <React.Fragment>
            <Header />
            <main>

                <TotalCases
                    confirmed={total === null ? null : parseInt(total.confirmed)}
                    deaths={total === null ? null : parseInt(total.deaths)}
                    recovered={total === null ? null : parseInt(total.recovered)} />

                <section className="statistics">
                    <div className="container">
                        {country}
                    </div>
                </section>
            </main>
            {/* <div>Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div> */}
        </React.Fragment>
    );
}