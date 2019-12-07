const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.get('/api/v1/orders', (req, res) => {
  setTimeout(() => {
    res.send(getRandOrders());
  }, 3000);
});

const nouns = [
  'Самолёт',
  'Макбук',
  'Карандаш',
  'Пенал',
  'Гибернатор',
  'Стакан',
  'Стол',
  'Автомобиль',
  'Телефон',
  'Переходник',
  'Чемодан',
  'Трансфунктор',
  'Трап',
  'Рюкзак',
  'Цемент',
  'Нож',
];
const features = [
  'Красный',
  'Быстрый',
  'Автоматический',
  'Гибридный',
  'Нано',
  'Турбо',
  'Супер',
  'Компактный',
  'Стационарный',
  'Классический',
  'Элитный',
  'Треугольный',
  'Полигональный'
];
const countOrders = 15;
const minPrice = 1e2;
const maxPrice = 1e6;
const kinds = [
  'home',
  'clothes',
  'food',
]

function getRandOrders() {
  return range(1, countOrders).map((i) => ({
    id: i + 45342,
    name: getRandName(),
    kind: getRandPart(kinds),
  }));
}
function getRandName() {
  return `${getRandPart(features)} ${getRandPart(nouns).toLowerCase()}`
}
function getRandPart(collection) {
  const i = Math.round(Math.random() * (collection.length - 1));
  return collection[i];
}
function range(from, to) {
  return Array(to - from + 1).fill(0).map((_, i) => i + 1);
}
