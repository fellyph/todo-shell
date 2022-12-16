import User from '../../interfaces/User';
import ItemDataList from './ItemDataList';

const DataList = ( prop: {data: Array<User>} ) => {
    console.debug(prop.data);
    
    return(
    <div className="listData">
        {prop.data.map(( item:User ) => (<ItemDataList key={item.id} user={item} />))} 
    </div>
    );
};

export default DataList;