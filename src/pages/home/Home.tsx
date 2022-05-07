import { Button } from "@mui/material"
import { NavLink } from "react-router-dom"
import { HomeElementDecor } from "./HomeElementDecor"
import { HomeElementContainer } from "./HomeElementContainer"
import { HomeElementCraft } from "./HomeElementCraft"
import { HomeElementModel } from "./HomeElementModel"
import { HomeElementPaint } from "./HomeElementPaint"
import { HomeListContainer } from "./HomeListContainer"
import { HomeListCraft } from "./HomeListCraft"
import { HomeListModel } from "./HomeListModel"
import { HomeListPaint } from "./HomeListPaint"
import { HomeElementFlora } from "./HomeElementFlora"
import Workshop  from "./Workshop"

const Home = () => {
    return (
        <div className="home_main">

            <section className="home_main-theme container">

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
                            <Button variant="contained" >Вдохновись</Button>
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
                    <span/>
                        <p>"Креатив<small>ь</small>" <small>это</small></p>
                    <span/>
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

            <section className="home_main-title home_container">
                <div className="home_main-title-ball"><img src="./assets/img/ball.png" alt="клубок" /></div>
                <span />
                    <p>ТВОРЧЕСКИЕ НАБОРЫ</p>
                <span />
            </section>

            <section className="home_container">
                <div>
                    <NavLink to='craft'>
                        <div className="button_container">
                            <button> РУКОДЕЛИЕ </button>
                        </div>
                    </NavLink>
                    <div className="home_main-blocks">
                        <HomeElementContainer  inlayElement={<HomeElementCraft bkgClass={"home_element-bkg-craft home_element-middle-centre"}/>}  />
                        <HomeListContainer bkgClass={"home_list-bkg-craft home_list-block"} inlayList={<HomeListCraft />} />
                    </div>
                </div>
            </section>

            <section className="home_container">
                <div>
                    <NavLink to='paint'>
                        <div className="button_container">
                            <button> РИСОВАНИЕ </button>
                        </div>
                    </NavLink>
                    <div className="home_main-blocks">
                        <HomeElementContainer inlayElement={<HomeElementPaint bkgClass={"home_element-bkg-paint home_element-middle-centre"}/>}  />
                        <HomeListContainer bkgClass={"home_list-bkg-paint home_list-block"} inlayList={<HomeListPaint />} />
                    </div>
                </div>
            </section>

            <section className="home_container">
                <div>
                    <NavLink to='model'>
                        <div className="button_container">
                            <button> МОДЕЛИРОВАНИЕ </button>
                        </div>
                    </NavLink>
                    <div className="home_main-blocks">
                        <HomeElementContainer inlayElement={<HomeElementModel bkgClass={"home_element-bkg-model home_element-middle-centre"}/>}  />
                        <HomeListContainer bkgClass={"home_list-bkg-model home_list-block"} inlayList={<HomeListModel />} />
                    </div>
                </div>
            </section>

            <section className="home_container">
            <div>
                    <div className="home_main-buttons">
                        <NavLink to='decor'>
                            <div className="button_container">
                                <button> Украшение </button>
                            </div>
                        </NavLink>
                        <NavLink to='flora'>
                            <div className="button_container">
                                <button> Флористика </button>
                            </div>
                        </NavLink>
                    </div>
                    
                    <div className="home_main-blocks">
                        <HomeElementContainer inlayElement={<HomeElementDecor bkgClass={"home_element-bkg-decor home_element-middle-centre"}/>}  />
                        <HomeElementContainer inlayElement={<HomeElementFlora bkgClass={"home_element-bkg-flora home_element-middle-centre"}/>}  />
                    </div>
                </div>
            </section>

            <section className="home_main-title home_container">
                <div className="home_main-title-pencil"><img src="./assets/img/pencil.png" alt="клубок" /></div>
                <span />
                    <p>Мастерская</p>
                <span />
            </section>

            <section className="home_main-workshop home_container">
                <Workshop buttonTo={"model"} buttonName={"Идеи"} picture={"/assets/img/master_1.png"}/>
                <Workshop buttonTo={"model"} buttonName={"Мастер-класс"} picture={"/assets/img/master_2.png"}/>
                <Workshop buttonTo={"model"} buttonName={"Конкурсы"} picture={"/assets/img/master_3.png"}/>
            </section>
        </div>
    )
}
export default Home