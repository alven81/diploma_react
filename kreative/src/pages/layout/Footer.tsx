import { NavLink } from "react-router-dom";

const Footer = () => {

	return (
		<>
			<footer className="footer_main container">
				<div className="footer_main-contacts">
					<p className="footer_main-contacts-phone">
						<a
							href="tel:+48514556773"
							 title="Contact the designer"  //Связаться с дизайнером
						>
							+48 514 556 773
						</a>
					</p>
					<p>Creative workshop-store</p>       {/* Творческая мастерская-магазин */}
					<p className="footer_main-contacts-time">10.00-21.00</p>
					<p className="footer_main-contacts-mail">
						<a
							href="mailto:kyasarina@gmail.com"
							title="Contact the designer"  //Связаться с дизайнером
						>
							kyasarina@gmail.com
						</a>
					</p>
				</div>
				<div className="footer_main-block">
					<div className="footer_main-block-top">
						<ul>
							<li>About</li>  {/* О нас */}
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="history"
								>
									History  {/* История */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="contacts"
								>
									Contacts  {/* Контакты */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="blog"
								>
									Blog  {/* Блог */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="brands"
								>
									Brands  {/* Бренды */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="vacancies"
								>
									Career  {/* Вакансии */}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>Help</li>  {/* Помощь */}
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="payment"
								>
									Payment  {/* Оплата */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="delivery"
								>
									Delivery  {/* Доставка */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="return"
								>
									Return Policy  {/* Правила возврата */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="offerta"
								>
									Public offer  {/* Публична оферта */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="calculator"
								>
									Yarn calculator  {/* Калькулятор расхода пряжи */}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>Loyalty card</li>  {/* Карта постоянного покупателя */}
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="info"
								>
									Information  {/* Информация */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="activation"
								>
									Activation  {/* Активация */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="restore"
								>
									Recovery  {/* Восстановление */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									FAQ  {/* Вопрос */}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>Feedback</li>  {/* Обратная связь */}
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									Ask a Question  {/* Задать вопрос */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="review"
								>
									Reviews  {/* Отзывы */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="card"
								>
									Gift card  {/* Подарочная карта */}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="suppliers"
								>
									Suppliers of goods and services  {/* Поставщикам товаров и услуг */}
								</NavLink>
							</li>
							<li>
								<a href="https://www.facebook.com/">
									<img
										src="/assets/img/facebook.svg"
										alt="Facebook"   //Фейсбук
									/>
								</a>
								<a href="https://twitter.com/">
									<img
										src="/assets/img/twitter.svg"
										alt="Twitter"   //Твиттер
									/>
								</a>
								<a href="https://vk.com/">
									<img
										src="/assets/img/vk.svg"
										alt="VK"     //ВКонтакте
									/>
								</a>
								<a href="https://telegram.org/">
									<img
										src="/assets/img/telegram.svg"
										alt="Telegram"     //Телеграмм
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="footer_main-block-middle">
						<p>Ideas, workshops, contests, novelties, promotions!</p>  {/* Идеи, мастерские, конкурсы, новинки, акции */}
					</div>
					<div className="footer_main-block-bottom">
						<p>UI - Liashkevich Katsiarina</p>
						<p>Layout - Kot Aliaksandr</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
