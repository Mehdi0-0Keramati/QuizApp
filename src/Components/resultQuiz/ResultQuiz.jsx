import { useContext } from "react";
import ApiContext from "../context/context";
import "./resultQuiz.css"
import { Link } from "react-router-dom"

const ResultQuiz = () => {
    const context = useContext(ApiContext)
    return (

        <>
            <section className="container_resultQuiz">
                {
                    context.UserScore <= 2 ?
                        <h3>
                            <i className="icon">&#128169; </i>
                            It smells like poop <br /> you gave <span style={{ color: 'orange' }}>{context.UserScore}</span>  correct answered <br /> try it again!!!
                        </h3>
                        : ""
                }

                {
                    context.UserScore < 6 && context.UserScore > 2 ?
                        <h3>
                            <i className="icon">&#128526;</i>
                            Nice you get <span style={{ color: 'orange' }}>{context.UserScore}</span> out of
                            <span style={{ color: 'orange' }}> {context.questions.length}</span> questions
                        </h3>

                        : ""
                }

                {
                    context.UserScore >= 6 ?
                        <h3>
                            <i className="icon">&#128081;</i>
                            congratulations you get <span style={{ color: 'orange' }}>{context.UserScore}</span> out of <span style={{ color: 'orange' }}>{context.questions.length}</span> questions
                        </h3>
                        : ""
                }
                <div className="buttons">
                    <Link onClick={() => context.setUserScore(0)} to={"/"} className="button quit">quit Game</Link>
                    <Link onClick={() => context.setIsRunning(true) || context.setUserScore(0)} to={"/boxQuiz"} className="button restart">restart Game</Link>
                </div>
            </section>
        </>

    );
}

export default ResultQuiz;