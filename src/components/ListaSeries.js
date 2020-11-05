import React from 'react'
//import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

function ListaSeries({lista}) {
    //const params = useParams();
    //console.log(params);
    const Genres =(obj)=>{
        return (
            <div>Genres: 
                {obj.genres.map((e,i)=>{
                    return(
                        <u key={i}>
                            <li>
                            {e}
                            </li>

                        </u>
                    )
                })}
            </div>
        )
    }
    
    const Summary= (obj)=>{
        return obj.summary;
    }

    const RenderSeries = () => {
        const serieScart = lista.map((data)=>{
            
            return(
                <div key={data.show.id} className="located-Serie">
                    <h3> {data.show.name}</h3>
                    <div className="image-container">
                        <img src={data.show.image.medium} alt="" className="image-view"></img>
                    </div>
                            {Genres(data.show)}
                            
                            {Summary(data.show)}
                </div>
            )
        })

        return serieScart;
    }

    return (
        <div>
            <RenderSeries/>
        </div>
        )
    //return (<h1>{`Este es un componente individual para el author: ${params.idAuthor}`}</h1>)
}
ListaSeries.propTypes={
    lista: PropTypes.array
}
export default ListaSeries;
