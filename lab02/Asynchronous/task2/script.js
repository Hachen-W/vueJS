const container = document.getElementById('images');


function load_image(url)
{
    return new Promise(function(resolve, reject) {
            let image = new Image();
            image.onload = () => resolve(image);
            image.onerror = () => reject(new Error("Cannot load image " + url));
            image.src = url;
        }
    )
}


function main()
{
    let url = prompt(`Введите URL картинки`);
    load_image(url)
    .then(
        function (image) {
            console.log(image.src + "loaded");
            container.append(image);
            url = prompt(`Введите URL картинки`);
            return load_image(url);
        }
    )
    .then(
        function (image) {
            console.log(image.src + "loaded");
            container.append(image);
            url = prompt(`Введите URL картинки`);
            return load_image(url);
        }
    )
    .then(
        function (image) {
            console.log(image.src + "loaded");
            container.append(image);
            url = prompt(`Введите URL картинки`);
            return load_image(url);
        }
    )
    .then(
        function (image) {
            console.log(image.src + "loaded");
            container.append(image);
            url = prompt(`Введите URL картинки`);
            return load_image(url);
        }
    )
    .then(
        function (image) {
            console.log(image.src + "loaded");
            container.append(image);
            alert("Все пять изображений загружены");
        }
    )
    .catch(
        function (error) {
            const p = document.createElement('p');
            p.textContent = error.message;
            container.append(p);
        }
    )
}


main()
