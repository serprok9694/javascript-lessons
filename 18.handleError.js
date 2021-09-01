// * Обработка ошибок

// обработки ошибок должны информировать пользователей о том, что происходит, для этого применяются разыне способы обработки js-ошибок по мере их возникновения

// ошибки могут возникать из-за наших промахов, неожиданного ввода пользователя, неправильно ответа сервера и по тысяче других причин

// try ... catch
// для обработки исключений в JavaScript была представлена конструкция try ... catch

try {
    // код, который может привести к ошибке
} catch (error) {
    // действия при возникновении ошибки
};

// если в разделе try происходит ошибка, выполнение кода немедленно прекращается и возобновляется с раздела catch, в который передается объект со сведениями об ошибке

// необязательное предложение finally инструкции try ... catch выполняется после нее в любом случае независимо от того, возникла ли ошибка
// ничто в разделе try или catch, даже инструкция return6 не может предотвратить выполнение кода в finally

function testFinally () {
    try {
        return 2;
    } catch (error) {
        return 1;
    } finally {
        return 0;
    };
};




// * Задача

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const saveToStorage = (data, keyName) => {
    localStorage.setItem(keyName, JSON.stringify(data));
};

const getDataFromStorage = (keyName) => {
    const dataFromStorage = localStorage.getItem(keyName);
    return JSON.parse(dataFromStorage);
};

const getPokemons = async () => {
    try {
        const pokemonList = await fetch(baseUrl)
            .then(response => response.json())
            .then(items => items.results);
        const pokemonResults = pokemonList.reduce((result, pokemon) => {
            result[pokemon.name] = pokemon.url;
            return result;
        }, {});
        saveToStorage(pokemonResults, 'pokemons');

        const newPokemons = getDataFromStorage('pokemons');
        console.log(newPokemons);

    } catch (error) {
        
    }
};

getPokemons();