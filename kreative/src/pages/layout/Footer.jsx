import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { footerLanguage } from "lng";
import Tooltip from "pages/layout/Tooltip";


const Footer = () => {

	const setLang = useSelector(
		(state) => state.loadLanguage.languageIs
	);

	return (
			<footer className="footer_main container">
				<div className="footer_main-contacts">
					<Tooltip
						content={footerLanguage.contacts_designer_message[setLang]}
						contentPositionX={80}
						direction="top"
					>
						<p className="footer_main-contacts-phone">
							<a
								href="tel:+12 345 678 900"
								style={{ position: "relative" }}
							>
								+12 345 678 900
							</a>
						</p>
					</Tooltip>
					<p>{footerLanguage.creative_workshop_ui[setLang]}</p>
					<p className="footer_main-contacts-time">10.00-21.00</p>
					<Tooltip
						content={footerLanguage.contacts_designer_message[setLang]}
						contentPositionX={80}
						direction="top"
					>
						<p className="footer_main-contacts-mail">
							<a
								href="mailto:kyasarina@gmail.com"
							>
								kyasarina@gmail.com
							</a>
						</p>
					</Tooltip>
				</div>
				<div className="footer_main-block">
					<div className="footer_main-block-top">
						<ul>
							<li>{footerLanguage.about_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="history"
								>
									{footerLanguage.history_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="contacts"
								>
									{footerLanguage.contacts_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="blog"
								>
									{footerLanguage.blog_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="brands"
								>
									{footerLanguage.brands_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="vacancies"
								>
									{footerLanguage.career_ui[setLang]}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>{footerLanguage.help_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="payment"
								>
									{footerLanguage.pay_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="delivery"
								>
									{footerLanguage.deliver_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="return"
								>
									{footerLanguage.return_rule_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="offerta"
								>
									{footerLanguage.pub_offer_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="calculator"
								>
									{footerLanguage.yarn_calc_ui[setLang]}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>{footerLanguage.card_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="info"
								>
									{footerLanguage.info_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="activation"
								>
									{footerLanguage.activation_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="restore"
								>
									{footerLanguage.recover_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									{footerLanguage.faq_ui[setLang]}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>{footerLanguage.feedback_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									{footerLanguage.ask_question_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="review"
								>
									{footerLanguage.reviews_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="card"
								>
									{footerLanguage.gift_card_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="suppliers"
								>
									{footerLanguage.suppliers_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<a href="https://www.facebook.com/">
									<img
										src="/assets/img/facebook.svg"
										alt="Facebook"
									/>
								</a>
								<a href="https://twitter.com/">
									<img
										src="/assets/img/twitter.svg"
										alt="Twitter"
									/>
								</a>
								<a href="https://vk.com/">
									<img
										src="/assets/img/vk.svg"
										alt="VK"
									/>
								</a>
								<a href="https://telegram.org/">
									<img
										src="/assets/img/telegram.svg"
										alt="Telegram"
									/>
								</a>
							</li>
						</ul>
					</div>
					<div className="footer_main-block-middle">
						<p>{footerLanguage.infoline_ui[setLang]}</p>
					</div>
					<div className="footer_main-block-bottom">
						<p>UI - Liashkevich Katsiarina</p>
						<p>Layout - Kot Aliaksandr</p>
					</div>
				</div>
			</footer>
	);
};

export default Footer;
