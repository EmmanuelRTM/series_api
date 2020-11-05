import React, {useState,useEffect}from 'react';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios'

function Seasons(){

    const history = useHistory();
    const params= useParams();
    const [info,setInfo]=useState();
    const URL_Serie="http://api.tvmaze.com/shows/"
    //const altLink="https://static.tvmaze.com/uploads/images/medium_portrait/237/592575.jpg";

    function getInformation(id_serie){
            axios.get(URL_Serie+id_serie)
                .then((resp)=>{
                    console.log(resp.status)
                if(resp.status === 200){
    
                    let dataFromSerie=resp.data;
                    console.log(dataFromSerie)
                    setInfo(dataFromSerie);
    
                }else{
                    console.log(resp.status, " error consulting serie")
                    return resp.status;
                }
                }).catch((err)=>{
                    console.log(err)
                    return err;
                });
    }

    useEffect(() => {
        console.log('Se ejecuto useEffect');
        getInformation(params.idSerie);

    }, [params.idSerie]);



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
    const Image_Serie= (obj)=>{
        //console.log(obj.image)
        return (
            <div className="image-container">
                <img src={
                    obj.image.medium
                } alt="" className="image-view" 
                />
            </div>
        )
    }

    const RenderSerie = (data) => {
            
            //const linkSerie = "/serie/"+data.show.id
            
            return(
                <div key={data.id} className="located-Serie">
                    <h3> {data.name}</h3>
                        {
                        Image_Serie(data)
                        }
    <p>

    </p>
                        {
                        Genres(data)
                        }
<p>

</p>
                        {
                        Summary(data)
                        }
                        <p>

                        </p>
                </div>
            )
    }

    return (
        <div>
            {
            info ===undefined ? <h1>loading...</h1> : RenderSerie(info)
            }
            <button type="button" onClick={()=>{
                history.push('/')
            }}>Home
            </button>
        </div>
    )
}

export default Seasons;