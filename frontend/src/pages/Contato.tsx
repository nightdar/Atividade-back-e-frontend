import { useState, useEffect } from "react";

type Contato = {
  id: number;
  nome: string;
  email: string;
};

function Contato() {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarContatos() {
      try {
        const resposta = await fetch("http://localhost:3000/api/contatos");

        if (!resposta.ok) {
          throw new Error("Erro ao buscar contato");
        }

        const dados = await resposta.json();

        setContatos(dados);
      } catch (error) {
        setErro((error as Error).message);
      } finally {
        setCarregando(false);
      }
    }

    buscarContatos();
  }, []);

  if (carregando) {
    return (
      <div className="flex justify-center">
        <p className="font-bold text-red-700">Carregando contatos...</p>
      </div>
    );
  }

  if (erro) {
    return <div className="flex justify-center text-red-700">{erro}</div>;
  }

  return (
    <main>
      <div>
        <h1 className="flex justify-center mb-5">Lista de Contatos</h1>
      </div>

      <div>
        {contatos.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
        ) : (
          contatos.map((contato) => (
            <div className="flex flex-col justify-center items-center" key={contato.id}>
              <h2 className="text-xl font-bold">{contato.nome}</h2>
              <p className="text-gray-600">{contato.email}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}

export default Contato;
