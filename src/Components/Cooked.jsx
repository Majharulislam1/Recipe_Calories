import React from 'react';

const Cooked = ({cook_item,cnt,handle_Preparing}) => {
    const {recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = cook_item;
     
    return (
        <>
            <tr className='text-[#878787] border-b-[1px]'>
                <th className='py-3 px-2'>{cnt}</th>
                <td className='py-3 px-2'>{recipe_name}</td>
                <td className='py-3 px-2'>{preparing_time} minutes</td>
                <td className='py-3 px-2'>{calories} calories</td>
                <td className='py-3 px-2'>
                    <button onClick={()=>handle_Preparing(recipe_id)} className='bg-[#0be58a] text-black px-4 py-2 rounded-full'>Preparing</button>
                </td>
            </tr>
        </>
    );
};

export default Cooked;