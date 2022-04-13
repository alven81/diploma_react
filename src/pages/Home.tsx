import { Stack } from "@mui/material"

const Home = () => {
    return (
        <div className="home_main container">
            <section className="home_main-theme">
                <div className="home_main-theme-left">
                    <div className="home_main-theme-left-first">
                        <span>
                        Творческая мастерская-магазин
                        </span>
                    </div>
                    <div className="home_main-theme-left-second">
                        <span>100+</span>
                    </div>
                    <div className="home_main-theme-left-third">
                        <span> 
                            идей для творчества 
                        </span>
                        <span className="home_main-theme-button">
                            <button>Вдохновись</button>
                        </span>
                    </div>
                    <img src="./assets/img/oreol.png" alt="" />
                </div>
                <div className="home_main-theme-right">
                    <img src="./assets/img/slider1.png" alt="" />
                </div>
            </section>
            <section className="home_main-head home_container">
                <div className="home_main-head-name">
                    <span></span>
                        <p>"Креатив<small>ь</small>" <small>это</small></p>
                    <span></span>
                </div>
                <div className="home_main-head-links">
                    <a href="#">Вдохновение</a>
                    <a href="#">Выбор</a>
                    <a href="#">Участие</a>
                    <a href="#">Подарок</a>
                </div>
                <div className="home_main-head-buttons">
                    <div className="home_main-head-buttons-idea">
                        <a href="#">вдохновляйся идеей</a>   
                    </div>
                    <div className="home_main-head-buttons-set">
                        <a href="#">выбирай творческий набор </a>   
                    </div>
                    <div className="home_main-head-buttons-quiz">
                        <a href="#">Участвуй в мастер-классах и конкурсах </a>   
                    </div>
                    <div className="home_main-head-buttons-craft">
                        <a href="#">создавай подарок своими руками </a>   
                    </div>
                    <span className="artefact_1"></span>
                    <span className="artefact_2"></span>
                    <span className="artefact_3"></span>
                    <span className="artefact_4"></span>
                    <span className="artefact_5"></span>
                </div>

            </section>
            <section className="home_main-craft home_container">
                home_main-craft
            </section>
            <section className="home_main-paint home_container">
                home_main-paint
            </section>
            <section className="home_main-model home_container">
                home_main-model
            </section>
            <section className="home_main-decor home_container">
                home_main-decor
            </section>
            <section className="home_main-flora home_container">
                home_main-flora
            </section>

        </div>
    )
}
export default Home