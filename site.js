(() => {
  'use strict';

  const EN_TO_RU = {
    'Projects': 'Проекты', 'About': 'О нас', 'Privacy': 'Конфиденциальность', 'Terms': 'Условия',
    'All projects': 'Все проекты', '← All projects': '← Все проекты', '← Home': '← На главную', 'Launcher': 'Лаунчер', 'Beta v0.1': 'Бета v0.1',
    'INDEPENDENT TEAM · DIGITAL PROJECTS': 'НЕЗАВИСИМАЯ КОМАНДА · ЦИФРОВЫЕ ПРОЕКТЫ',
    'Ideas become': 'Идеи становятся', 'useful tools.': 'полезными инструментами.',
    'NiXBi is an independent project team exploring practical desktop utilities, automation, and community services. Each project has its own purpose, status, and support channel.': 'NiXBi — независимая команда, которая создаёт настольные утилиты, инструменты автоматизации и сервисы для сообщества. У каждого проекта своя задача, стадия разработки и канал поддержки.',
    'Explore projects': 'Посмотреть проекты', 'Meet us on GitHub ↗': 'Мы на GitHub ↗',
    'Independent': 'Независимость', 'Built in public where possible': 'Открытая разработка там, где это возможно',
    'Multi-project': 'Несколько проектов', 'Different ideas, one team': 'Разные идеи — одна команда',
    'In progress': 'В разработке', 'Products evolve over time': 'Проекты развиваются со временем',
    'THE PROJECTS': 'ПРОЕКТЫ', 'One team. Different directions.': 'Одна команда. Разные направления.',
    'Choose a project to learn what it does, its current stage, and where to find it.': 'Выбери проект, чтобы узнать о его возможностях, стадии разработки и способах связи.',
    'In active development': 'Активная разработка', 'DESKTOP · WINDOWS': 'ПРИЛОЖЕНИЕ · WINDOWS',
    'A customizable launcher for apps, scripts, quick actions, and extensions — including a configurable radial menu and optional Gmail integration.': 'Настраиваемый лаунчер для приложений, скриптов, быстрых действий и расширений — с радиальным меню и дополнительной интеграцией Gmail.',
    'Windows': 'Windows', 'Extensions': 'Расширения', 'Radial menu': 'Радиальное меню',
    'Explore launcher': 'О лаунчере', 'Manager-assisted': 'С участием менеджеров', 'Beta': 'Бета',
    'TELEGRAM · DIGITAL GIFTS': 'TELEGRAM · ЦИФРОВЫЕ ПОДАРКИ',
    'A Telegram bot for coordinating purchases and sales of digital gifts. During the beta, order steps are reviewed and confirmed by managers.': 'Telegram-бот для координации покупки и продажи цифровых подарков. В бета-версии этапы заказа проверяют и подтверждают менеджеры.',
    'Explore the bot': 'О боте', 'Open bot ↗': 'Открыть бота ↗', 'Exploration': 'Исследование идеи',
    'TOOLS · EXPERIMENTS': 'ИНСТРУМЕНТЫ · ЭКСПЕРИМЕНТЫ', 'What’s next': 'Что дальше',
    'More small utilities and ideas may appear here as they become ready to share. We’ll publish details when a project has a clear purpose and status.': 'Здесь могут появляться новые небольшие утилиты и идеи по мере готовности. Мы публикуем подробности, когда у проекта определены назначение и статус.',
    'Prototypes': 'Прототипы', 'Future projects': 'Будущие проекты', 'Follow development': 'Следить за разработкой',
    'ABOUT NIXBI': 'О NIXBI', 'A small, independent team.': 'Небольшая независимая команда.',
    'We build and test our projects incrementally. Pages identify each project separately so its functionality, maturity, and contact route are clear.': 'Мы постепенно создаём и тестируем проекты. Для каждого есть отдельная страница с описанием возможностей, стадии готовности и способа связи.',
    'Some projects are experimental. A beta label means features and workflows can change; read each project page and its in-app notices before relying on it.': 'Некоторые проекты экспериментальные. Статус «бета» означает, что функции и процессы могут меняться. Перед использованием изучи страницу проекта и предупреждения внутри приложения.',
    'GitHub profile': 'Профиль GitHub', 'Clear project boundaries': 'Разделение проектов',
    'NiXBi Launcher and Gifts Pokup Bot are separate projects. The launcher’s privacy policy describes its optional Google/Gmail integration; it does not mean the Telegram bot uses or accesses Gmail data.': 'NiXBi Launcher и Gifts Pokup Bot — отдельные проекты. Политика лаунчера описывает дополнительную интеграцию с Google/Gmail и не означает, что Telegram-бот использует или получает доступ к данным Gmail.',
    'Independent projects by NiXBiofc': 'Независимые проекты NiXBiofc', 'Independent project by NiXBiofc': 'Независимый проект NiXBiofc',
    'NIXBI Launcher — NiXBi Projects': 'NIXBI Launcher — проекты NiXBi', 'Gifts Pokup Bot — NiXBi Projects': 'Gifts Pokup Bot — проекты NiXBi',
    'A configurable Windows desktop launcher that brings apps, scripts, extensions, and quick actions together in one place.': 'Настраиваемый лаунчер для Windows, который объединяет приложения, скрипты, расширения и быстрые действия в одном месте.',
    'View GitHub ↗': 'Открыть GitHub ↗', 'Privacy & Gmail data': 'Конфиденциальность и данные Gmail',
    'Apps and scripts': 'Приложения и скрипты', 'Keep frequently used applications, paths, and Python tools within reach.': 'Держи часто используемые приложения, пути и Python-инструменты под рукой.',
    'Open shortcuts and branches from a compact menu with configurable positions and animations.': 'Открывай ярлыки и ветки из компактного меню с настраиваемым расположением и анимацией.',
    'Personal appearance': 'Персональное оформление', 'Choose a classic look or glass-inspired surfaces, tint colors, and a custom background image.': 'Выбирай классическое или стеклянное оформление, оттенки поверхностей и собственное фоновое изображение.',
    'Optional Gmail integration': 'Дополнительная интеграция Gmail',
    'The current integration can request Google permission to access Gmail data and show labels in the launcher. See the privacy policy for the intended data handling.': 'Текущая интеграция может запрашивать у Google разрешение на доступ к данным Gmail и отображать ярлыки в лаунчере. Подробнее об обработке данных — в политике конфиденциальности.',
    'Development status': 'Стадия разработки',
    'NIXBI Launcher is under active development. Features and interface details may change between releases. Google sign-in and Gmail access depend on the OAuth project configuration and Google’s applicable review requirements.': 'NIXBI Launcher активно разрабатывается. Функции и интерфейс могут меняться между версиями. Вход через Google и доступ к Gmail зависят от настроек OAuth-проекта и применимых требований проверки Google.',
    'A Telegram bot for coordinating the purchase and sale of digital gifts. During the beta, requests are handled with help from managers.': 'Telegram-бот для координации покупки и продажи цифровых подарков. В бета-версии заявки обрабатываются при участии менеджеров.',
    'Open @giftspokupbot ↗': 'Открыть @giftspokupbot ↗', 'Support via the bot': 'Поддержка через бота',
    'HOW THE BETA WORKS': 'КАК РАБОТАЕТ БЕТА', 'How it works': 'Как это работает',
    'The process is not fully automated yet; managers assist with certain steps.': 'Процесс пока автоматизирован не полностью: на отдельных этапах помогают менеджеры.',
    'Create a request': 'Создание заявки', 'The user reviews the instructions and creates a request in the bot.': 'Пользователь изучает инструкции и создаёт заявку в боте.',
    'Manager review': 'Проверка менеджером', 'A manager reviews the order details and, if needed, contacts participants through the bot’s official channel.': 'Менеджер проверяет детали заказа и при необходимости связывается с участниками через официальный канал бота.',
    'Transfer confirmation': 'Подтверждение передачи',
    'According to the team’s description, an order is confirmed as complete after the gift transfer is checked. During beta, this process is monitored manually.': 'Согласно описанию команды, заказ подтверждается после проверки передачи подарка. В бета-версии процесс контролируется вручную.',
    'Before you use the bot': 'Перед использованием бота',
    'The project is in beta, and procedures or terms may change. The team states that the current version does not charge a commission; check the current terms in the bot before each transaction. Digital-asset transfers involve risk: verify the order and recipient, and never share passwords, sign-in codes, or account access.': 'Проект находится в бета-версии, поэтому порядок работы и условия могут измениться. Команда сообщает, что текущая версия не берёт комиссию; перед каждой сделкой проверяй актуальные условия в боте. Передача цифровых активов связана с риском: проверяй заказ и получателя, никогда не сообщай пароли, коды входа или данные для доступа к аккаунту.',
    'This page describes the process as presented by the team. It is not an independent audit or a guarantee of results. The NiXBi website does not accept payments or conduct transactions.': 'На этой странице процесс описан со слов команды. Это не независимая проверка сервиса и не гарантия результата. Сайт NiXBi не принимает платежи и не проводит сделки.',
    'Open the bot’s “How it works” section ↗': 'Открыть раздел бота «Как работает» ↗',
    'QUESTIONS & SUGGESTIONS': 'ВОПРОСЫ И ПРЕДЛОЖЕНИЯ', 'Contact us through the bot': 'Свяжитесь с нами через бота',
    'Use `/help` in the bot to request help, or `/predlozh` to send a suggestion.': 'Используйте `/help` в боте для помощи или `/predlozh`, чтобы отправить предложение.',
    'Open Telegram ↗': 'Открыть Telegram ↗', 'A community project by NiXBiofc': 'Проект сообщества NiXBiofc',
    'TRANSPARENCY': 'ПРОЗРАЧНОСТЬ', '← Home': '← На главную', 'Privacy Policy': 'Политика конфиденциальности',
    'Last updated: 11 October 2026': 'Обновлено: 11 октября 2026 г.',
    '1. About this site': '1. Об этом сайте',
    'This website introduces independent projects associated with NiXBiofc. The pages are static and do not provide user registration, payment processing, or website forms. The site is hosted by GitHub Pages; GitHub may process technical information such as IP addresses and request data for hosting, security, and abuse prevention under its own policies.': 'Этот сайт представляет независимые проекты, связанные с NiXBiofc. Страницы статические: на сайте нет регистрации пользователей, обработки платежей или веб-форм. Сайт размещён на GitHub Pages; GitHub может обрабатывать технические данные, например IP-адреса и сведения о запросах, для хостинга, безопасности и предотвращения злоупотреблений в соответствии со своими правилами.',
    '2. NIXBI Launcher and Google data': '2. NIXBI Launcher и данные Google',
    'NIXBI Launcher is a separate Windows application. If you choose to connect a Google account, the application may request the Gmail API permission shown on Google’s consent screen. The current implementation requests': 'NIXBI Launcher — отдельное приложение для Windows. Если ты решишь подключить аккаунт Google, приложение может запросить разрешение Gmail API, указанное на экране согласия Google. Текущая версия запрашивает',
    '; this is broader than simply opening labels and allows access to Gmail data covered by that scope. Do not connect an account unless you understand and accept the requested permission.': '; это разрешение шире простого открытия ярлыков и позволяет получать доступ к данным Gmail, охватываемым этой областью доступа. Не подключай аккаунт, если не понимаешь и не принимаешь запрашиваемые разрешения.',
    "In the intended desktop architecture, the application communicates with Google APIs from the user's device. OAuth token data is stored locally on Windows and protected using Windows Data Protection API (DPAPI). NiXBi does not intend to operate a backend that receives Gmail message contents. This description must be kept aligned with each released build; consult the release documentation and Google consent screen for the actual permissions in use.": 'В предусмотренной настольной архитектуре приложение обращается к API Google с устройства пользователя. Данные OAuth-токенов хранятся локально в Windows и защищаются Windows Data Protection API (DPAPI). NiXBi не планирует использовать сервер, который получает содержимое писем Gmail. Это описание должно соответствовать каждому опубликованному выпуску; фактические разрешения проверяйте в документации выпуска и на экране согласия Google.',
    "Google data accessed by NIXBI Launcher is used only to provide the feature you enable, such as displaying Gmail labels and opening the relevant Gmail view. It is not intended to be sold, used for advertising, or shared with third parties except as required to provide the feature, comply with law, or at the user's direction. The app's use of Google data is intended to follow the Google API Services User Data Policy, including the Limited Use requirements.": 'Данные Google, к которым обращается NIXBI Launcher, используются только для предоставления включённой тобой функции, например отображения ярлыков Gmail и открытия соответствующего раздела Gmail. Их не планируется продавать, использовать для рекламы или передавать третьим лицам, кроме случаев, необходимых для работы функции, соблюдения закона или по указанию пользователя. Использование данных Google должно соответствовать Google API Services User Data Policy, включая требования Limited Use.',
    '3. Local account data': '3. Локальные данные аккаунта',
    "Google credentials and account tokens are distinct from the public website. They should never be uploaded to this repository, attached to issue reports, or included in a shared launcher ZIP. To disconnect an account, use the app's account controls and/or revoke the app's access from your Google Account security settings. Removing local application files may not revoke an authorization previously granted to Google.": 'Данные входа Google и токены аккаунта не относятся к публичному сайту. Их нельзя загружать в этот репозиторий, прикреплять к сообщениям об ошибках или включать в ZIP лаунчера для распространения. Чтобы отключить аккаунт, воспользуйся настройками аккаунтов в приложении и/или отзови доступ в настройках безопасности Google Account. Удаление локальных файлов приложения может не отменить ранее выданное разрешение Google.',
    '4. Gifts Pokup Bot': '4. Gifts Pokup Bot',
    "Gifts Pokup Bot is a separate Telegram project. This website does not handle its orders or payments. When you interact with the bot, Telegram and the bot's operators may process the information you provide in Telegram. Review the bot's in-app instructions before use; contact the project through the bot for questions about its processing practices.": 'Gifts Pokup Bot — отдельный проект в Telegram. Этот сайт не обрабатывает его заказы и платежи. При взаимодействии с ботом Telegram и операторы бота могут обрабатывать сведения, которые ты предоставляешь в Telegram. Перед использованием ознакомься с инструкциями внутри бота; по вопросам обработки данных обращайся к команде через бот.',
    '5. External services and changes': '5. Сторонние сервисы и изменения',
    'Links may lead to GitHub, Google, Telegram, or other third-party services governed by their own privacy terms. This policy may be updated as projects evolve. The date above indicates the latest revision of this page.': 'Ссылки могут вести на GitHub, Google, Telegram и другие сторонние сервисы, которые регулируются собственными правилами конфиденциальности. Эта политика может обновляться по мере развития проектов. Дата выше указывает на последнее обновление страницы.',
    'For questions about the site or projects, contact the project maintainer through the': 'По вопросам о сайте или проектах свяжись с сопровождающим проекта через',
    'NiXBiofc GitHub profile': 'профиль NiXBiofc на GitHub', '.': '.',
    'PROJECT INFORMATION': 'ИНФОРМАЦИЯ О ПРОЕКТАХ', 'Terms of': 'Условия', 'Use': 'использования',
    '1. Independent projects': '1. Независимые проекты',
    'NiXBi is the name used for a collection of independent software and community projects associated with NiXBiofc. Unless explicitly stated otherwise, project information is provided for general informational purposes. Features, availability, and documentation can change.': 'NiXBi — общее название коллекции независимых программных проектов и проектов для сообщества, связанных с NiXBiofc. Если не указано иное, информация о проектах предоставляется в ознакомительных целях. Возможности, доступность и документация могут меняться.',
    '2. NIXBI Launcher': '2. NIXBI Launcher',
    'The launcher is under development and is provided as-is. You are responsible for choosing extensions, files, accounts, and permissions to use with it. Review OAuth permission prompts carefully and keep your account credentials and tokens private.': 'Лаунчер находится в разработке и предоставляется «как есть». Ты самостоятельно выбираешь расширения, файлы, аккаунты и разрешения, используемые с ним. Внимательно проверяй запросы OAuth и не раскрывай данные входа и токены.',
    '3. Gifts Pokup Bot beta': '3. Бета-версия Gifts Pokup Bot',
    'Gifts Pokup Bot is an experimental Telegram project for coordinating digital-gift transactions. During beta, parts of the described process are handled by managers rather than fully automated. Availability, procedures, and fees (if any) should be checked in the bot immediately before a transaction. A page description is not a guarantee that a transaction will complete or that another participant will perform as expected.': 'Gifts Pokup Bot — экспериментальный проект в Telegram для координации сделок с цифровыми подарками. Во время бета-тестирования некоторые этапы выполняют менеджеры, а не автоматическая система. Перед каждой сделкой проверяй в боте доступность, порядок работы и возможные комиссии. Описание на сайте не гарантирует завершение сделки или ожидаемое поведение другого участника.',
    'Digital assets and peer-to-peer transactions involve risk. Check order details and recipient information independently. Never share account passwords, one-time verification codes, or private account access. The NiXBi website itself does not take orders, hold funds, or perform transfers.': 'Операции с цифровыми активами и сделки между пользователями связаны с риском. Самостоятельно проверяй детали заказа и данные получателя. Никогда не сообщай пароли аккаунтов, одноразовые коды подтверждения или данные доступа. Сам сайт NiXBi не принимает заказы, не хранит средства и не выполняет переводы.',
    '4. Third-party services': '4. Сторонние сервисы',
    'Google, GitHub, Telegram, and other services are operated by their respective providers and are governed by their terms. NiXBi is not affiliated with or endorsed by Google or Telegram unless explicitly stated.': 'Google, GitHub, Telegram и другие сервисы управляются соответствующими поставщиками и регулируются их условиями. Если прямо не указано иное, NiXBi не связан с Google или Telegram и не получает их одобрения.',
    '5. Contact': '5. Контакты',
    'For project questions, use the relevant project’s official support route. For general questions, visit the': 'По вопросам конкретного проекта используй его официальный канал поддержки. По общим вопросам перейди в',
  };

  const RU_TO_EN = {
    'Все проекты': 'All projects', 'Главная навигация': 'Main navigation',
    'Telegram-проект для организации покупки и продажи цифровых подарков. Beta v0.1.': 'A Telegram project for coordinating digital gift transactions. Beta v0.1.',
    'Открыть @giftspokupbot ↗': 'Open @giftspokupbot ↗', 'Поддержка — через бота': 'Support via the bot',
    'КАК УСТРОЕНА BETA-ВЕРСИЯ': 'HOW THE BETA WORKS', 'Порядок работы': 'How it works',
    'Текущий процесс не полностью автоматизирован: отдельные шаги проходят с участием менеджеров.': 'The process is not fully automated yet; managers assist with certain steps.',
    'Создание заявки': 'Create a request', 'Пользователь изучает инструкции и создаёт запрос в боте.': 'The user reviews the instructions and creates a request in the bot.',
    'Проверка менеджером': 'Manager review', 'Менеджер просматривает детали заказа и при необходимости связывается с участниками через официальный канал бота.': 'A manager reviews the order details and, if needed, contacts participants through the bot’s official channel.',
    'Подтверждение передачи': 'Transfer confirmation',
    'По описанию команды, завершение заказа подтверждается после проверки передачи подарка. В beta процесс контролируется вручную.': 'According to the team’s description, an order is confirmed as complete after the gift transfer is checked. During beta, this process is monitored manually.',
    'Важно перед использованием': 'Before you use the bot',
    'Проект находится в beta; порядок работы и условия могут меняться. Команда заявляет, что текущая версия не взимает комиссию, но перед каждой сделкой проверяйте актуальные условия прямо в боте. Передача цифровых активов связана с риском: проверяйте детали заказа и получателя, не сообщайте пароли, коды входа или доступ к своему аккаунту.': 'The project is in beta, and procedures or terms may change. The team states that the current version does not charge a commission; check the current terms in the bot before each transaction. Digital-asset transfers involve risk: verify the order and recipient, and never share passwords, sign-in codes, or account access.',
    'Информация на этой странице описывает заявленный процесс и не является независимой проверкой сервиса или гарантией результата. Сайт NiXBi не принимает платежи и не проводит сделки.': 'This page describes the process as presented by the team. It is not an independent audit or a guarantee of results. The NiXBi website does not accept payments or conduct transactions.',
    'Открыть бота и раздел «Как работает» ↗': 'Open the bot’s “How it works” section ↗',
    'ВОПРОСЫ И ПРЕДЛОЖЕНИЯ': 'QUESTIONS & SUGGESTIONS', 'Напишите через бота': 'Contact us through the bot',
    'В боте используйте `/help` для помощи или `/predlozh` для отправки предложения.': 'Use `/help` in the bot to request help, or `/predlozh` to send a suggestion.',
    'Перейти в Telegram ↗': 'Open Telegram ↗', 'Проект сообщества NiXBiofc': 'A community project by NiXBiofc',
  };

  const TITLE_RU = {
    'NiXBi — Independent Projects & Tools': 'NiXBi — независимые проекты и инструменты',
    'NIXBI Launcher — NiXBi Projects': 'NIXBI Launcher — проекты NiXBi',
    'Gifts Pokup Bot — NiXBi Projects': 'Gifts Pokup Bot — проекты NiXBi',
    'Privacy — NiXBi': 'Конфиденциальность — NiXBi',
    'Terms — NiXBi': 'Условия использования — NiXBi',
  };
  const DESC_RU = {
    'NiXBi is an independent team building desktop tools and community projects.': 'NiXBi — независимая команда, создающая настольные инструменты и проекты для сообщества.',
    'NIXBI Launcher: a customizable Windows launcher for apps, scripts, extensions, and quick actions.': 'NIXBI Launcher — настраиваемый лаунчер для Windows, приложений, скриптов, расширений и быстрых действий.',
    'Gifts Pokup Bot — a Telegram project for coordinating digital gift transactions. Beta v0.1.': 'Gifts Pokup Bot — Telegram-проект для координации сделок с цифровыми подарками. Бета v0.1.',
    'Privacy information for the NiXBi project website and NIXBI Launcher.': 'Информация о конфиденциальности сайта проектов NiXBi и NIXBI Launcher.',
    'Terms and project notices for NiXBi websites and projects.': 'Условия и уведомления для сайтов и проектов NiXBi.',
  };

  const textNodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent || parent.closest('script,style,button.language-toggle,[data-no-translate]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const original = node.nodeValue;
    const trimmed = original.trim();
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    textNodes.push({ node, original, trimmed, leading, trailing });
  }

  const languageButton = document.querySelector('[data-lang-toggle]');
  const metaDescription = document.querySelector('meta[name="description"]');
  const originalTitle = document.title;
  const originalDescription = metaDescription?.content || '';
  const privacyHeading = document.querySelector('.privacy-title');

  function applyLanguage(language) {
    const isRussian = language === 'ru';
    document.documentElement.lang = language;
    for (const item of textNodes) {
      const translated = isRussian
        ? (EN_TO_RU[item.trimmed] || item.trimmed)
        : (RU_TO_EN[item.trimmed] || item.trimmed);
      item.node.nodeValue = item.leading + translated + item.trailing;
    }
    if (privacyHeading) privacyHeading.innerHTML = isRussian ? 'Политика <span>конфиденциальности</span>' : 'Privacy <span>Policy</span>';
    document.title = isRussian ? (TITLE_RU[originalTitle] || originalTitle) : originalTitle;
    if (metaDescription) {
      metaDescription.content = isRussian ? (DESC_RU[originalDescription] || originalDescription) : originalDescription;
    }
    if (languageButton) {
      languageButton.textContent = isRussian ? 'EN' : 'RU';
      languageButton.setAttribute('aria-label', isRussian ? 'Switch language to English' : 'Переключить язык на русский');
      languageButton.setAttribute('title', isRussian ? 'Switch to English' : 'Переключить на русский');
    }
    document.querySelectorAll('nav[aria-label]').forEach(nav => nav.setAttribute('aria-label', isRussian ? 'Главная навигация' : 'Main navigation'));
    try { localStorage.setItem('nixbi-site-language', language); } catch (_) { /* storage may be unavailable */ }
  }

  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('nixbi-site-language') || 'en'; } catch (_) { /* use English */ }
  applyLanguage(savedLanguage === 'ru' ? 'ru' : 'en');
  languageButton?.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'ru' ? 'en' : 'ru'));

  // Background glows are part of the scrolling document, with a restrained parallax effect.
  const glows = Array.from(document.querySelectorAll('.ambient'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let scrollPending = false;
  function updateBackground() {
    if (!reduceMotion) {
      const scrollY = window.scrollY || 0;
      glows.forEach((glow, index) => {
        const factor = [0.035, 0.065, 0.045][index % 3];
        glow.style.transform = `translate3d(0, ${Math.round(scrollY * factor)}px, 0)`;
      });
    }
    scrollPending = false;
  }
  window.addEventListener('scroll', () => {
    if (!scrollPending) {
      scrollPending = true;
      window.requestAnimationFrame(updateBackground);
    }
  }, { passive: true });
  updateBackground();
})();
