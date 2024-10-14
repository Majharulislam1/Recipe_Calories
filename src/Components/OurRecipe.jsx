import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import Cooked from './Cooked';
import Preparing  from './Preparing';

const OurRecipe = () => {

    const [recipe, setRecipe] = useState([]);
    const [cook, setCook] = useState([]);
    const [Preparings,setPreparing] = useState([]);
    const [Time,setTime] = useState(0);
    const [calorie,setCalorie] = useState(0);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipe(data));
    }, [])


    const handle_Cooks = (id) => {

        const recipes = recipe.find(recipe_item => recipe_item.recipe_id == id);
        const newRecipe = [...cook, recipes];
        setCook(newRecipe);
    }



    const handle_Preparing = (id) => {

        for(let items of cook){
            if(items.recipe_id === id){
              let newTime =  items.preparing_time + Time;
              setTime(newTime);
            }
        }

        const recipes = cook.find(recipe_item => recipe_item.recipe_id == id);
        if(recipes){
            const newTime = recipes.preparing_time + Time;
            setTime(newTime);
        }
        if(recipes){
            const newCalorie = recipes.calories + calorie;
            setCalorie(newCalorie);
        }
        const newPreparing = [...Preparings, recipes];
        setPreparing(newPreparing);

        
        const index = cook.findIndex(cook_item => cook_item.recipe_id === id);


        if (index !== -1) {
            cook.splice(index, 1);
        }



    }


    

    


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
                            recipe.map(recipe_item => <Recipe handle_Cooks={handle_Cooks} recipe={recipe_item} key={recipe_item.recipe_id}></Recipe>)
                        }
                    </div>
                </div>



                <div className='w-[30%]'>
                    <div className='border rounded-xl border-1 p-4'>
                        <div className='text-center border-b-[1px] pb-4 w-8/12 mx-auto'>
                            <h2 className='text-[1.5rem] font-bold '>Want to cook: {cook.length}</h2>
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
                                    {
                                        cook.map((cook_item, index) => <Cooked cook_item={cook_item} handle_Preparing={handle_Preparing} cnt={index + 1} key={cook_item.recipe_id}></Cooked>)
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className='text-center border-b-[1px] py-4 w-8/12 mx-auto'>
                            <h2 className='text-[1.5rem] font-bold '>Currently cooking: {Preparings.length}</h2>
                        </div>

                        <div className="overflow-x-auto mt-4">
                            <table className="table  table-zebra w-full">
                                
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
                                   
                                   {
                                      Preparings.map((cook_item, index) => <Preparing  cook_item={cook_item} cnt={index + 1} key={cook_item.recipe_id}></Preparing>)
                                   }
                                  
                                </tbody>
                            </table>
                        </div>


                        <div className='mt-4'>
                            <div>
                                <p className='font-bold bg-[#b8b8b85b] w-[50%] rounded-lg p-2 mb-4'>Total time: {Time} minutes</p>
                                <p className='font-bold bg-[#b8b8b85b] w-[50%] rounded-lg p-2'>Total time: {calorie} minutes</p>

                            </div>
                        </div>


                    </div>
                </div>


            </div>
            <div className='mb-4'>

            </div>
        </>
    );
};

export default OurRecipe;