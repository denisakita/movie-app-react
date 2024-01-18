import PageNotFoundImage from "../assets/images/pagenotfound.jpg";

export const PageNotFound = () => {
    return (
        <main>
            <section className="flex flex-col items-center justify-center h-screen">
                <div className="flex justify-center my-4 max-w-lg">
                    <img className="w-50px" src={PageNotFoundImage} alt="Page Not Found" />
                </div>
            </section>
        </main>
    );
};
