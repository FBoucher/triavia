import { type } from 'os';
import React from 'react';
//Types
import { CategoryObject } from '../App';
//Styles
import {  } from './categoryList.styles';

type Props = {
    id: string;
    name: string;
}

// const CategoryList:React.FC<Props> = ({
//     id,
//     name,

// }) => (

//     <select>
//         // option for "all"
//         //loop
//         <option id={id}>
//             {name}
//         </option>
//          namesArray.map(el => (<option value={el}>{el}</option>))
//         //end loop
//     </select>
// );
//  
// export default CategoryList;