import React from 'react'
import './css/BookCategories.css'
export const BookCategories = (props) => {
    const chooseCategory = (e)=>{
        const filterText = e.target.nextSibling.textContent;
        props.categorySetter(filterText);
    }   
  return (
    <div>
        <div className='categories-navbar'>
            <div className='category-item' onClick={chooseCategory}>
                <img src="https://static.vecteezy.com/system/resources/previews/009/399/398/original/old-vintage-book-clipart-design-illustration-free-png.png" className="category-image" alt="category-1"/>
                <div className='category-text ms-2 mt-2'>Fiction</div>
            </div>
            <div className='category-item' onClick={chooseCategory}>
                <img src="data:image/jpeg;base64,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" className="category-image" alt="category-2"/>
                <div className='category-text ms-2 mt-2'>Story</div>
            </div>
            <div className='category-item' onClick={chooseCategory}>
                <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg?w=2000" className="category-image" alt="category-3"/>
                <div className='category-text mt-2'>Detective</div>
            </div>
            <div className='category-item' onClick={chooseCategory}>
                <img src="data:image/jpeg;base64,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" className="category-image" alt="category-4" />
                <div className='category-text ms-4 mt-2'>Others</div>
            </div>
        </div>
    </div>
  )
}