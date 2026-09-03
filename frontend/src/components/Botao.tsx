type BotaoProps = {
  texto: string;
  cor: string;
  corHover?: string;
};

function Botao({ texto, cor, corHover }: BotaoProps) {
  return (
    <button className={`rounded-lg ${cor} px-4 py-2 text-white ${corHover}`}>
        {texto}
    </button>
  );
}

export default Botao;
