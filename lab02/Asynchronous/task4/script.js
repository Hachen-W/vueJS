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

async function load_images()
{
    try {
        let1 = await load_image(prompt(`Введите URL картинки`));
        let2 = await load_image(prompt(`Введите URL картинки`));
        let3 = await load_image(prompt(`Введите URL картинки`));
        let4 = await load_image(prompt(`Введите URL картинки`));
        let5 = await load_image(prompt(`Введите URL картинки`));
        return [let1, let2, let3, let4, let5];
    }
    catch (e) {
        console.log("ERROR" + e.message);
        return null;
    }
}


function main()
{
    load_images()
    .then(
        function (images) {
            for (let index = 0; index < 5; index++) {
                console.log(images[index].src + "loaded");
                container.append(images[index]);
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
