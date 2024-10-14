import React from 'react';

const Recipe = ({recipe}) => {
    console.log(recipe);
    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories} = recipe;
    return (
        <div>
            <div className="cards_recipe p-4 border border-1 rounded-xl ">
                            <div className='mb-3'>
                                <img src={recipe_image} className='rounded-2xl' alt="" />
                            </div>
                            <div className='border-b-[1px] pb-4'>
                                <h3 className='text-[1.5rem] font-bold mb-2'>{recipe_name}</h3>
                                <p className='text-[#878787]'>{short_description}</p>
                            </div>
                            <div className='border-b-[1px] pb-4'>
                                <h1 className='text-[1.25rem] font-bold my-4'>Ingredients: {ingredients.length}</h1>
                                <ul className='list-disc ml-6 text-[#878787]'>
                                    <li>500g ground beef </li>
                                    <li> 1 onion, chopped </li>
                                    <li> 2 cloves garlic, minced</li>
                                </ul>
                            </div>

                            <div className='py-4 flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <img src="clock.png" className='mr-1' alt="" />
                                    <p className='text-[#878787]'>{preparing_time} minutes</p>
                                </div>
                                <div className='flex items-center'>
                                    <img src="fire.png" className='mr-1' alt="" />
                                    <p className='text-[#878787]'>{calories} calories</p>
                                </div>
                            </div>

                            <div>
                                <button className='bg-[#0be58a] font-semibold px-6 py-3 rounded-full'>Want to cook</button>
                            </div>
                        </div>
        </div>
    );
};

export default Recipe;