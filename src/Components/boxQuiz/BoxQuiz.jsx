import "./boxQuiz.css"
import { useContext, useState, useEffect, useRef } from "react";
import ApiContext from "../context/context"
import { Link } from "react-router-dom"

import "bootstrap-icons/font/bootstrap-icons.css";

const BoxQuiz = () => {
    const context = useContext(ApiContext)
    const [countQue, setCountQue] = useState(0)
    let [timeCount, setTimeCount] = useState(15)
    let [timeLine, setTimeLine] = useState(1);
    const [CountInterval, setCountInterval] = useState()
    const [TimeLineInterval, setTimeLineInterval] = useState()

    const options = useRef()
    const option = useRef()

    useEffect(() => {

        if (context.isRunning) {
            let interval = setInterval(() => {
                setTimeCount(timeCount = timeCount - 1)

                if (timeCount < 10) {
                    setTimeCount(prev => "0" + prev)
                }
                if (timeCount <= 0) {
                    setTimeCount("00")
                    clearInterval(interval)
                    context.setIsRunning(false)

                    for (let i = 0; i <= options.current.children.length - 1; i++) {
                        options.current.children[i].classList.add('disable')

                        if (options.current.children[i].textContent == context.questions[countQue].answer) {
                            options.current.children[i].insertAdjacentHTML("beforeend", "<i class='bi bi-check-circle-fill'></i>");
                            options.current.children[i].classList.add('correct')
                        }
                    }

                }
                setCountInterval(interval)
            }, 1000);

            let lineInterval = setInterval(() => {
                setTimeLine(timeLine = timeLine + 1)

                if (timeLine > 400) {
                    clearInterval(lineInterval)
                }
                setTimeLineInterval(lineInterval)

            }, 38.5);
        }

    }, [context.isRunning]);

    return (
        <>
            <section className="container-boxQuiz">
                <div className="header-container-boxQuiz">
                    <h4>
                        Quiz Application
                    </h4>
                    <div className="timer">
                        <span>Time Left</span>
                        <span className="timeCount">{timeCount}</span>
                    </div>
                </div>
                <span style={{ width: `${timeLine}px` }} className="timeLine"></span>

                <div className="box-quiz">
                    <h3>{context.questions[countQue].numb}.{context.questions[countQue].question}</h3>
                    <div ref={options} className="options">
                        {
                            context.questions[countQue].options.map((i, key) => {
                                return (
                                    <span onClick={e => selectedOption(e)} key={key} className="option">{i}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="footer-container-boxQuiz">
                    <h5 className="numb-questions">{context.questions[countQue].numb} of {context.questions.length} Questions</h5>
                    <Link to={context.questions.length - 1 <= countQue ? "/resultQuiz" : null} onClick={nextClick} className={context.isRunning ? "nextHide" : "nextActive"}>Next</Link>
                </div>
            </section>
        </>
    );



    function selectedOption(e) {
        context.setIsRunning(false)
        clearInterval(TimeLineInterval)
        clearInterval(CountInterval)

        let correctAns = context.questions[countQue].answer

        if (e.target.textContent !== correctAns) {
            e.target.classList.add('incorrect')
            e.target.insertAdjacentHTML("beforeend", "<i class='bi bi-x-circle-fill'></i>");
        } else {
            context.setUserScore(prev => prev + 1)
        }

        for (let i = 0; i <= options.current.children.length - 1; i++) {
            options.current.children[i].classList.add('disable')

            if (options.current.children[i].textContent == correctAns) {
                options.current.children[i].insertAdjacentHTML("beforeend", "<i class='bi bi-check-circle-fill'></i>");
                options.current.children[i].classList.add('correct')
            }
        }
    }
    function nextClick() {

        if (context.questions.length - 1 <= countQue) {
            console.log('com question');
        } else {
            context.setIsRunning(true)
            setTimeCount(15)
            setTimeLine(1)

            setCountQue(prev => prev + 1)

            for (let i = 0; i < options.current.children.length; i++) {
                options.current.children[i].classList.remove('disable')
                options.current.children[i].classList.remove('correct')
                options.current.children[i].classList.remove('incorrect')
            }

        }
    }
}

export default BoxQuiz;