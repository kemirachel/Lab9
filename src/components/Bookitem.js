
import Card from 'react-bootstrap/Card';

{/*Added functional component called bookItems to application*/}

function Bookitem(props){

    {/*added a map function to split the array of books
into individual books. */}

    return(
        <div>
     {/*Added card comonents to application*/}

 <Card>
      <Card.Body>{props.mybook.title}</Card.Body>
 </Card>

    <img src={props.mybook.cover}></img>
    <p>{props.mybook.author}</p>
        
        </div>
    );


}
export default Bookitem;