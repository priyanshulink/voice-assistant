let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1;
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day = new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
 let currentIndex = event.resultIndex
 let transcript= event.results[currentIndex][0].transcript
 content.innerText = transcript
 takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")|| message.includes("hey")){
        speak("hello sir i am Jarvis, what can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistant, created by Priyanshu Sir")
    }
    else if(message.includes("birthday")){
        speak("on your bithday, i wish you health, happiness and all the dream in your heart. ")
    }
    else if(message.includes("i love u")){
        speak("i love you tooooo, sir ")
    }
    else if(message.includes("open youtube")){
        speak("open youtube")
        window.open("https://www.youtube.com/", "_blank")
    }
    else if(message.includes("open youtube music")||message.includes("open yt music")){
        speak("open youtube music")
        window.open("https://music.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("open google")
        window.open("https://google.com/")
    }
    else if(message.includes("open instagram")||message.includes("open insta")){
        speak("open instagram")
        window.open("https://instagram.com/")
    }
    else if(message.includes("open facebook")||message.includes("open fb")){
        speak("open facebook")
        window.open("https://facebook.com/")
    }
    else if(message.includes("open chat gpt")||message.includes("open ai")){
        speak("open chatgpt")
        window.open("https://chatgpt.com/")
    }
    else if(message.includes("open calculator")){
        speak("open calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("open whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
      let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
      }
    
    else{
        let finalText = "this is what i found on internet regarding " + message.replace("jarvis","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message}`)
    }
    function wishMybirthday(){
        let wishbithday = "happy birthday sir"
        if(Date(29, january)){
           speak(wishbithday)
        }
    }

}
