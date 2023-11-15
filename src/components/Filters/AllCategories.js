import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h2>What kind of food do you like?</h2>
            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map((category, index) => <Filter key={index} category={category}/>)}
        </div>
    )
}

export default AllCategories;