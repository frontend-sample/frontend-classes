---
layout: post
title: Repositórios Git.
author: vagner
date: 2019-08-08 19:54:00 +0800
categories: [git,github, repositorios]
tags: [git]
priority: 4
---

## O que é um repositório git?

No Git, um repositório (ou repo, para abreviar) é como uma pasta especial que armazena todo o histórico do seu projeto que guarda todas as versões do seu código, desde o início até o estado atual.


![Tela da home do repositorio do curso no Github](/assets/img/repo-curso.png)

Dentro do repositório, você encontrará:

* **Arquivos do projeto:** Todos os arquivos de código, imagens, documentos e outros recursos que fazem parte do seu projeto.
* **Histórico de commits:** Cada vez que você salva uma nova versão do seu projeto (fazendo um "commit"), o Git registra essa alteração no histórico. Isso permite que você volte para versões anteriores do projeto se necessário.
* **Branches (ramificações):** São como linhas do tempo paralelas que permitem que você experimente novas ideias ou recursos sem afetar a versão principal do seu projeto.

Existem dois tipos principais de repositórios Git:

* **Repositórios locais:** Armazenados no seu computador. São onde você trabalha no seu projeto e faz commits.
* **Repositórios remotos:** Armazenados em um servidor online (como o GitHub). Permitem que você compartilhe seu projeto com outras pessoas, colabore em equipe e faça backup do seu código.

## Criando um novo repositório

Para criar um novo repositório no Github, acesse sua conta. Apos o login você será redirecionado para a tela de inicio do Github semelhante à imagem abaixo.

![Dashboard do Githug](/assets/img/github-dashboard.png)


Em seguida clique em **New** e você será redirecionado para a tela de criação de repositórios. 
Um repositório pode ser publico ou privado. Para fins desse treinamento deixaremos o repositório como público. Apenas dê um nome ao seu repositório, deixe todas as configurações padrão e clique em **Create Repository** no final da página.

![Tela de criação de repositórios](/assets/img/new-repository.png)


O github irá criar o repositório para você e exibirá uma página semelhate a imagem abaixo.

![Tela de repositorio criado](/assets/img/repository-created.png)


Após criarmos o repositório, devemos clonar o mesmo para o nosso computador. Como já instalamos o git anteriormente vamos seguir os passos abaixo. 


- abra o terminal ou prompt de comandos do windows
  ![Terminal do MacOs](/assets/img/terminal.png)

- crie uma pasta chamada aulas usando o comando `mkdir aulas`. Digite esse comando no terminal ou prompt de comandos do windows
  ![Comando mkdir](/assets/img/mkdir.png)

- navegue até a pasta criada digitando o comando `cd aulas`
  ![Comando CD](/assets/img/comando-cd.png)



- clone o repositório criado. 
  `git clone https://github.com/vagnerleitte/NOME-DO-REPOSITORIO.git`
  ![Repositorio clonado](/assets/img/clone.png)


Seu repositório está clonado mas não tem nenhum código nele. 
Na próxima aula iremos enviar nosso primeiro código. 