import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Table from '../components/Table';
import TotalCases from '../components/TotalCases';
import SearchBar from '../components/SearchBar';

import covidsearcher from '../api/covidsearcher';

export default function Main() {
    const [countries, setCountries] = useState(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const countryResponse = await covidsearcher.get('/v1/countries/total');
            const totalResponse = await covidsearcher.get('/v1/world/total');

            setCountries(countryResponse.data);
            setTotal(totalResponse.data);
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <main>
                <SearchBar />
                
                <TotalCases
                    confirmed={total === null ? null : parseInt(total.confirmed)}
                    deaths={total === null ? null : parseInt(total.deaths)}
                    recovered={total === null ? null : parseInt(total.recovered)} />

                <section className="statistics">
                    <div className="container">
                        <Table countries={countries} />
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="container">
                    <div>
                        <p>
                            Ícones feitos por <a href="https://www.flaticon.com/br/autores/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a>
                        </p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
