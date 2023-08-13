<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![commits][commits-shield]][commits-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shtxkrxl/crypto-app">
    <img src="src/app/icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Crypto</h3>

  <p align="center">
    Веб-сайт для просмотра цен, рыночной капитализации и объема торгов криптовалют в режиме реального времени
    <br />
    <a href="https://crypto-shtxkrxl.vercel.app/">Сайт</a>
    ·
    <a href="https://github.com/shtxkrxl/crypto-app/issues">Сообщить об ошибке</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Содержание</summary>
  <ol>
    <li>
      <a href="#о-проекте">О проекте</a>
    </li>
    <li>
      <a href="#запуск-локально">Запуск локально</a>
    </li>
    <li><a href="#лицензия">Лицензия</a></li>
    <li><a href="#контакты">Контакты</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## О проекте

![2023-08-09_22-34-44](https://github.com/shtxkrxl/crypto-app/assets/68380962/769ccb0a-3dcf-42a3-8cbd-6f1e176592a0)

Проект сайта для мониторинга криптовалют представляет собой систему, которая позволяет отслеживать и анализировать данные о различных криптовалютах. Сайт обеспечивает пользователей актуальной информацией о ценах, объемах торгов и других параметрах для различных криптовалют.

Основной функционал проекта включает в себя:
* Отображение актуальных цен криптовалют
* Графическое представление данных о ценах в виде графиков изменений цен
* Отображение объемов торгов криптовалюты
* Информация о рыночной капитализации криптовалюты и ее рейтинг среди других криптовалют

Моя цель разработки проекта состоит в том, чтобы улучшить свой навык работы с фреймворком Next, а также научиться работать с графиками. Для проекта был использован api сайта [CoinGecko](https://www.coingecko.com/).    

Во время разработки:
* Использовал фреймворк [Next](https://nextjs.org/)
* Использовал типизацию [TypeScript](https://www.typescriptlang.org/)
* Писал стили с помощью css-фреймворка - [Tailwindcss](https://tailwindcss.com/)
* Взаимодействовал с REST API сайта [CoinGecko](https://www.coingecko.com/)
* Использовал библиотеку для фетчинга данных - [SWR](https://swr.vercel.app/ru)
* Создал два вида графиков с помощю библиотеки - [Chart.js](https://www.chartjs.org/)
* Использовал тултипы из библиотеки - [Tippy.js](https://atomiks.github.io/tippyjs/)
* Разработал пагинацию
* Разработал поиск по криптовалютам
* Разработал таблицу с сортировкой по столбцу
* Разработал конвертер валют
* Использовал хостинг [Vercel](https://vercel.com)


<!-- GETTING STARTED -->
## Запуск локально

Если вы хотите запустить проект локально, следуйте следующим инструкциям.

1. Склонируйте репозиторий
   ```sh
   git clone https://github.com/shtxkrxl/crypto-app.git
   ```
2. Установите NPM пакеты
   ```sh
   npm install
   ```
3. Запустите проект на локальном сервере
   ```sh
   npm run dev
   ```
4. Откройте [http://localhost:3000](http://localhost:3000) в своём браузере чтобы увидеть результат

<!-- LICENSE -->
## Лицензия

Распространяется под лицензией MIT License. Читайте `LICENSE.txt` для большей информации.

<!-- CONTACT -->
## Контакты

Александр Кальмаев - <a href="mailto:shtxkrxl@yandex.ru" target="_blank">shtxkrxl@yandex.ru</a>

Ссылка на проект: [https://github.com/shtxkrxl/crypto-app](https://github.com/shtxkrxl/crypto-app)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[commits-shield]: https://img.shields.io/github/commit-activity/t/shtxkrxl/crypto-app.svg?style=for-the-badge
[commits-url]: https://github.com/shtxkrxl/crypto-app/graphs/commit-activity
[issues-shield]: https://img.shields.io/github/issues/shtxkrxl/crypto-app.svg?style=for-the-badge
[issues-url]: https://github.com/shtxkrxl/crypto-app/issues
[license-shield]: https://img.shields.io/github/license/shtxkrxl/crypto-app.svg?style=for-the-badge
[license-url]: https://github.com/shtxkrxl/crypto-app/blob/master/LICENSE.txt
