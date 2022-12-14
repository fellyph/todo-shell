import User from '../interfaces/User';

const ItemListData = (user: User) => {

    return(<div>
        {user.userName} - {user.email}
    </div>)
}

export default ItemListData;