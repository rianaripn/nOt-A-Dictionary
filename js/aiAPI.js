export async function generateWordAi(word,definition){
    const url = '/api/groq'
    try{
        const response = await fetch(url,{
            method :"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({word,definition})
        })
        if(!response.ok){
            throw new Error("The AI refused to speak to you. Probably for the best🙄. try to use the ACTUAL word!")
        }
        const text = await response.text()
        console.log('RAW RESPONSE:', text)

        const data = await response.json()
        return data.aiResponse
    } catch(err){
        console.log(err);
        throw err;
    }
}


