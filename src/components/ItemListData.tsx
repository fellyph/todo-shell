import React from 'react';
import User from '../interfaces/User';

const ItemListData = (prop: {user:User}): any => {

    return(<div className="itemData">{prop.user.name} - {prop.user.email}</div>)
}

export default ItemListData;