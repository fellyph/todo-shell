import User from '../interfaces/User';
import ItemListData from './ItemListData';

const ListData = ( prop: {data: Array<User>} ) => {
    console.debug(prop.data);
    
    return(
    <div className="listData">
        {prop.data.map(( item:User ) => (<ItemListData key={item.id} user={item} />))} 
    </div>
    );
};

export default ListData;