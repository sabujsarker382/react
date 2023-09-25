

const Info = (props) => {
    const {titleText,titleDes}=props;
    return (
        
         <div className='card'>
        
        <h2 className='cardtitle'>{titleText}</h2>
        <p className='description'>{titleDes}</p>
  
       </div>
    );
};

export default Info;