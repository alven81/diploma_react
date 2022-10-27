import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
	contacts_designer_message, creative_workshop_ui, about_ui, history_ui, contacts_ui, blog_ui, brands_ui, career_ui, help_ui,
	pay_ui, deliver_ui, return_rule_ui, pub_offer_ui, yarn_calc_ui, card_ui, info_ui, activation_ui, recover_ui, faq_ui, feedback_ui,
	ask_question_ui, reviews_ui, gift_card_ui, suppliers_ui, infoline_ui
} from "../../lng";
//import Workshop from "../Workshop";
import Tooltip from "./Tooltip";


const Footer = () => {

	const setLang = useSelector(
		(state) => state.loadLanguage.languageIs
	);

	return (
		<>
			<footer className="footer_main container">
				<div className="footer_main-contacts">
					<p className="footer_main-contacts-phone">
						<Tooltip
							content={contacts_designer_message[setLang]}
							contentPositionX={80}
							direction="top"
						>
							<a
								href="tel:+48514556773"
								style={{ position: "relative" }}
							>
								+48 514 556 773
							</a>
						</Tooltip>
					</p>
					<p>{creative_workshop_ui[setLang]}</p>
					<p className="footer_main-contacts-time">10.00-21.00</p>
					<p className="footer_main-contacts-mail">
						<Tooltip
							content={contacts_designer_message[setLang]}
							contentPositionX={80}
							direction="top"
						>
							<a
								href="mailto:kyasarina@gmail.com"
							>
								kyasarina@gmail.com
							</a>
						</Tooltip>
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
							<li>{card_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="info"
								>
									{info_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="activation"
								>
									{activation_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="restore"
								>
									{recover_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									{faq_ui[setLang]}
								</NavLink>
							</li>
						</ul>
						<ul>
							<li>{feedback_ui[setLang]}</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="question"
								>
									{ask_question_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="review"
								>
									{reviews_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="card"
								>
									{gift_card_ui[setLang]}
								</NavLink>
							</li>
							<li>
								<NavLink
									className="footer_main-block-top-navlink"
									to="suppliers"
								>
									{suppliers_ui[setLang]}
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
						<p>{infoline_ui[setLang]}</p>
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
