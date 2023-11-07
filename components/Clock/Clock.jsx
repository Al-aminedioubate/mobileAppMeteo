import { useEffect, useState } from "react";
import { nowToHHMM } from "../../services/Date-service";
import { Txt } from "../Txt/Txt";
import {s} from "./Clock.style";

export function Clock(){
    const [time, setTime] = useState(nowToHHMM());      
    
    useEffect(()=>{                         //cette function va permettre a notre time de se rafrechir a chaque seconde avec l'aide de notre State..
        const interval = setInterval(() => {
            setTime(nowToHHMM());
        }, 1000);

        return () =>{
            clearInterval(interval);       //nettoyage de l'interval
        };
    },[]);

   return (
        <>
            <Txt style={s.time}>{time}</Txt>
        </> 
   );
}