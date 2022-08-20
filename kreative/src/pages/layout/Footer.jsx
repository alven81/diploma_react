import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { contacts_designer_message, creative_workshop_ui, about_ui, history_ui, contacts_ui, blog_ui, brands_ui, career_ui, help_ui,
    pay_ui, deliver_ui, return_rule_ui, pub_offer_ui, yarn_calc_ui, 
    //  payment_ui, reviews_ui,   logo_message,
    //search_message, hello_message, reg_ui, favorites_ui, cart_ui, catalog_ui, needlework_ui, draw_ui, model_ui, decor_ui,
    //flora_ui, workshop_ui, new_ui, discounts_ui 
} from "../../lng"

const Footer = () => {

    const setLang = useSelector(
        (state) => state.loadLanguage.languageIs
    );

	return (
		<>
			<footer className="footer_main container">
				<div className="footer_main-contacts">
					<p className="footer_main-contacts-phone">
						<a
							href="tel:+48514556773"
							title={contacts_designer_message[setLang]}
						>
							+48 514 556 773
						</a>
					</p>
					<p>{creative_workshop_ui[setLang]}</p>
					<p className="footer_main-contacts-time">10.00-21.00</p>
					<p className="footer_main-contacts-mail">
						<a
							href="mailto:kyasarina@gmail.com"
							title={contacts_designer_message[setLang]}
						>
							kyasarina@gmail.com
						</a>
					</p>
				</div>
				<div className="footer_main-block">
					<div className="footer_main-block-top">
						<ul>
							<li>{about_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="history"
								>
									{history_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="contacts"
								>
									{contacts_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="blog"
								>
									{blog_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="brands"
								>
									{brands_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="vacancies"
								>
									{career_ui[setLang]}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>{help_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="payment"
								>
									{pay_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="delivery"
								>
									{deliver_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="return"
								>
									{return_rule_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="offerta"
								>
								    {pub_offer_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="calculator"
								>
									{yarn_calc_ui[setLang]}
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
