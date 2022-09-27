import UdemyCard from "./UdemyCard"
import Udemy1 from "../images/udemy_img1.png"
import Udemy2 from "../images/udemy_img2.png"
import Udemy3 from "../images/udemy_img3.png"

const Udemy = () => {
    return (
        <div>
            <h1 className="bigTitle">Students are viewing</h1>
            <div className="UdemyCard">
            <UdemyCard image={Udemy1} title="The Complete 2022 Web Development Bootcamp" presenter="Dr. Angela Yu" score={4.7} ratings="(224,949)" newPrice="£19.99" oldPrice="£69.99"/>
            <UdemyCard image={Udemy2} title="100 Days of Code: The Complete Python Pro Bootcamp for 2022" presenter="Dr. Angela Yu" score={4.7} ratings="(139,610)" newPrice="17.99" oldPrice="£59.99"/>
            <UdemyCard image={Udemy3} title="Ultimate AWS Certified Solutions Architect Associate..." presenter="Stephanie Maarek | AWS Certified Cloud Pra..." score={4.7} ratings="(145,685)" newPrice="£17.99" oldPrice="£59.99"/>
            </div>
        </div>
    );
};

export default Udemy