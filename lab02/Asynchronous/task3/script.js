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
    Promise.all(
        [
            load_image(prompt(`Введите URL картинки`)),
            load_image(prompt(`Введите URL картинки`)),
            load_image(prompt(`Введите URL картинки`)),
            load_image(prompt(`Введите URL картинки`)),
            load_image(prompt(`Введите URL картинки`)),
        ]
    )
    .then(
        function (image) {
            for (let index = 0; index < 5; index++) {
                console.log(image[index].src + "loaded");
                container.append(image[index]);
            }
        }
    )
    .catch(
        function (error) {
            for (let index = 0; index < 5; index++) {
                const p = document.createElement('p');
                p.textContent = "Can't load messages";
                container.append(p);
            }
        }
    )
}


main()
