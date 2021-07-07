/* 
DOM: Document Object Model ou Modelo de objeto de documento
https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model

O principal objeto global do navegador é o window pois é ele que engloba todo mundo. Tanto que se você escrever window no console do navegador
apareça todos os seus componentes.

ÁRVORE DO DOM:
A árvore do DOM é composta por pais e filhos, sendo que o document está no topo dessa árvore.
Se a gente abrir o nosso document atráves do console, veremos que abrirá o nosso documento html: O document é pai da tag <html> e tudo que está dentro dessa tag é o seu filho.
Como exemplo para caso não tenha entendido:
window -> document -> html -> head -> metas 
                                      links 
                                      title

                              body -> header -> h1 ...
                                      nav -> ul ...
                                      section -> h2 ...

Ou seja, temos o pai, que tem o filho, que tem outros filhos, e isso tudo vai criando um tipo de "árvore geneológica" até o final do nosso documento.

** Quando nos referimos ao DOM estamos falando de uma interface que nos dá o poder de manipular o elemento dentro da página. Podemos por exemplo mudar a cor de
uma letra ou o fundo do nossa página, tudo isso com o poder do DOM (Document Model Object). **

*/