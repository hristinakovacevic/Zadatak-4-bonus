// FEATURES section---------------------------------------

const data = [
    {
        title: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        url: './images/illustration-features-tab-1.svg'
    },
    {
        title: 'Intelligent search',
        text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        url: './images/illustration-features-tab-2.svg'

    },
    {
        title: 'Share your bookmarks',
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        url: './images/illustration-features-tab-3.svg'
    }

];

const features = document.getElementsByClassName('tab')
const title = document.getElementsByClassName('feature-title')[0];
const text = document.getElementsByClassName('feature-text')[0];
const img = document.getElementsByClassName('tab-1')[0];

for(let el of features ) {
    
    el.addEventListener('click', ()=> {
        
    const activate = (num) => {
        for( let elm of features ) {elm.classList.remove('active')}
        el.classList.add('active')
        title.textContent = data[num].title;
        text.textContent = data[num].text;
        img.src = data[num].url;
    }
    if(el.classList[1] === 'bookmarking') activate(0)
    if(el.classList[1] === 'searching') activate(1)
    if(el.classList[1] === 'shearing') activate(2)
} )
}


//FAQ section------------------------------------------

let content = document.querySelectorAll('li')
for(let item of content){
    item.addEventListener('click', ()=>{
        if(item.className === 'active') {
            item.classList.toggle('active')
        }
        else {
            content.forEach(el => el.classList.remove('active'))
            item.classList.add("active")
        }
    
    })
}



//EMAIL validation-----------------------------------

let btn = document.getElementsByClassName('email-btn')[0]

 
btn.addEventListener('click', (e)=>{
   e.preventDefault()
  
    let email = document.getElementsByClassName('email')[0]
    let container = document.getElementsByClassName('show-err')[0]
    /* let error = document.getElementsByClassName('error')[0] */
    let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.value.match(mail_format)){
      
       /*  error.classList.add('active') */
        email.classList.add('active')  
        container.classList.add('active') 
        
    }  else { 
                /* error.classList.remove('active')*/
                email.classList.add('active') 
                
                container.classList.remove('active') 
            }
})

/* -----------------------------------------------MODAL---------------------------------------------- */
let openBtn = document.querySelector('.hamburger') 
let closeBtn = document.querySelector('.close') 
let modal = document.querySelector('.modal')

openBtn.addEventListener('click', ()=>{
    
    modal.classList.add('on')
})
closeBtn.addEventListener('click', ()=>{
modal.classList.remove('on')
})