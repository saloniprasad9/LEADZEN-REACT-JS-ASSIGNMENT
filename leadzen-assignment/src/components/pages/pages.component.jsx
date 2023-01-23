import React from 'react';
import './pages.styles.css';

const Page = ({ setCurrentPageUrl,currentPageUrl, previousPageUrl, nextPageUrl, count,infoPerPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(count / infoPerPage); i++) {
        pageNumbers.push(i)
    }
    const page = (number) => {
        if(number === 1){
            setCurrentPageUrl("https://swapi.dev/api/people")
        }
        else{
            setCurrentPageUrl(`https://swapi.dev/api/people/?page=${number}`)
        }
    }
    return (
        <div className='page'>
            <button 
            onClick={() => previousPageUrl ?setCurrentPageUrl(previousPageUrl) : setCurrentPageUrl(currentPageUrl)}>‹</button>
            <ul>
                {pageNumbers.map(number =>
                    <li key={number}>
                        <button onClick={()=> page(number)} >{number}</button>
                    </li>)}
            </ul>
            <button onClick={() => nextPageUrl? setCurrentPageUrl(nextPageUrl) : setCurrentPageUrl(currentPageUrl)}>›</button>
        </div>
    );
};

export default Page;