# frontend-project-setup

## Необходимо наличие

1. [Node](https://nodejs.org/en/)
2. Npm (по-умолчанию ставится вместое с node)

Проверка:

```bash
$ node -v
v12.14.1
$ npm -v
6.13.4
```

## Шаги

1. Добавим js и html

2. Инициализируем пакет
   ```bash
   $ npm init
   ```

3. Установим jquey и webpack
   ```bash
   $ npm add jquery
   $ npm add webpack webpack-cli -D
   ```

   Изменим js и html

   ```bash
   $ npx webpack
   ```

4. Сконфигурируем webpack через файл `webpack.config.js` и добавим скрипт
   ```bash
   $ npm run build
   ```

5. Добавим webpack dev server и скрипт
   ```bash
   $ npm add webpack-dev-server nodemon -D
   $ npm run start
   ```

   И откроем браузер http://localhost:9000/

6. Генерируем html через webpack
   ```bash
   $ npm add html-webpack-plugin -D
   ```
