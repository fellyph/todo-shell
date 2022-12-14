import User from '../interfaces/User';
import ItemListData from './ItemListData';

const ListData = ( data: Array<User> ) => {
    console.debug(data);
    
    return(
    <div className="listData">
        {data.map(( item:User ) => (<ItemListData user={item} />))} 
    </div>
    );
};

export default ListData;