import Form from "./Components/Form"
export default function App() {
  return (
    <div className="bg-slate-900 min-h-screen w-full flex flex-col items-center justify-center" >
      <h1 className="font-bold text-[2rem] text-white">
        Inscreva-se!
      </h1>

      <p className="text-white">Bem-vindo à nossa plataforma, cadastra-se </p>
      <div className="w-96  mt-4 bg-stone-200 px-4 py-5 rounded-lg">


        <Form />
      </div>

      <p className="text-slate-100 text-xs w-96 mt-2 text-center">
        Ao se inscrever você receberá nossas melhores dicas e ofertas!
      </p>
      

    </div>
  )
}