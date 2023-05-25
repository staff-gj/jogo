const aleatorio = (Math.floor(Math.random()*(10-1)))
function random() {
    const numero = Math.floor(Math.random() * (10 - 1))
    localStorage.setItem('numeroAleatorio', numero)
    location.reload()
}

window.onload = function() {
    const numeroSalvo = localStorage.getItem('numeroAleatorio')
    if (numeroSalvo !== null) {
        const numero = document.getElementById('numero')
        numero.innerText = numeroSalvo
        localStorage.removeItem('numeroAleatorio')
    }
}

function informacao1() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[0].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[0].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[0].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[0].dado;
            descricao.innerText = data[0].assunto;
            pergunta.innerText = `Pergunta: ${data[0].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao2() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[1].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[1].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[1].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[1].dado;
            descricao.innerText = data[1].assunto;
            pergunta.innerText = `Pergunta: ${data[1].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao3() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[2].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[2].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[2].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[2].dado;
            descricao.innerText = data[2].assunto;
            pergunta.innerText = `Pergunta: ${data[2].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao4() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[3].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[3].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[3].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[3].dado;
            descricao.innerText = data[3].assunto;
            pergunta.innerText = `Pergunta: ${data[3].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao5() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[4].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[4].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[4].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[4].dado;
            descricao.innerText = data[4].assunto;
            pergunta.innerText = `Pergunta: ${data[4].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao6() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[5].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[5].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[5].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[5].dado;
            descricao.innerText = data[5].assunto;
            pergunta.innerText = `Pergunta: ${data[5].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao7() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[6].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[6].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[6].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[6].dado;
            descricao.innerText = data[6].assunto;
            pergunta.innerText = `Pergunta: ${data[6].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}

function informacao8() {
    fetch('dados.json')
        .then(response => response.json())
        .then(data => {
            console.log(Math.floor(Math.random() * (10 - 1)));
            const dados = document.getElementById('dados');
            const aleatorio = Math.floor(Math.random() * data.length);
            const div = document.createElement('div');
            const titulo = document.createElement('h1');
            const descricao = document.createElement('p');
            const pergunta = document.createElement('p')
            pergunta.classList.add('pergunta')
            const respostas = document.createElement('button')
            respostas.textContent = "Responda"

            respostas.addEventListener('click', ()=>{
                const res1 = document.createElement('button')
                res1.textContent = data[7].alternativa1
                res1.addEventListener('click', ()=>{
                    res1.classList.add('certa')
                    res2.classList.add('errada')
                    res3.classList.add('errada')
                })
                const res2 = document.createElement('button')
                res2.textContent = data[7].alternativa2
                const res3 = document.createElement('button')
                res3.textContent = data[7].alternativa3

                div.appendChild(res1)
                div.appendChild(res2)
                div.appendChild(res3)
            })

            titulo.innerText = data[7].dado;
            descricao.innerText = data[7].assunto;
            pergunta.innerText = `Pergunta: ${data[7].pergunta}`

            div.appendChild(titulo);
            div.appendChild(descricao);
            div.appendChild(pergunta)
            div.appendChild(respostas)
            dados.appendChild(div);
            console.log(data[aleatorio]);
    })
}
