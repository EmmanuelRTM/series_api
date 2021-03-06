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
            axios.get(URL_Serie+id_serie+"/episodes")
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
            
        const showEpisodes = (episo)=>{
            return(
                episo.map((e,i)=>{   
                    return (
                        <tr key={i} className="located-Episode">
                            <td>{e.season} X {e.number} : {e.name}</td>
                            <td>{e.airdate}</td>
                        </tr>
                    )
                })
            )
        }
        const newHeaderofRow=()=>{
            return (

                <tr>
                    <th scope="row">Episode</th>
                    <th>Released date</th>
                </tr>

            )
        }
            return (
                <table className="egt">
                    <tbody>
                            {newHeaderofRow()}
                            {showEpisodes(data)}
                    </tbody>
                </table>

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

export default Seasons;