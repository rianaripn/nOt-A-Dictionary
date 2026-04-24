# nOt-A Dictionary 🙎🏼‍♂️

> _Because reality wasn't disappointing enough already._

A dictionary app that tells you what words **actually** mean according to a sarcastic AI that has given up on sugarcoating things. Powered by real dictionary data and a language model with zero chill.

---

## LIVE DEMO
https://not-a-dictionary.vercel.app/

## Features

- 🔍 **Word Definition** — fetches real dictionary data (so the AI has something to roast)
- 🤖 **AI Sarcastic Redefinition** — generates a brutally honest, sarcastic take on any word
- 🏷️ **Word Type** — tells you if it's a noun, verb, adjective, etc. (in case you care)
- ⚡ **Loading State** — because good things take time, and so does existential dread
- 🔄 **Reset** — pretend it never happened and start over
- 🍞 **Toast Notification** — a passive-aggressive "you're welcome" after every search

---

## Tech Stack

- **HTML, CSS, Vanilla JavaScript** — no frameworks were harmed in the making of this app
- **Dictionary API** by API Ninjas — for actual, boring definitions
- **Groq API** (LLaMA 3) — for the sarcastic reimagining of said definitions
- **Vercel** — for deployment, because someone has to host this thing

---

## How to Use

1. Open the app
2. Type a word in the search bar _(I know, revolutionary)_
3. Click **"Define it"** — or don't, it's your life
4. Wait approximately 3 seconds while the AI judges your word choice
5. Read your sarcastic definition and question your life decisions

---

## APIs Used

| API                                                              | Purpose                                      |
| ---------------------------------------------------------------- | -------------------------------------------- |
| [API Ninjas - Dictionary](https://api-ninjas.com/api/dictionary) | Fetch real word definitions                  |
| [Groq API](https://console.groq.com)                             | Generate sarcastic redefinitions via LLaMA 3 |

---

## ⚠️ Note on API Keys

This is a **learning/portfolio project**. API keys are currently embedded in the frontend for demonstration purposes. In a production environment, these would be handled server-side. Please don't be weird about it. 🙄

---

## Local Setup

```bash
# 1. Clone this repo
git clone https://github.com/YOUR_USERNAME/not-a-dictionary.git

# 2. Open index.html with Live Server
# (or any local server — it needs HTTP, not file://)

# 3. Replace API keys in api.js and aiAPI.js with your own
```

---

## Author

**Rian Arip Nugraha**
— A chemistry graduate who decided molecules were too predictable and switched to JavaScript.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/rian-arip-nugraha-929908213/)

---

_Built with Vanilla JS, two free APIs, and an unhealthy amount of sarcasm._
