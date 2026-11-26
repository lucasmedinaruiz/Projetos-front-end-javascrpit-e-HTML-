// Lista de tarefas simples: adicionar, marcar como feita e remover.
const campo = document.getElementById("novaTarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

let tarefas = []; // cada tarefa: { texto, feita }

function atualizarTela() {
  lista.innerHTML = "";
  tarefas.forEach((tarefa, indice) => {
    const li = document.createElement("li");
    if (tarefa.feita) li.classList.add("feita");

    const texto = document.createElement("span");
    texto.textContent = tarefa.texto;
    texto.addEventListener("click", () => {
      tarefa.feita = !tarefa.feita;
      atualizarTela();
    });

    const remover = document.createElement("button");
    remover.textContent = "X";
    remover.addEventListener("click", () => {
      tarefas.splice(indice, 1);
      atualizarTela();
    });

    li.append(texto, remover);
    lista.appendChild(li);
  });

  const pendentes = tarefas.filter(t => !t.feita).length;
  contador.textContent = `Pendentes: ${pendentes} de ${tarefas.length}`;
}

function adicionar() {
  const texto = campo.value.trim();
  if (texto === "") {
    alert("Digite alguma coisa!");
    return;
  }
  tarefas.push({ texto: texto, feita: false });
  campo.value = "";
  atualizarTela();
}

botao.addEventListener("click", adicionar);
campo.addEventListener("keydown", e => { if (e.key === "Enter") adicionar(); });
atualizarTela();
