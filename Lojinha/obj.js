class Produto {
    constructor() {
      this.id = 1;
      this.ObjArr = [];
    }
  
    salvar() {
      let produto = this.lerDados();
      if (this.validaCampos(produto))
      {
        this.adicionar(produto);
      }
  
      this.insereCampos();
  
      this.cancelar();
  
      console.log(this.ObjArr);
    }
  
    lerDados() {
      let produto = {};
      produto.id = this.id;
      produto.nome = document.getElementById("Nomeprod").value;
      produto.valor = document.getElementById("Valorprod").value;
      return produto;
    }
  
    adicionar(produtoAdd) {
      this.ObjArr.push(produtoAdd);
      this.id++;
    }
  
    validaCampos(produto)
    {
      let alerta = "";
      if (produto.nome === "")
      {
        alerta += "- Digite o nome do produto\n";
      }
      if (produto.valor === "")
      {
        alerta += "- Digite o valor do produto\n";
      }
      if (alerta !== "")
      {
        alert(alerta);
        return false;
      }
  
      return true;
    }
  
    cancelar() {
      document.getElementById("Nomeprod").value = "";
      document.getElementById("Valorprod").value = "";
    }
  
    insereCampos() {
      let tbody = document.getElementById("insere"); // Ajuste aqui para obter o elemento corretamente
      tbody.innerHTML = ""; // Use innerHTML para limpar o conteúdo
  
      for (let i = 0; i < this.ObjArr.length; i++)
      {
        let tr = tbody.insertRow(); // Ajuste aqui para obter o elemento corretamente
        let td_id = tr.insertCell();
        let td_nome = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();
  
        td_id.innerText = this.ObjArr[i].id;
        td_nome.innerText = this.ObjArr[i].nome;
        td_valor.innerText = this.ObjArr[i].valor;

        let imgEdit = document.createElement("img");
        imgEdit.src = "botaoeditar.png";
        imgEdit.setAttribute("onclik","produto.editar("+this.ObjArr[i].id+")")
        td_acoes.appendChild(imgEdit);

        let imgEdit_lixeira = document.createElement("img");
        imgEdit_lixeira.src = "lixeira.png";
        imgEdit_lixeira.setAttribute("onclick","produto.deletar("+this.ObjArr[i].id+")")
        td_acoes.appendChild(imgEdit_lixeira);

      }
    }

    editar(produto){
        console.log(produto)
        document.getElementById("Nomeprod").value = produto.nome;
        document.getElementById("Valorprod").value = produto.valor;
    }

    deletar(id){
      let tbody = document.getElementById("insere");
      if (confirm("Deseja deletar?"))
      {
        for (let i = 0; i < this.ObjArr.length; i++)
      {
          if(this.ObjArr[i].id == id)
        {
          this.ObjArr.splice(i, 1);
          tbody.deleteRow(i);
        }
      }
      }
    }
  }
  
  let produto = new Produto();