//Async and await

const getImagen = async() => {

    try {
        const apiKey = 'hW8Rkt3pM65rPvq5dk6oMPnLGGVV8ISs';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch(error) {
        //menejo del error
        console.error(error);
    }
}

getImagen();