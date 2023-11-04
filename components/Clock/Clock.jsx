import { nowToHHMM } from "../../services/Date-service";
import { Txt } from "../Txt/Txt";
import {s} from "./Clock.style";

export function Clock(){
   return <>
   <Txt style={s.time}>{nowToHHMM()}</Txt>
   </> ;
}