import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4'>
            <div>
                <h2 className='text-[2rem] font-bold'>Recipe Calories</h2>
            </div>
            <div className='flex items-center'>
                <p className='text-[#150b2bb3] mr-4'>Home</p>
                <p className='text-[#150b2bb3] mr-4'>Recipe</p>
                <p className='text-[#150b2bb3] mr-4'>About</p>
                <p className='text-[#150b2bb3] mr-4'>Search</p>
            </div>

            <div className='flex justify-between items-center'>
                 
                 <div className='mr-4'>
                        <label className="input input-bordered flex items-center rounded-full gap-2 px-6 py-2 bg-[#150b2b0d]">
                            <input type="text" className="grow bg-[#f5f5f5] focus:outline-none focus:border-none"   placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                 </div>

                <div>
                        <svg width="48.000000" height="48.000000" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <desc>
                                Created with Pixso.
                            </desc>
                            <defs>
                                <clipPath id="clip3_244">
                                    <rect id="Frame" width="32.000000" height="32.000000" transform="translate(8.000000 8.000000)" fill="white" fillOpacity="0" />
                                </clipPath>
                            </defs>
                            <rect id="Frame 5" rx="24.000000" width="48.000000" height="48.000000" fill="#0BE58A" fillOpacity="1.000000" />
                            <rect id="Frame" width="32.000000" height="32.000000" transform="translate(8.000000 8.000000)" fill="#FFFFFF" fillOpacity="0" />
                            <g clipPath="url(#clip3_244)">
                                <path id="Vector" d="M31.97 32.96C31.04 31.73 29.83 30.73 28.45 30.04C27.07 29.35 25.54 28.99 23.99 29C22.45 28.99 20.92 29.35 19.54 30.04C18.16 30.73 16.95 31.73 16.02 32.96M35.65 26.85C36.23 24.49 36.08 22 35.21 19.73C34.35 17.45 32.81 15.5 30.81 14.12C28.8 12.74 26.43 12 23.99 12C21.56 12 19.19 12.74 17.18 14.12C15.18 15.5 13.64 17.45 12.78 19.73C11.91 22 11.76 24.49 12.34 26.85C12.92 29.21 14.2 31.34 16.02 32.96C18.21 34.92 21.05 36 23.99 36C26.94 36 29.78 34.92 31.97 32.96C33.79 31.34 35.07 29.21 35.65 26.85ZM26.82 23.82C26.07 24.57 25.06 25 23.99 25C22.93 25 21.92 24.57 21.17 23.82C20.42 23.07 19.99 22.06 19.99 21C19.99 19.93 20.42 18.92 21.17 18.17C21.92 17.42 22.93 17 23.99 17C25.06 17 26.07 17.42 26.82 18.17C27.57 18.92 27.99 19.93 27.99 21C27.99 22.06 27.57 23.07 26.82 23.82Z" stroke="#150B2B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round" />
                            </g>
                        </svg>

                </div>

            </div>
        </div>
    );
};



export default Navbar;