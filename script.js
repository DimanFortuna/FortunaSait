// Список названий
const partNames = [
  "Киль","Форштевень","Кноп","Ахтерштевень","Старнкница","Транцевая доска","Привальный брус","Брештук","Шпангоут",
  "Флор","Ширстрек","Шпунтовый пояс","Стрингер продольный","Подвесной рыбин","Транцевая кница","Носовая банка",
  "Мачтовая банка","Средняя банка","Загребная банка","Кормовое сиденье","Стойка банки (пиллерс)","Носовой решетчатый люк",
  "Кормовой решетчатый люк","Съемные щиты (рыбины)","Упоры для ног","Степс мачты","Нагель крепления ванты",
  "Наметка мачты","Кильсон","Продольный брус банки","Оковка транца","Носовой подъемный рым","Носовой цепной погон",
  "Носовое буксирное кольцо","Фальшкиль носовой","Оковка киля","Утка для снастей","Подкильный брус","Водорезный шпигат",
  "Сливной клапан (пробка)","Съемный загребной настил","Спинка кормового сиденья","Уключина","Гнедо уключины",
  "Штертик уключины","Вантпутенс","Кормовой цепной рым","Съемный брус упора ног","Подъемная скоба","Планширь",
  "Накладной брус планаширя","Кормовой полуклюз","Рулевые петли","Рулевые штыри","Перо руля","Головка руля",
  "Румпель","Сорлинь руля","Щеки руля"
];

// Применяем координаты из data-атрибутов
document.querySelectorAll('.part-number').forEach(el => {
  const top = el.getAttribute('data-top');
  const left = el.getAttribute('data-left');
  if (top && left) {
    el.style.top = top + '%';
    el.style.left = left + '%';
  }
  
  // Добавляем интерактивность
  el.addEventListener('click', function(e) {
    e.stopPropagation();
    // удалить старые лейблы
    document.querySelectorAll('.part-label').forEach(label => label.remove());
    // показать подпись у активной детали
    let num = parseInt(this.innerText) - 1;
    let lab = document.createElement('div');
    lab.className = 'part-label';
    lab.innerText = partNames[num] || 'Неизвестная деталь';
    this.appendChild(lab);
    this.classList.add('active');
    setTimeout(() => this.classList.remove('active'), 1500);
  });
  
  el.addEventListener('mouseleave', function() {
    setTimeout(() => this.querySelectorAll('.part-label').forEach(l => l.remove()), 200);
  });
});

// Скролл-эффект: плавно скрываем текст и изменяем размер эмблемы
window.addEventListener('scroll', () => {
  let intro = document.getElementById('intro-text');
  let sc = window.scrollY;
  let fade = Math.max(1 - sc / 200, 0);
  if (intro) intro.style.opacity = fade;
  
  if (sc > 80) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});