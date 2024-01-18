import PageNotFoundImage from "../assets/images/pagenotfound.jpg";
import {Link} from "react-router-dom";
import {Button} from "../components";

export const PageNotFound = () => {

    return (
        <main>
            <section className="flex flex-col items-center justify-center h-screen">
                <div className="flex justify-center my-4 max-w-lg">
                    <img className="w-50px" src={PageNotFoundImage} alt="Page Not Found"/>
                </div>
                <div className=" flex justify-center py-6">
                    <Link to="/"></Link>
                    <Button>Back to Movie Future</Button>
                </div>
            </section>
        </main>
    );
};
