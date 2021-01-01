import React from 'react';
import 'tachyons'; 
import {useState, useEffect} from 'react';
import './Clock.css'; 


const Clock = () => {

    const newYear = new Date('2021-12-31T23:59:59').getTime();
    let [state, changeState]  = useState({time: new Date().getTime()}); 
    useEffect(()=> {
        const timer = setTimeout(() => {
           changeState({time: new Date().getTime()});
          }, 1000);
          return () => clearTimeout(timer);
    }, [state.time])
    
    return(
        <div>

            <article className="Clock-Font vh-100 dt w-100">

                <div className="dtc v-mid tc ph3 ph4-l">
                    <h3 style={{fontSize:"80px"}}>Time till 2022</h3>
                    <h1>
                        <strong style={{fontSize:'100px'}}>
                            {`${ Math.floor((newYear - state.time) / (1000 * 60 * 60 * 24))} days and ${Math.floor(((newYear - state.time) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}:${Math.floor(((newYear - state.time)  % (1000 * 60 * 60)) / (1000 * 60))}:${Math.floor(((newYear - state.time)% (1000 * 60)) / 1000)}`}
                        </strong>
                    </h1>
                </div>
            </article>
        </div>

    )
}

export default Clock;