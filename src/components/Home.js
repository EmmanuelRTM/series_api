import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import Searcher from './Searcher'
import ListaSeries from './ListaSeries';
import axios from 'axios';

function Home({saludo}) {

    const URL_Searcher= "http://api.tvmaze.com/search/shows?q=";
    
    const [consultedSeries, setConsultedSeries] = useState([]);
    const [searchedText,setSearchedText]=useState('');

    function getAllAuthors(query){
        axios.get(URL_Searcher+query)
            .then((resp)=>{
                console.log(resp.status)
            if(resp.status === 200){

                let dataFromSeries=resp.data;
                console.log(dataFromSeries)
                setConsultedSeries(dataFromSeries);

            }else{
                console.log(resp.status, " error consulting series")
                return resp.status;
            }
            }).catch((err)=>{
                console.log(err)
                return err;
            });
    }

    const agregarBusqueda = (search) => {
        setSearchedText(search);
    }
    // Funciona como didMount
    useEffect(() => {
        console.log('Se ejecuto useEffect');
        getAllAuthors(searchedText);

    }, [searchedText]);

    return (
        <div>
            <h1>Este es el Home en funcion</h1>
            <Searcher addSearch={agregarBusqueda}/>
            {consultedSeries.length === 0 ? <h1>Loading...</h1> : <ListaSeries lista={consultedSeries} />}

{//consultedSeries.length === 0 ? <h1>Loading...</h1> : <h1>{consultedSeries.length}</h1>}
}
        </div>
    );
}
Home.propTypes={
    saludo:PropTypes.string
}
export default Home;