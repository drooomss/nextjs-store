import React from 'react';

interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string
    }
}


export default function Category(props: CategoryProps){
    const { categories } = props.params
    console.log(categories)
    console.log(props)
    return (
        <h1 className='text-white'>Categoria dinamica: {categories}</h1>
    )
}

