import { generateWordAi } from "./aiAPI.js";
import {fetchDefinition} from "./api.js";

const formInput = document.getElementById('formInput')
const inputText = document.getElementById('inputText')
const hasilGenerate = document.getElementById('hasilGenerate')
const toast = document.getElementById('toast')
const btnDefine = document.querySelector('.btn-define')
const btnReset = document.querySelector('.btn-reset')



function showToast(pesan){
    toast.innerHTML = `<p>${pesan}</p>`
    toast.classList.add('show')
    setTimeout(function(){
        toast.classList.remove('show')
    },15000)
}

function setLoading(isLoading){
    if(isLoading){
        hasilGenerate.classList.remove('show')
        btnDefine.textContent = 'hold up ...'
        btnDefine.disabled = true

        hasilGenerate.innerHTML = `
        <div class="loading-state">
            <p>hmm, looking your weird word . .</p>
        </div>
        `
    } else{
        btnDefine.textContent = 'Define it'
        btnDefine.disabled = false
        hasilGenerate.classList.add('show')
    }
}

function resetApp(){
    hasilGenerate.innerHTML = `<div class="empty-state">
                    <h3 class="emoji-empty-state">🙎🏼‍♂️</h3>
                    <p>Type a word up there. I know reading instructions is hard, but you can do it. Probably.</p>
                </div>`
    inputText.value = ''
    hasilGenerate.classList.remove('show')
    btnReset.classList.remove('show')
}

document.querySelector('.btn-reset').addEventListener('click', resetApp)


// ===== Logika Form ===== //
formInput.addEventListener('submit', async function(e){
    e.preventDefault()
    const inputUser = inputText.value
    setLoading(true)
    btnReset.classList.add('show')
    try{
        if(inputUser.trim() ===''){
            throw new Error('Searching for nothing 🙄. Very smart 😮‍💨😮‍💨😮‍💨. Try typing an ACTUAL word.')
        }
        const dataInputUser = await fetchDefinition(inputUser)
        const result = await generateWordAi(dataInputUser.word, dataInputUser.definition)
        const parts = result.split('|')
        if(!parts[1]){
            throw new Error ('AI having a bad day. Try again.')
        }
        const wordType = parts[0].trim()
        const sarcasticDefinition = parts[1].trim()
        
        hasilGenerate.innerHTML = `
            <div id="word" class="word">
                <h2>${dataInputUser.word}  <span class="word-type">[${wordType}]</span></h2>
            </div>
            <div id="definition" class="definition">
                <p>${sarcasticDefinition}</p>
            </div>
            `
        showToast("YOU'RE WELCOME, I GUESS.🥱")
    }catch(err){
        hasilGenerate.innerHTML = `
        <div id="word" class="word">
                <h2>wew😕 </h2>
            </div>
            <div id="definition" class="definition">
                <p class="error-message">${err.message}</p>
            </div>
            `
    }finally{
        
        setLoading(false)
    }
    
})
