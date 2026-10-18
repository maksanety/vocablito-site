(() => {
  document.documentElement.classList.add('js');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- texts: Ukrainian is in the HTML, Russian lives here ----------
  const RU = {
    'nav.how': 'Как работает', 'nav.why': 'Почему работает', 'nav.langs': 'Языки', 'nav.faq': 'Вопросы',
    'hero.pill': 'Английский · испанский · немецкий',
    'hero.title': 'Слова с урока, которые <em>остаются</em> в голове',
    'hero.lead': 'Записываешь новое слово за секунду, а Vocablito сам напомнит его именно тогда, когда оно уже почти забылось. Пять минут в день, и слова переходят в долгую память.',
    'store.small': 'Скоро в', 'hero.more': 'Как это работает',
    'tick.1': 'Без рекламы', 'tick.2': 'Работает без интернета', 'tick.3': 'На украинском и русском',
    'fl.1': 'запись', 'fl.2': 'рука', 'fl.3': 'уютный', 'fl.4': 'на самом деле', 'streak': 'дней подряд',
    'how.kicker': 'Как это работает', 'how.title': 'Три шага, и слово твоё',
    'how.1.t': 'Записываешь слова прямо на уроке',
    'how.1.p': 'Пишешь как удобно: «la mano рука» или просто слово. Перевод подставится сам из встроенного словаря.',
    'how.2.t': 'Пять минут в день',
    'how.2.p': 'Приложение уже знает, что повторить сегодня. Короткая тренировка из разных упражнений: выбор, на слух, письмо, пропуск в предложении.',
    'how.3.t': 'Слова остаются надолго',
    'how.3.p': 'Каждое слово возвращается через всё более длинные промежутки: день, неделя, месяц. То, что ты уже знаешь, не отнимает время.',
    'why.kicker': 'Почему это работает', 'why.title': 'Не зубрёжка, а наука о памяти',
    'why.1.t': 'Повторение в нужный момент',
    'why.1.p': 'Без повторения новое слово быстро ускользает. Если вспомнить его именно тогда, когда оно начинает забываться, память каждый раз крепнет, и следующее повторение можно отложить подольше.',
    'why.curve.x': 'время', 'why.curve.a': 'без повторений', 'why.curve.b': 'с Vocablito',
    'why.2.t': 'Вспоминать, а не перечитывать',
    'why.2.p': 'Когда пытаешься самостоятельно вспомнить слово, оно запоминается лучше, чем когда просто смотришь на него. Поэтому Vocablito спрашивает в обе стороны: сначала видишь английское и вспоминаешь перевод, потом видишь русское и вспоминаешь английское.',
    'why.dir.a': 'узнать', 'why.dir.a2': 'брать взаймы', 'why.dir.b': 'вспомнить', 'why.dir.b2': 'брать взаймы',
    'feat.kicker': 'Что внутри', 'feat.title': 'Всё для слов, ничего лишнего',
    'f.1.t': 'Озвучка каждого слова и примера', 'f.1.p': 'Слушай произношение сколько угодно раз, а в упражнениях на слух угадывай слово по голосу.',
    'f.2.t': 'Умная проверка', 'f.2.p': 'Пропущенное ударение, умлаут или одна ошибка в букве не считаются провалом: приложение покажет, что исправить.',
    'f.3.t': 'Квиз за минуту', 'f.3.p': 'Проверь себя на всём словаре или только на словах последнего урока.',
    'f.4.t': 'Прогресс и серия дней', 'f.4.p': 'Видишь, сколько слов уже выучено, и не хочется прерывать серию.',
    'f.5.t': 'Для занятия с репетитором', 'f.5.p': 'Отметь слова, которые хочешь разобрать, и покажи список на уроке.',
    'f.6.t': 'Без рекламы и слежки', 'f.6.p': 'Слова хранятся на твоём телефоне. Мы не показываем рекламу и не собираем аналитику.',
    'scr.kicker': 'Как это выглядит', 'scr.title': 'Спокойно, просто, без отвлечений',
    'scr.1': 'План на сегодня', 'scr.2': 'Новое слово с примером', 'scr.3': 'Выбери перевод', 'scr.4': 'Слово в контексте', 'scr.5': 'Прогресс и активность',
    'lang.kicker': 'Языки', 'lang.title': 'Выбирай язык, который учишь',
    'lang.en': 'От бытовых слов до ловушек вроде actually, которое вовсе не «актуально». Готовые наборы A1-A2 и проверка написания.',
    'lang.es': 'Испанский Испании: тематические наборы, проверка ударений и ñ, синонимы.',
    'lang.de': 'Артикли der, die, das и умлауты: приложение заметит, если род не тот. Готовые наборы A1-A2.',
    'lang.note': 'Переводы на русском или украинском. У каждого курса свой словарь и свой прогресс.',
    'faq.kicker': 'Вопросы', 'faq.title': 'Частые вопросы',
    'q.1': 'Когда можно скачать?', 'a.1': 'Vocablito сейчас на финальном тестировании и скоро появится в App Store для iPhone и в Google Play для Android.',
    'q.2': 'Нужен ли интернет?', 'a.2': 'Нет. Слова, повторения и озвучка работают на телефоне без сети.',
    'q.3': 'Откуда берутся переводы?', 'a.3': 'Встроенный словарь подсказывает перевод, когда ты добавляешь слово. Его всегда можно заменить своим.',
    'q.4': 'Подойдёт ли для начинающих?', 'a.4': 'Да. Можно начать с готовых слов: примеры в них уровня A1-A2.',
    'q.5': 'Мои данные в безопасности?', 'a.5': 'Слова хранятся на твоём телефоне. Мы не продаём и не передаём данные.', 'a.5l': 'Политика конфиденциальности',
    'q.6': 'Я репетитор. Как отправить слова ученикам?',
    'a.6': 'В Vocablito есть кабинет репетитора: ученики подключаются по коду, а ты видишь их прогресс и трудные слова и присылаешь слова с урока прямо в приложение. Без приложения тоже можно: вставь слова на странице для репетиторов и отправь ученику ссылку.',
    'a.6l': 'Создать список',
    'q.7': 'Можно перенести слова из Anki или Quizlet?',
    'a.7': 'Да. Экспортируй колоду как текст, и Vocablito добавит карточки, проверив повторы и ошибки. Прогресс повторений начинается заново.',
    'end.title': 'Начни с пяти минут сегодня',
    'end.p': 'Vocablito скоро в App Store и Google Play. Напиши нам, и мы сообщим, как только он выйдет.',
    'end.btn': 'Сообщите мне',
    'foot.privacy': 'Конфиденциальность', 'foot.support': 'Поддержка', 'foot.tutors': 'Для репетиторов',
  };
  const META = {
    uk: { title: document.title, desc: document.querySelector('meta[name=description]').content },
    ru: {
      title: 'Vocablito: слова с урока, которые остаются в голове',
      desc: 'Vocablito помогает запомнить слова с уроков английского, испанского и немецкого: пять минут в день, интервальные повторения, квиз и озвучка. На русском и украинском.',
    },
  };

  const SHOTS = ['home', 'card', 'choice', 'correct', 'progress'];
  const UK = {};
  document.querySelectorAll('[data-t]').forEach((el) => (UK[el.dataset.t] = el.textContent));
  document.querySelectorAll('[data-t-html]').forEach((el) => (UK[el.dataset.tHtml] = el.innerHTML));
  let lang = 'uk';

  function setLang(next) {
    lang = next;
    const dict = next === 'ru' ? RU : UK;
    document.documentElement.lang = next;
    document.querySelectorAll('[data-t]').forEach((el) => { const v = dict[el.dataset.t]; if (v != null) el.textContent = v; });
    document.querySelectorAll('[data-t-html]').forEach((el) => { const v = dict[el.dataset.tHtml]; if (v != null) el.innerHTML = v; });
    document.title = META[next].title;
    document.querySelector('meta[name=description]').content = META[next].desc;
    document.querySelectorAll('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));
    buildMarquee();
    // App screenshots in the same language as the page.
    document.querySelectorAll('img[src^="img/"][src$=".webp"]').forEach((img) => {
      const name = img.getAttribute('src').replace(/^img\/|(-ru)?\.webp$/g, '');
      if (SHOTS.includes(name)) img.src = `img/${name}${next === 'ru' ? '-ru' : ''}.webp`;
    });
    try { localStorage.setItem('vocablito-lang', next); } catch (e) { /* private mode */ }
  }

  // ---------- word marquee ----------
  const WORDS = [
    ['appointment', 'запис', 'запись'], ['la mano', 'рука', 'рука'], ['das Handy', 'телефон', 'телефон'],
    ['actually', 'насправді', 'на самом деле'], ['echar de menos', 'сумувати', 'скучать'], ['gemütlich', 'затишний', 'уютный'],
    ['borrow', 'позичати', 'брать взаймы'], ['madrugar', 'рано вставати', 'рано вставать'], ['der Feierabend', 'кінець робочого дня', 'конец рабочего дня'],
    ['make friends', 'заводити друзів', 'заводить друзей'], ['el zumo', 'сік', 'сок'], ['lecker', 'смачний', 'вкусный'],
    ['look forward to', 'чекати з нетерпінням', 'ждать с нетерпением'], ['aprovechar', 'скористатися', 'воспользоваться'], ['vermissen', 'сумувати', 'скучать'],
  ];
  function buildMarquee() {
    const track = document.getElementById('track');
    const i = lang === 'ru' ? 2 : 1;
    const items = WORDS.map((w) => `<span>${w[0]}<i>${w[i]}</i></span>`).join('');
    track.innerHTML = items + items;
  }

  // ---------- init language ----------
  let saved = null;
  try { saved = localStorage.getItem('vocablito-lang'); } catch (e) { /* private mode */ }
  const guess = saved || ((navigator.language || '').toLowerCase().startsWith('ru') ? 'ru' : 'uk');
  setLang(guess);
  document.querySelectorAll('.lang button').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  // ---------- header border ----------
  const top = document.querySelector('.top');
  addEventListener('scroll', () => top.classList.toggle('scrolled', scrollY > 10), { passive: true });

  // ---------- reveal on scroll ----------
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el, n) => {
    el.style.transitionDelay = `${(n % 4) * 70}ms`;
    io.observe(el);
  });

  if (reduce) return;

  // ---------- phone screens ----------
  const shots = [...document.querySelectorAll('.screens img')];
  let cur = 0;
  setInterval(() => {
    shots[cur].classList.remove('on');
    cur = (cur + 1) % shots.length;
    shots[cur].classList.add('on');
  }, 3200);

  // ---------- flip cards ----------
  const flips = [...document.querySelectorAll('.flip')];
  let fi = 0;
  setInterval(() => {
    flips[fi % flips.length].classList.toggle('turn');
    fi++;
  }, 1100);

  // ---------- phone tilt ----------
  const stage = document.getElementById('stage');
  const phone = stage.querySelector('.phone');
  if (matchMedia('(pointer: fine)').matches) {
    stage.addEventListener('pointermove', (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      phone.style.transform = `rotateY(${-14 + x * 22}deg) rotateX(${6 - y * 16}deg)`;
    });
    stage.addEventListener('pointerleave', () => { phone.style.transform = ''; });
  }
})();
