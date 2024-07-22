---
layout: post
title: Iniciando no Terminal do MacOS
description: Uma aula introdutória de como utilizar o terminal no MacOS.
author: vagner
date: 2019-08-21 13:20:00 +0800
categories: [macos, terminal, commands]
tags: [terminal]
priority: 1.1
---

### Aula Curta: Usando o Terminal do macOS

#### Objetivo
Esta aula introdutória ensina os conceitos básicos e comandos essenciais do Terminal no macOS. Ao final, você será capaz de navegar pelo sistema de arquivos, manipular arquivos e pastas, e executar comandos básicos.

#### 1. O que é o Terminal?
O Terminal é uma interface de linha de comando (CLI) no macOS que permite aos usuários interagir com o sistema operacional usando comandos de texto. É uma ferramenta poderosa para desenvolvedores e usuários avançados realizarem tarefas mais rapidamente e de maneira automatizada.

#### 2. Abrindo o Terminal
Para abrir o Terminal:
1. Clique no ícone do Finder no Dock.
2. Vá para Aplicativos > Utilitários.
3. Clique duas vezes em Terminal.

> Você também pode usar o Spotlight (⌘ + Espaço) e digitar "Terminal" para abri-lo rapidamente.

#### 3. Estrutura Básica do Terminal
Quando você abre o Terminal, você verá uma janela com um prompt de comando. O prompt de comando é onde você digita os comandos. Ele geralmente aparece assim:

```
username@hostname ~ %
```

#### 4. Navegando pelo Sistema de Arquivos

- **Comando `pwd` (print working directory)**: Mostra o diretório atual.
  ```sh
  pwd
  ```
 **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  pwd
    /Users/username/landing
    username in ~/landing 
    ➜  
  ```
 
 

- **Comando `ls` (list)**: Lista os arquivos e pastas no diretório atual.
  ```sh
  ls
  ```
 **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  ls
    assets     index.html
    hostname@username in ~/landing 
    ➜  
  ```


- **Comando `cd` (change directory)**: Muda para um diretório específico.
  ```sh
  cd NomeDaPasta
  ```
   **Resultado esperado**

  ```sh
    ➜  cd assets 
    hostname@username in ~/landing/assets 
    ➜  
  ```

  Use `cd ..` para voltar um diretório.
  ```sh
  cd ..
  ```
   **Resultado esperado**

  ```sh
    ➜  cd .. 
    hostname@username in ~/landing 
    ➜  
  ```

#### 5. Manipulando Arquivos e Pastas

- **Comando `mkdir` (make directory)**: Cria uma nova pasta.
  ```sh
  mkdir NomeDaNovaPasta
  ```
   **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  mkdir novaPasta       
    hostname@username in ~/landing 
    ➜  ls
    assets     index.html novaPasta
    hostname@username in ~/landing 
    ➜  

  ```
  > usei o comando `ls` após o `mkdir` para demonstrar que a pasta foi realmente criada. 

- **Comando `touch`**: Cria um novo arquivo vazio.
  ```sh
  touch nome_do_arquivo.txt
  ```
   **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  ls
    assets              nome_do_arquivo.txt
    index.html          novaPasta
    hostname@username in ~/landing 
    ➜  
  ```
    > usei o comando `ls` após o `touch` para demonstrar que o arquivo foi criado. 


- **Comando `cp` (copy)**: Copia arquivos ou pastas.
  ```sh
  cp arquivo_origem.txt arquivo_destino.txt
  ```
   **Resultado esperado**

  ```sh
    ➜  cp nome_do_arquivo.txt arquivo_destino.txt 
    hostname@username in ~/landing 
    ➜  ls
    arquivo_destino.txt nome_do_arquivo.txt
    assets              novaPasta
    index.html
    hostname@username in ~/landing 
    ➜  
  ```
  > usei o comando `ls` após o `cp` para demonstrar que o arquivo foi copiado. 

