// Função anônima para criar a árvore de frequência de caracteres
import { SplayTree, Node, draw as drawTree } from "@esperanc/splay-trees"

let createCharFreqTree = function(inputText) {
    let t = new SplayTree();
    for (let i = 0; i < inputText.length; i++) {
      let key = inputText[i];
      t.splay(key);
      if (t.node && t.node.key === key) {
          t.node.value += 1;
      } else {
        t.insert(key);
        t.node.value = 1;
      }
    }
    return t;
  };
  
  // Função anônima para converter uma string para binário
  let stringToBinaryWithArrayFrom = function(inputText) {
    return Array.from(inputText, char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
  };
  
  // Função anônima para processar o texto
  let processText = function(text) {
    let frequencyTree = createCharFreqTree(text);
    let binaryString = stringToBinaryWithArrayFrom(text);
    console.log(frequencyTree);
    console.log(binaryString);
  };
  
  // Exemplo de chamada
  processText("exemplo de texto");
  