const key = "pageLoadCount";

let count = Number(localStorage.getItem(key)) || 0;
count++;
localStorage.setItem(key, count);

console.log(`Вы загрузили/обновили страницу ${count} раз(а).`);
alert(`Вы загрузили/обновили страницу ${count} раз(а).`);
