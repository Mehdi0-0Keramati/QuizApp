import "./infoQuiz.css"
import { Link } from "react-router-dom"
import ApiContext from "../context/context";
import { useContext } from "react";
const InfoQuiz = () => {
    const context = useContext(ApiContext);

    return (
        <>
            <section className="container-infoQuiz">
                <h3 className="rules-title">
                    some rules of this game
                </h3>
                <hr />
                <ol className="rules-text">
                    <li>you have only <span style={{ color: "royalblue" }}>15 seconds</span> per each question.</li>
                    <li>once you select your answer,it can't be undone.</li>
                    <li>you can't select any option once time goes off.</li>
                    <li>you can't exit from the quiz while you're playing.</li>
                    <li>you'll get points on the basis of you're correct answers.</li>
                </ol>
                <hr />
                <div className="buttons">
                    <Link to="/home" className="button exit">exit Quiz</Link>
                    <Link onClick={() => context.setIsRunning(true)} to="/boxQuiz" className="button continue">continue</Link>
                </div>
            </section>
        </>
    );
}

export default InfoQuiz;