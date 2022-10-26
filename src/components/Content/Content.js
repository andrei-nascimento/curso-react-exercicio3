import Post from "../Post/Post";
import meme1 from "../../img/hyperlink.webp";
import meme2 from "../../img/sorry_bro.webp";

function Content() {
    return (
        <>
            <div className="content">
                <Post 
                    titulo="High five, Hyperlink!"
                    img={meme1}
                />
                <Post 
                    titulo="Sorry, bro."
                    img={meme2}
                />
            </div>
        </>
    );
}

export default Content