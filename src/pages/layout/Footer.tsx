import { NavLink } from "react-router-dom";

const Footer = () => {
	// const actions = [{
	//                     name: "Telegramm",
	//                     icon: "//localhost:3000/assets/img/telegram.svg"
	//                     }
	//                 ]

	return (
		<>
			<footer className="footer_main container">
				<div className="footer_main-contacts">
					<p className="footer_main-contacts-phone">
						<a
							href="tel:+375295779286"
							title="Связаться с дизайнером"
						>
							8(029)5779286
						</a>
					</p>
					<p>Творческая мастерская-магазин</p>
					<p className="footer_main-contacts-time">10.00-21.00</p>
					<p className="footer_main-contacts-mail">
						<a
							href="mailto:kyasarina@gmail.com"
							title="Связаться с дизайнером"
						>
							kyasarina@gmail.com
						</a>
					</p>
				</div>
				<div className="footer_main-block">
					<div className="footer_main-block-top">
						<ul>
							<li>О нас</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="history"
								>
									История
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="contacts"
								>
									Контакты
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="blog"
								>
									Блог
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="brands"
								>
									Бренды
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="vacancies"
								>
									Вакансии
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>Помощь</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="payment"
								>
									Оплата
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="delivery"
								>
									Доставка
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="return"
								>
									Правила возврата
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="offerta"
								>
									Публична оферт
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="calculator"
								>
									Калькулятор расхода пряжи
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>Карта постоянного покупателя</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="info"
								>
									Информация
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="activation"
								>
									Активация
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="restore"
								>
									Восстановление
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									Вопрос
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>Обратная связь</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									Задать вопрос
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="review"
								>
									Отзывы
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="card"
								>
									Подарочная карта
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="suppliers"
								>
									Поставщикам товаров и услуг
								</NavLink>
							</li>
							<li>
								<a href="https://www.facebook.com/">
									<img
										src="/assets/img/facebook.svg"
										alt="Фейсбук"
									/>
								</a>
								<a href="https://twitter.com/">
									<img
										src="/assets/img/twitter.svg"
										alt="Твиттер"
									/>
								</a>
								<a href="https://vk.com/">
									<img
										src="/assets/img/vk.svg"
										alt="ВКонтакте"
									/>
								</a>
								<a href="https://telegram.org/">
									<img
										src="/assets/img/telegram.svg"
										alt="Телеграмм"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="footer_main-block-middle">
						<p>Идеи, мастерские, конкурсы, новинки, акции!</p>
					</div>
					<div className="footer_main-block-bottom">
						<p>Дизайн - Ляшкевич Екатерина</p>
						<p>Верстка - Кот Александр</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
