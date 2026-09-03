import Botao from "../components/Botao";

function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="rounded-xl bg-white p-5 shadow-lg">
        <h1 className="text-center text-5xl font-bold text-cyan-600">
          Hello, World!!!
        </h1>
        <p className="mt-3 text-center text-cyan-400">
          Bem vindo ao meu React com Tailwind CSS!
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <Botao
            texto="Comprar"
            cor="bg-cyan-800"
            corHover="hover:bg-cyan-600"
          ></Botao>
          <Botao
            texto="Vender"
            cor="bg-red-800"
            corHover="hover:bg-red-600"
          ></Botao>
        </div>
      </div>
    </main>
  );
}

export default Home;
