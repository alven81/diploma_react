const Footer = () => {
    return (
        <>
        <footer className="footer_main container">
            <div className="footer_main-contacts">
                <p className="footer_main-contacts-phone">8(029)5779286</p>
                <p>Творческая мастерская-магазин</p>
                <p className="footer_main-contacts-time">10.00-21.00</p>
                <p className="footer_main-contacts-mail">kyasarina@gmail.com</p> 
            </div>
            <div className="footer_main-block">
                <div className="footer_main-block-top">
                    <ul>
                        <li>О нас</li>
                        <li>История</li>
                        <li>Контакты</li>
                        <li>Блог</li>
                        <li>Бренды</li>
                        <li>Вакансии</li>
                    </ul>
                    <ul>
                        <li>Помощь</li>
                        <li>Оплата</li>
                        <li>Доставка</li>
                        <li>Правила возврата</li>
                        <li>Публична оферта</li>
                        <li>Калькулятор расхода пряжи</li>
                    </ul>
                    <ul>
                        <li>Карта постоянного покупателя</li>
                        <li>Информация</li>
                        <li>Активация</li>
                        <li>Восстановление</li>
                        <li>Вопрос</li>
                    </ul>
                    <ul>
                        <li>Обратная связь</li>
                        <li>Задать вопрос</li>
                        <li>Отзывы</li>
                        <li>Подарочная карта</li>
                        <li>Поставщикам товаров и услуг </li>
                        <li>
                            <img src="./assets/img/facebook.svg" alt="Фейсбук" />
                            <img src="./assets/img/twitter.svg" alt="Твиттер" />
                            <img src="./assets/img/vk.svg" alt="ВКонтакте" />
                            <img src="./assets/img/telegram.svg" alt="Телеграмм" />
                        </li>
                    </ul>
                </div>
                <div className="footer_main-block-middle">
                    <p>Идеи, мастерские, конкурсы, новинки, акции!</p>
                </div>
                <div className="footer_main-block-bottom">
                    <p>
                        Дизайн - Ляшкевич Екатерина
                    </p>
                    <p>
                        Макет - Кот Александр
                    </p>
                </div>
            </div>
        </footer>
        </>
    )
}
export default Footer