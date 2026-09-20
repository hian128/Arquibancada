import axios from 'axios';

//metodo get testando top 10 marcadores da italia

const teste = axios.get('/api/v4/competitions/SA/scorers', {
    headers: {
        'X-Auth-Token': 'de4f6197ef9d4b10adba0dd80e321279'
    }
})

    .then(response => {
        console.log(response.data.scorers);
    })
    .catch(error => {
        console.error(error);
    });

export default teste
