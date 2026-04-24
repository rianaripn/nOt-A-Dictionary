const API_KEY = "mxrhHdHxUMpbIiDSVuiLAEjMIJnBG4sAPDKVuLY4";
const BASE_URL = "https://api.api-ninjas.com/v1/dictionary";

export async function fetchDefinition(word) {
    const url = `${BASE_URL}?word=${word}`;
    try{
        const response = await fetch(url,{
            method : 'GET',
            headers : {
                'X-Api-Key' : API_KEY
            }
        })
        if(!response.ok){
            throw new Error('Something broke. Naturally.')
        }

        const data = await response.json()
        if(!data.valid){
            throw new Error(`The AI refused to speak to you. Probably for the best🙄. try to use the ACTUAL word! 🤦‍♂️`)
        }
        return data;
    } catch(err){
        // console.log(err)
        throw err;
    }
}

