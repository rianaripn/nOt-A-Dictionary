export async function fetchDefinition(searchedWord){
    const url = `/api/dictionary?word=${searchedWord}`
    try{
        const response = await fetch(url)
        const data = await response.json()
        if (!data.valid) {
            throw new Error('try to use the ACTUAL word!')
        }
        return data
    } catch(err){
        throw err;
    }
}