- **Comando `mv` (move)**: Move ou renomeia arquivos ou pastas.
  ```sh
    mv arquivo_origem.txt novo_nome.txt
  ```
   **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  mv arquivo_destino.txt novaPasta         
    hostname@username in ~/landing 
    ➜  ls novaPasta
    arquivo_destino.txt
    hostname@username in ~/landing 
    ➜  ls
    assets              index.html          nome_do_arquivo.txt novaPasta
    hostname@username in ~/landing 
    ➜  
  ```
  > usei o comando `ls` após o `mv` para demonstrar que o arquivo foi movido. Se você digitar `ls` no diretório landing verá que o arquivo não está mais lá. 

- **Comando `rm` (remove)**: Remove arquivos. Use `rm -r` para remover pastas recursivamente.
  ```sh
  rm arquivo.txt
  rm -r NomeDaPasta
  ```
   **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  rm nome_do_arquivo.txt 
    hostname@username in ~/landing 
    ➜  rm -r novaPasta       
    hostname@username in ~/landing 
    ➜  ls
    assets     index.html
    hostname@username in ~/landing 
    ➜  
  ```

#### 6. Outros Comandos Úteis

- **Comando `clear`**: Limpa a tela do Terminal.
  ```sh
    clear
  ```
   **Resultado esperado**

  ```sh
    hostname@username in ~/landing 
    ➜  
  ```

- **Comando `man` (manual)**: Mostra o manual de um comando.
  ```sh
  man ls
  ```
   **Resultado esperado**

  ```sh
      LS(1)                       General Commands Manual                      LS(1)

      NAME
        ls – list directory contents

      SYNOPSIS
        ls [-@ABCFGHILOPRSTUWabcdefghiklmnopqrstuvwxy1%,] [--color=when]
            [-D format] [file ...]

      DESCRIPTION
      For each operand that names a file of a type other than directory, ls
      displays its name as well as any requested, associated information.  For
      each operand that names a file of type directory, ls displays the names
      of files contained within that directory, as well as any requested,
      associated information.

      If no operands are given, the contents of the current directory are
      displayed.  If more than one operand is given, non-directory operands are
      displayed first; directory and non-directory operands are sorted
      separately and in lexicographical order.

      The following options are available:

      -@      Display extended attribute keys and sizes in long (-l) output.

      -A      Include directory entries whose names begin with a dot (‘.’)
              except for . and ...  Automatically set for the super-user unless
              -I is specified.

      -B      Force printing of non-printable characters (as defined by
              ctype(3) and current locale settings) in file names as \xxx,
              where xxx is the numeric value of the character in octal.  This
              option is not defined in IEEE Std 1003.1-2008 (“POSIX.1”).

      -C      Force multi-column output; this is the default when output is to
              a terminal.

      -D format
              When printing in the long (-l) format, use format to format the
              date and time output.  The argument format is a string used by
              strftime(3).  Depending on the choice of format string, this may
              result in a different number of columns in the output.  This
              option overrides the -T option.  This option is not defined in
              IEEE Std 1003.1-2008 (“POSIX.1”).

      ➜  
      ...
  ```
  > o comando `man NOME_COMANDO` exibe um texto descritivo longo de como o comando pode ser utilizado.

- **Comando `open`**: Abre arquivos ou pastas com o aplicativo padrão.
  ```sh
  open index.html
  ```
   **Resultado esperado**

  ![Screenshot do navegador aberto pelo comando open index.html](/assets/img/open-expected.png)

#### 7. Editores de Texto no Terminal

- **nano**: Um editor de texto simples e fácil de usar.
  ```sh
  nano nome_do_arquivo.txt
  ```

Para sair do `nano`, pressione `Ctrl + X`, depois `Y` para salvar ou `N` para descartar as mudanças, e `Enter` para confirmar.

#### Conclusão

Agora você conhece os comandos básicos do Terminal no macOS. Praticar esses comandos ajudará você a se sentir mais confortável navegando e manipulando arquivos e pastas usando a linha de comando. O Terminal é uma ferramenta poderosa que pode aumentar significativamente sua eficiência ao trabalhar no macOS.

Se tiver dúvidas ou precisar de ajuda adicional, a documentação do macOS e inúmeros tutoriais online podem oferecer mais suporte.