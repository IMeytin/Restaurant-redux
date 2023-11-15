import { filterCategory, getSelectedCategory } from "../../redux/dishesSlice";
import { useSelector, useDispatch } from "react-redux";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);
    return (
        <div>
            <p onClick={() => dispatch(filterCategory(category))} className={selectedCategory === category ? "categoryBtnSelected categoryBtn" : "categoryBtnHover categoryBtn"}>{category}</p>
        </div>
    )
}

export default Filter;