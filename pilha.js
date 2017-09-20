function FILO(){
	this.pilha=new Array();
	this.Push=function(obj){
		this.pilha[this.pilha.length]=obj;
	}
	this.Pop=function(){
		if(this.pilha.length>0){
			var obj=this.pilha[this.pilha.length -1];
			this.pilha.splice(this.pilha.length -1,1);
			return obj;
		}else{
			alert("Não há objetos na pilha");
		}
	}
}
var botao = document.querySelector("#botao").onclick = palindromo;
function palindromo(){
	var pilha = new FILO(); //cria a pilha
	var texto1 = document.querySelector("#palavra").value;
	var i = texto1.length;
	var t = texto1.length;
	while (i>0){ 
		pilha.Push(texto1.substr(t-i, 1)); //pega letra por letra e coloca na pilha
		i--;
	}
	i = texto1.length;
	var texto2 = "";
	while(i>0){
		texto2 = texto2 + pilha.Pop(); //pega item por item (letra por letra) da pilha, e adiciona na texto2
		i--;
	}
	if(texto1 == texto2){
		alert(texto1 +"\n"+ texto2 + "\nÉ palíndromo!")
	}else{
		alert(texto1 +"\n"+ texto2 + "\nNão é palíndromo!");
	}
}