<h1 align="center">Космическая бургерная Stellar Burger</h1>
<h3 align="center">
  <a href="https://kovalina.nomoredomainswork.ru/" title="Link">Demo (деплой на сервере)</a> 
  •
  <a href="https://kovalinam.github.io/react-burger/">GitHubPages</a>
</h3>
<h2>О проекте</h2>

<p>Учебный проект в рамках прохождения курса React-разработчик на Яндекс.Практикум.</p>
<p>Проект представляет собой приложение бургерной и позволяет авторизованным пользователям оформлять заказы и в личном кабинете просматривать свою историю заказов. Все пользователи приложения могут изучить доступные ингредиенты и посмотреть ленту заказов, представляющую собой статистику использования приложения пользователями.</p>
<h2>Технологии</h2>
<ul>
  <li>React</li>
  <li>TypeScript</li>
  <li>Redux</li>
  <li>WebSocket</li>
  <li>React Router</li>
  <li>React DnD</li>
</ul>

## Как запустить проект
Проект запускается локально по адресу http://localhost:3000/ путем клонирования данного репозитория и 
последовательного запуска команд в терминале (предварительно должны быть установлены Git, NodeJS и менеджер пакетов npm):

```bash
git clone https://github.com/kovalinaM/react-burger.git

cd react-burger

npm install

npm run start
```
<h2>Тестирование</h2>
<ul>
<li>
  <p>Тестирование бизнес-логики приложения:</p>
<pre>
npm run test
</pre>
</li>
<li>
  <p>Функциональное тестирование с использованием Cypress:</p>
<pre>
npm run cy:open
</pre>
</li>
</ul>
