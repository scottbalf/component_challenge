import UdemyStar from "../images/star_full.png"
import UdemyHalf from "../images/star_half.png"

const UdemyCard = (props) => {
    return (
        <div className="UdemyCards">
            <img src={props.image}></img>
        <p className="title">{props.title}</p>
        <p className="presenter">{props.presenter}</p>
        <p><span className="score">{props.score}</span> <img src={UdemyStar} height="18px"/><img src={UdemyStar} height="18px"/><img src={UdemyStar} height="18px"/><img src={UdemyStar} height="18px"/><img src={UdemyHalf} height="18px"/><span className="ratings">{props.ratings}</span></p>
        <p><span className="newPrice">{props.newPrice}</span><span className="oldPrice">{props.oldPrice}</span></p>
        <p className="bestseller">Bestseller</p>
        </div>
    );
};

export default UdemyCard;