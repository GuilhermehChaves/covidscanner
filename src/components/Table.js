import React from 'react';

export default function Table({ countries }) {
    var data = null;

    if (countries) {
        data = Object.keys(countries).map(function (country) {
            return (
                <tr key={countries[country].country_region}>
                    <td>
                        <a className="covid-table__link"
                            href={`/country/${countries[country].country_region.toLowerCase().replace(new RegExp(" ", "g"), "_")}`}
                        >
                            {countries[country].country_region}
                        </a>
                    </td>
                    <td>{countries[country].date}</td>
                    <td>{countries[country].confirmed === "" ? "" : parseFloat(countries[country].confirmed)}</td>
                    <td>{countries[country].deaths === "" ? "" : parseFloat(countries[country].deaths)}</td>
                    <td>{countries[country].recovered === "" ? "" : parseFloat(countries[country].recovered)}</td>
                    <td>{countries[country].active === "" ? "" : parseFloat(countries[country].active)}</td>
                </tr>
            );
        });
    }

    return (
        <table className="covid-table">
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
