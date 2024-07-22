import {useState, FormEvent } from "react";


export default function Form() {



    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState(" ")

    function onEmail(event) {
        setEmail(event.target.value)

    }
    function onName(event) {
        setName(event.target.value)

    }

    function onPassword(event) {
        setPassword(event.target.value)

    }

    function onSubmit() {
        event.preventDefault()
        console.log("O seu nome  é:" + name)
        console.log("O seu email é:" + email)
        console.log("a sua senha é:" + password)
        alert("O seu nome  é:" + name)
        alert("O seu email é:" + email)
        alert("a sua senha é:" + password)
        alert("Obrigado por se inscrever!")
        
        
    }
    
    return(
        <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <div className="flex flex-col">
                <label className="text-sm" htmlFor="name">Digite o seu nome</label>
                <input id="name" type="text" placeholder="Digite o seu nome" className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400" onChange={onName} required />
            </div>

            <div className="flex flex-col"> 
                <label className="text-sm" htmlFor="email">E-mail</label>
                <input id="email" type="email" placeholder="Insira o seu email"  className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"  onChange={onEmail} required/>
            </div>


            <div className="flex flex-col"> 
                <label className="text-sm" htmlFor="password">Senha</label>
                <input id="password" type="password" placeholder="Insira a sua senha"  className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"  onChange={onPassword} required/>
            </div>

            <div className="flex flex-col">
                <a href="#" className="text-xs underline mb-2">Leia os termos</a>

                <div className="flex gap-2 items-center">
                    <input type="checkbox" required/>
                    <label className="text-sm" htmlFor="agree">Concordo com os termos</label>
                    
                </div>

            </div>

            <button type="submit" className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white">Cadastrar!</button>

            
           

        </form>
    )
}

