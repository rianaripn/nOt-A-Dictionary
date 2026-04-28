const BASE_URL = "https://api.groq.com/openai/v1/chat/completions"

export default async function handler(req, res) {
    console.log('method:', req.method)
    console.log('body:', req.body)
    console.log('body type:', typeof req.body)
    
    return res.status(200).json({ debug: true, body: req.body, method: req.method })
}


// export default async function handler(req,res){
//     console.log('req.body:', req.body)
//     console.log('req.method:', req.method)
//     let body = req.body
//     if(typeof body === 'string'){
//         body = JSON.parse(body)
//     }

//     if (!body) {
//         return res.status(400).json({ error: 'body is undefined' })
//     }
    
//     const wordOfChoices = body.word;
//     const theDefinition = body.definition;
//     const prompt = `
//     word = ${wordOfChoices}
//     definition = ${theDefinition}
//     You are a witty, sarcastic wordsmith. Define this word sarcastically in 1-3 sentences. Output ONLY the sarcastic DEFINITION, nothing else. 
//     AND ADD AN EMOJI THAT RELATE TO THAT IN THE END OF THE SENTENCE. ONLY USE 30 WORD MAX. and i your output is ONLY follow this format : 
//     [word_type] | [sarcastic definition]
//     example : noun | Love is a temporary
//     `
//     try{
//         const response = await fetch(BASE_URL,{
//             method : 'POST',
//             headers : {
//                 'Content-Type' : 'application/json',
//                 'Authorization' : `Bearer ${process.env.GROQ_API_KEY}`
//             },
//             body :JSON.stringify({
//                 model : 'llama-3.1-8b-instant',
//                 messages : [{
//                     role : 'user',
//                     content : prompt
//                 }]
//             })
//         })
//         if(!response.ok){
//             throw new Error('The AI refused to speak to you. Probably for the best🙄. try to use the ACTUAL word!')
//         }
//         const result = await response.json()
//         return res.status(200).json({aiResponse : result.choices[0].message.content});
//     }catch(err){
//         res.status(500).json({
//             error : err.message
//         })
//     }
// }