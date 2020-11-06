import React, {useState,useEffect}from 'react';
import { useHistory } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios'

function Cast(){

    const history = useHistory();
    const params= useParams();
    const [info,setInfo]=useState();
    const URL_Serie="http://api.tvmaze.com/shows/"
    //const altLink="https://static.tvmaze.com/uploads/images/medium_portrait/237/592575.jpg";

    function getInformation(id_serie){
            axios.get(URL_Serie+id_serie+"/cast")
                .then((resp)=>{
                    console.log(resp.status)
                if(resp.status === 200){
    
                    let dataFromSerie=resp.data;
                    //console.log(dataFromSerie)
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



    

    const RenderTable= (data) => {
        return (
            data.map((data,i)=>{
                return(
                    <div key ={i} className="image-container">
                        <img src={data.person.image.medium} alt="" className="image-view"></img>
                        <h3>{data.person.name}</h3>
                        <h5>Character: {data.character.name}</h5>
                    </div>
                );
            })
        )
    }

    return (
        <div>
            {
            info ===undefined ? <h1>loading...</h1> : RenderTable(info)
            }
            <button type="button" onClick={()=>{
                history.push(`/serie/${params.idSerie}`)
            }}>Back
            </button>
        </div>
    )
}

export default Cast;