


const Review: React.FC = ()=>{
    return(
        <>
            <img 
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
            />
            <h2>title</h2>
            <span>tags</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem harum hic consequatur ratione ab maxime nesciunt amet accusamus fuga cum illum quibusdam tempore, quia esse totam! Sit iste facilis explicabo?</p>
        </>
    )
}

export default Review;

// review name, name of the reviewed piece of art, "group" (from the fixed set: "Movies", "Books", "Games" и т.п.), tags (multiple tags with autocomplition - when users starts entering tag, dropdown show variants, which already exist in the app), review text обзора (with "markdown" formatting), optional image (stored in the cloud) and the grade in the range from 0 to 10.