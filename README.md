# week16forms

### Вопросы 💎
1. Для чего служат формы на веб-страницах?
Это компонент страницы для получения информации от пользователя.

2. Каким типом задаётся поле ввода в форме текста?
type="text"

3. Какими способами можно обратиться к элементу формы?
По индексу, через атрибут формы name (лучше через name), через id, тег.

4. Что такое событие `submit` для формы и как его можно использовать?
submit - это событие отправки данных формы.
Есть два основных способа отправить форму:
1) нажать кнопку <input type="submit">.
2) нажать Enter, находясь на каком-нибудь поле.
Оба действия сгенерируют событие submit на форме.

5. Восстановить значения умолчания в полях формы можно только по кнопке reset?
Нет, с использованием метода reset через использование его в функции, с помощью атрибута reset в HTML.

6. Каким способом можно отправить данные из формы на сервер?
У тега `form` есть два атрибута: `action` и `method`.
Значение `action` — это ссылка на обработчик. Этим атрибутом мы сообщаем адрес сервера, на который эту форму нужно отправить.
Атрибут `method` принимает значения `GET` или `POST`.
Метод `POST` используется, когда данные есть в браузере и их надо обновить на сервере.

7. Как можно полностью перехватить и обработать js-функцией событие `submit` (отправку данных на сервер)?
event.preventDefault();

8. Какие есть недостатки у стандартного способа задания валидации через HTML5?
Ограниченность - при некорреткно введенных данных выводится автосообщение (нельзя изменить его текст); отсутствие возможности использовать маску для ввода номера (тут нужна связка с JS); стили к псевдоклассам применяются до того, как пользователь начнёт работу с формой. 

9. Какие свойства доступны в объекте `validity` для проверки валидности элемента формы?
valid, customError, patternMismatch, rangeOverflow, rangeUnderflow, stepMismatch, tooLong, tooShort, typeMismatch, valueMissing

10. Как можно проверить, является ли элемент формы валидным с использованием объекта `validity`?
Добавить проверки на свойства `validity`. Каждая проверка должна добавлять соответствующую ошибку в массив errors, если проверка не пройдена.

11. Какие флаги могут быть использованы при создании регулярных выражений и какова их роль?
`i` - флаг, указывающий на регистронезависимый поиск: нет разницы между `A` и `a`
`g` - флаг, указывающий на глобальный поиск всех совпадений, без него будет найдено только первое совпадение
`y` - режим поиска на конкретной позиции в тексте
`m` - многострочный режим
`s` - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n .
`u` - Включает полную поддержку Юникода. Флаг разрешает корректную обработку суррогатных пар 
`y`- Режим поиска на конкретной позиции в тексте
`d` - С этим флагом результат регулярного выражения помещается в массив, который содержит дополнительную информацию о регулярном выражении, например индексы начала и конца подстрок. Этот флаг не меняет поведение регулярного выражения, а лишь предоставляет дополнительную информацию.

12. Что делает метод `match()` при работе с регулярными выражениями? Какие аргументы он принимает?
Метод str.match(regexp) для строки str возвращает массив совпадений с регулярным выражением regexp.


13. Что делает метод `test()` при проверке регулярного выражения на совпадение? Какие значения он возвращает?
Метод regexp.test(str) проверяет, есть ли хотя бы одно совпадение с регулярным выражением regexp в строке str. Если совпадение найдено, метод вернёт true, в противном случае - false.
