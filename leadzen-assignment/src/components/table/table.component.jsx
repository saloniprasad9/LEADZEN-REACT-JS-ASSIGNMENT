import React, { useEffect, useState } from 'react';
import Page from '../pages/pages.component';
import Row from '../rows/rows.component';
import './table.styles.css';


const Table = () => {
    const [info, setInfo] = useState([]);
    const [count, setCount] = useState(0);
    const [infoPerPage, setInfoPerPage] = useState(10);
    const [previousPageUrl, setPreviousPageUrl] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://swapi.dev/api/people");
    const [nextPageUrl, setNextPageUrl] = useState("");

    useEffect(() => {
        fetch(currentPageUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log(data.results);
                setCount(data.count);
                setPreviousPageUrl(data.previous);
                setNextPageUrl(data.next);
                setInfo(data.results)
            })
    }, [currentPageUrl]);
    return (
        <div className='container'>
            <table>
                <tbody>
                    {info.map((i, index) => <Row key={index} info={i} />)}
                </tbody>
            </table>
            <Page setCurrentPageUrl={setCurrentPageUrl} currentPageUrl={currentPageUrl} previousPageUrl={previousPageUrl} nextPageUrl={nextPageUrl} count={count} infoPerPage = {infoPerPage}/>
        </div>
    );
};

export default Table;