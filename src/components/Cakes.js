

import{useState} from 'react'
import OneCake from './OneCake'
const Cakes=()=>{

    const [myCakes, setMyCakes] = useState([{

          name:'Vanila',
          id:0,
          qnty:3,
          isAvailable:true
    },{

        name:'ButterScotch',
          id:1,
          qnty:1,
          isAvailable:true

    },{

        name:'Chocolate',
          id:2,
          qnty:0,
          isAvailable:false

    }])

    //buy cake
   const buyCake=(id)=>{
   //make copy of cakes:pure functions
   const copy_cakes=[...myCakes] //{...myObj}

//find the index of the cake which is to be modified.
 const cakeIndex=copy_cakes.findIndex(eachCake=>eachCake.id===id)
 copy_cakes[cakeIndex].qnty=copy_cakes[cakeIndex].qnty-1

 if(copy_cakes[cakeIndex].qnty<1){
  copy_cakes[cakeIndex].isAvailable=false
 }

 //update actual mycakes with copy

 setMyCakes(copy_cakes)


}




    return(<div>
       {/* My Cake Name:{myCakes[0].name} */}

       {/* {myCakes[0].name}<br/> */}
       {/* {myCakes[1].name}<br/> */}
       {/* {myCakes[2].name} */}
       {myCakes.map(eachCake=> <OneCake key={eachCake.id}{...eachCake} buy={buyCake} //only when key of object is same as key of component
                                        //  qnty={eachCake.qnty}
                                        //  isAvailable={eachCake.isAvailable}
                                        // name={eachCake.name}
                                         />
       )}
    </div>
        
    );
}

export default Cakes; 