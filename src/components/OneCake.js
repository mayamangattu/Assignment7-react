

const OneCake=(props)=>{

   //const wrapperBuy=(e)=>{
     // props.buy(props.id)
  // }

   

return(
<div>
          Name: {props.name} <br/>
           Qty: {props.qnty} <br/>
           In Stock: {props.isAvailable?'In-Stock':'Out-of-Stock'} <br/>
           <button onClick={e=>{props.buy(props.id) }} disabled={!props.isAvailable}>Buy cake</button>
            

        <hr/>

           </div>
)}
           export default OneCake