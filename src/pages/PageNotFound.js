import PageNotFoundImage from "../assets/images/pagenotfound.jpg";
import {Link} from "react-router-dom";
import {Button} from "../components";
import {useEffect} from "react";

export const PageNotFound = () => {

    useEffect(() => {
        document.title = `Page Not Found`;
    });


    return (
        <main>
            <section className="flex flex-col items-center justify-center h-screen">
                <div className="flex justify-center my-4 max-w-lg">
                    <img className="w-50px" src={PageNotFoundImage} alt="Page Not Found"/>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <Button>Back To Cinemate</Button>
                    </Link>
                </div>
            </section>
        </main>
    );
};
