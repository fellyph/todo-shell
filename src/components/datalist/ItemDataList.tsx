import React from 'react';
import User from '../../interfaces/User';

const ItemDataList = (prop: {user:User}): any => {

    return(<div className="itemData">{prop.user.name} - {prop.user.email}</div>)
}

export default ItemDataList;