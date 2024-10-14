import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const OurRecipe = () => {

    const [recipe,setRecipe] = useState([]);

    useEffect(()=>{
          fetch('recipe.json')
          .then(res => res.json())
          .then(data => setRecipe(data));
    },[])

     


    return (
        <>
            <div>
                <div className='text-center mb-6'>
                    <h1 className='text-[2.5rem] font-bold mb-2'>Our Recipe</h1>
                    <p className='w-6/12 mx-auto text-[#150b2b99]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minus temporibus ratione? Debitis consectetur quod maiores magni fuga impedit aliquam culpa nemo odio laborum nesciunt, eligendi placeat hic neque aut assumenda, nulla dolorum.</p>
                </div>
            </div>


            <div className='flex'>
                <div className='w-[70%] mr-4'>
                    <div className='grid grid-cols-3 gap-6'>
                        {
                            recipe.map(recipe_item => <Recipe recipe={recipe_item} key={recipe_item.recipe_id}></Recipe>)
                        }
                    </div>
                </div>

                 

                <div className='w-[30%]'>
                    <div className='border rounded-xl border-1 p-4'>
                        <div className='text-center border-b-[1px] pb-4 w-8/12 mx-auto'>
                            <h2 className='text-[1.5rem] font-bold '>Want to cook: 01</h2>
                        </div>

                        <div className="overflow-x-auto mt-4">
                            <table className="table  table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-[#878787]'>Name</th>
                                        <th className='text-[#878787]'>Times</th>
                                        <th className='text-[#878787]'>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    <tr className='text-[#878787] border-b-[1px]'>
                                        <th className='py-3 px-2'>1</th>
                                        <td className='py-3 px-2'>Cy Ganderton sdfadsf</td>
                                        <td className='py-3 px-2'>30 minutes</td>
                                        <td className='py-3 px-2'>600 calories</td>
                                        <td className='py-3 px-2'>
                                            <button className='bg-[#0be58a] text-black px-4 py-2 rounded-full'>Preparing</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='text-center border-b-[1px] py-4 w-8/12 mx-auto'>
                            <h2 className='text-[1.5rem] font-bold '>Currently cooking: 02</h2>
                        </div>

                        <div className="overflow-x-auto mt-4">
                            <table className="table  table-zebra w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className='text-[#878787]'>Name</th>
                                        <th className='text-[#878787]'>Times</th>
                                        <th className='text-[#878787]'>Calories</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {/* row 1 */}
                                    <tr className='text-[#878787] border-b-[1px]'>
                                        <th className='py-3 px-2'>1</th>
                                        <td className='py-3 px-2'>Cy Ganderton sdfadsf</td>
                                        <td className='py-3 px-2'>30 minutes</td>
                                        <td className='py-3 px-2'>600 calories</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <div className='mt-4'>
                              <div>
                                  <p className='font-bold bg-[#b8b8b85b] w-[50%] rounded-lg p-2 mb-4'>Total time: 10 minutes</p>
                                  <p className='font-bold bg-[#b8b8b85b] w-[50%] rounded-lg p-2'>Total time: 10 minutes</p>
                                   
                              </div>
                        </div>


                    </div>
                </div>


            </div>
        </>
    );
};

export default OurRecipe;