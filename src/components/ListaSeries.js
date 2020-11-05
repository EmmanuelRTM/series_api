import React from 'react'
//import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function ListaSeries({lista}) { 
    const RenderSeries = () => {
        
        const serieScart = lista.map((data)=>{
            const id_serie_url="/serie/"+data.show.id;
            //const linkSerie = "/serie/"+data.show.id
            return(
                <div key={data.show.id} className="located-Serie">
                    <p>
                            
                            </p>
                    <Link to={id_serie_url}>{data.show.name}</Link>
                    {//<p>{data.show.id}</p>
                    }
                    <p>
                            
                            </p>
                    
                        <div className="image-container">
                            <img src={data.show.image.medium} alt="" className="image-view" 
                            ></img>
                        </div>
                        <p>

                        </p>
                        
                    

                    
                            {//Genres(data.show)}
                            }
                            {//Summary(data.show)}
                            }
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
