import React from 'react';

export default function CountryTable({ countries }) {
    var data = null;

    if (countries) {
        data = Object.keys(countries).map(function (month) {
            return (countries[month].map(function(country) {
                return (
                    <tr key={country.date}>
                    <td>{country.country_region}</td>
                    <td>{country.date}</td>
                    <td>{country.confirmed === "" ? "" : parseFloat(country.confirmed)}</td>
                    <td>{country.deaths === "" ? "" : parseFloat(country.deaths)}</td>
                    <td>{country.recovered === "" ? "" : parseFloat(country.recovered)}</td>
                    <td>{country.active === "" ? "" : parseFloat(country.active)}</td>
                    </tr>
                )
            }));
        });
    }

    return (
        <table className="country-table">
            <tbody>
                <tr>
                    <th>Country</th>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                    <th>Active</th>
                </tr>
                {data === null ? null : data}
            </tbody>
        </table>
    );
}