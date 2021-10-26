import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {
 
    const [categories, setcategories] = useState(['Pokemon']);

    return (
     <>
     <h2>GitExpertApp</h2>
     <AddCategory setcategories={setcategories}/>
     <hr />


     <ol>
        {
            categories.map( category => (
                <GifGrid 
                key={category}
                category={category}
                />
            ))
        }
     </ol>

     </>
 );

};