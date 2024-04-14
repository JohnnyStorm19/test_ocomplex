## Тестовое задание o_complex

Запустите dev-server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Откройте [http://localhost:3000](http://localhost:3000) в вашем браузере

## Описание задания и реализация
Подробное описание задания и ТЗ к нему можно посмотреть [здесь](https://nubersss.notion.site/React-Developer-Next-js-09c47b36c56447329399c044831c7ef9)

По функционалу:
- реализована подгрузка страниц по скроллу
- адаптив
- маска для ввода телефона в инпуте
- валидация формы
- пуш-уведомления о добавлении товара в корзину
- пуш-уведомления об успешной/не успешной отправке заказа
- при нажатии на кнопку "купить", она меняется на кнопки + и - и поле для ввода кол-ва товара, значение поля 1, согласно ТЗ
- предусмотрена реализация случаев xss атаки через контент отзывов
- в основе тестового задания лежит FSD-архитектура *(в быстром и грубоватом исполнении)*
- проект разбит на слои, что позволит масштабировать проект и добавлять функционал

## Какие инструменты использовал при выполнении

- [Next.js](https://nextjs.org/docs)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/) - стилизация
- [useContext, localStorage](#) - работа со стором корзины + работа с локальным стором для номера телефона и товаров в корзине
- [isomorphic-dompurify](https://www.npmjs.com/package/isomorphic-dompurify) - предоствращение XSS-атак
- [tanstack-query](https://tanstack.com/) - работа с запросами, в частности fetch по скроллу (infiniteScroll)
- [react-hook-form](https://react-hook-form.com/) - работа с формами, кастомная валидация
- [react-hot-toast](https://react-hot-toast.com/) - пуш-оповещения
- [react-number-format](https://www.npmjs.com/package/react-number-format) - маска для телефона

