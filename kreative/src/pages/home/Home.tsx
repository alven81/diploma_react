import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";
import { ElementDecor } from "./ElementDecor";
import { HomeElementContainer } from "./HomeElementContainer";
import { ElementCraft } from "pages/home/ElementCraft";
import { ElementModel } from "pages/home/ElementModel";
import { ElementPaint } from "pages/home/ElementPaint";
import { HomeListContainer } from "pages/home/HomeListContainer";
import { ListCraft } from "pages/home/ListCraft";
import { ListModel } from "pages/home/ListModel";
import { ListPaint } from "pages/home/ListPaint";
import { ElementFlora } from "pages/home/ElementFlora";
import Workshop from "pages/home/Workshop";

const Home = () => {

	return (
		<div className="home_main">
			<section className="home_main-theme container">
				<div className="home_main-theme-left">
					<div className="home_main-theme-left-first">
						 <span>Креативь workshop-store</span> {/* Творческая мастерская-магазин */}
					</div>
					<div className="home_main-theme-left-second">
						<span>100+</span>
					</div>
					<div className="home_main-theme-left-third">
						<span>ideas for creativity</span>        {/* Творческая мастерская-магазин */}
						<span className="home_main-theme-button">
							<Button variant="contained">Get Inspired</Button> {/* Творческая мастерская-магазин */}
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
					<span />
					<p>
						"Креатив<small>ь</small>" <small>is</small>    {/* Креативь / это */}
					</p>
					<span />
				</div>
				<div className="home_main-head-links">
					<a href="#">Inspiration</a>     {/* Вдохновение */}
					<a href="#">Choice</a>          {/* Выбор */}
					<a href="#">Involvement</a>     {/* Участие */}
					<a href="#">Gift</a>            {/* Подарок */}
				</div>
				<div className="home_main-head-buttons">
					<div className="home_main-head-buttons-idea">
						<a href="#">be inspired by the idea </a>  {/* вдохновляйся идеей */}
					</div>
					<div className="home_main-head-buttons-set">
						<a href="#">choose a creative set </a>   {/* выбирай творческий набор */}
					</div>
					<div className="home_main-head-buttons-quiz">
						<a href="#">participate in workshops and competitions </a>  {/* Участвуй в мастер-классах и конкурсах */}
					</div>
					<div className="home_main-head-buttons-craft">
						<a href="#">create a gift with your own hands </a> {/* создавай подарок своими руками */}
					</div>
					<span className="artefact_1"></span>
					<span className="artefact_2"></span>
					<span className="artefact_3"></span>
					<span className="artefact_4"></span>
					<span className="artefact_5"></span>
				</div>
			</section>

			<section className="home_main-title home_container">
				<div className="home_main-title-ball">
					<img src="./assets/img/ball.png" alt="клубок" />
				</div>
				<span />
				<p>CREATIVE SETS</p>    {/* ТВОРЧЕСКИЕ НАБОРЫ */}
				<span />
			</section>

			<section className="home_container">
				<div>
					<NavLink to="craft">
						<div className="button_container">
							<button> NEEDLEWORK </button>    {/* РУКОДЕЛИЕ */}
						</div>
					</NavLink>
					<div className="home_main-blocks">
						<HomeElementContainer
							inlayElement={
								<ElementCraft
									bkgClass={
										"home_element-bkg-craft home_element-middle-centre"
									}
								/>
							}
						/>
						<HomeListContainer
							bkgClass={"home_list-bkg-craft home_list-block"}
							inlayList={<ListCraft />}
						/>
					</div>
				</div>
			</section>

			<section className="home_container">
				<div>
					<NavLink to="paint">
						<div className="button_container">
							<button> DRAWING </button>    {/* РИСОВАНИЕ */}
						</div>
					</NavLink>
					<div className="home_main-blocks">
						<HomeElementContainer
							inlayElement={
								<ElementPaint
									bkgClass={
										"home_element-bkg-paint home_element-middle-centre"
									}
								/>
							}
						/>
						<HomeListContainer
							bkgClass={"home_list-bkg-paint home_list-block"}
							inlayList={<ListPaint />}
						/>
					</div>
				</div>
			</section>

			<section className="home_container">
				<div>
					<NavLink to="model">
						<div className="button_container">
							<button> MODELING </button>    {/* МОДЕЛИРОВАНИЕ */}
						</div>
					</NavLink>
					<div className="home_main-blocks">
						<HomeElementContainer
							inlayElement={
								<ElementModel
									bkgClass={
										"home_element-bkg-model home_element-middle-centre"
									}
								/>
							}
						/>
						<HomeListContainer
							bkgClass={"home_list-bkg-model home_list-block"}
							inlayList={<ListModel />}
						/>
					</div>
				</div>
			</section>

			<section className="home_container">
				<div>
					<div className="home_main-buttons">
						<NavLink to="decor">
							<div className="button_container">
								<button> Decoration </button>    {/* Украшение */}
							</div>
						</NavLink>
						<NavLink to="flora">
							<div className="button_container">
								<button> Floristics </button>   {/* Флористика */}
							</div>
						</NavLink>
					</div>

					<div className="home_main-blocks">
						<HomeElementContainer
							inlayElement={
								<ElementDecor
									bkgClass={
										"home_element-bkg-decor home_element-middle-centre"
									}
								/>
							}
						/>
						<HomeElementContainer
							inlayElement={
								<ElementFlora
									bkgClass={
										"home_element-bkg-flora home_element-middle-centre"
									}
								/>
							}
						/>
					</div>
				</div>
			</section>

			<section className="home_main-title home_container">
				<div className="home_main-title-pencil">
					<img src="./assets/img/pencil.png" alt="клубок" />
				</div>
				<span />
				<p>Workshop</p>   {/* Мастерская */}
				<span />
			</section>

			<section className="home_main-workshop home_container">
				<Workshop
					buttonTo={"Ideas"}
					buttonName={"Ideas"} //Идеи
					picture={"/assets/img/master_1.png"}
				/>
				<Workshop
					buttonTo={"masterclass"}
					buttonName={"Master Class"} //Мастер-класс
					picture={"/assets/img/master_2.png"}
				/>
				<Workshop
					buttonTo={"contests"}
					buttonName={"Contests"} //Конкурсы
					picture={"/assets/img/master_3.png"}
				/>
			</section>
		</div>
	);
};

export default Home;
