const date=new Date();
const dateName=date.getDate();
const dateTime=date.getMonth();
const dateYear=date.getFullYear();


function Card(props){
 const {titleText,titleDes}=props;
return(
    <div className='card'>
        
          <h2 className='cardtitle'>{props.titleText}</h2>
          <p className='description'>{props.titleDes}</p>
     <p className='date'>{dateName+ "/" + dateTime + "/"+dateYear}</p>
         </div>
)
}


export default Card;