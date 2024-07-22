---
layout: post
title: Iniciando no Prompt de comandos do Windows
description: Uma aula introdutória de como utilizar o Prompt de comandos do Windows.
author: vagner
date: 2019-08-21 13:20:00 +0800
categories: [windows, prompt, commands]
tags: [terminal]
priority: 1.2
---

### Aula Curta: Usando o Prompt de Comando no Windows

#### Objetivo
Esta aula introdutória ensina os conceitos básicos e comandos essenciais do Prompt de Comando no Windows. Ao final, você será capaz de navegar pelo sistema de arquivos, manipular arquivos e pastas, e executar comandos básicos.

#### 1. O que é o Prompt de Comando?
O Prompt de Comando é uma interface de linha de comando (CLI) no Windows que permite aos usuários interagir com o sistema operacional usando comandos de texto. É uma ferramenta poderosa para desenvolvedores e usuários avançados realizarem tarefas mais rapidamente e de maneira automatizada.

#### 2. Abrindo o Prompt de Comando
Para abrir o Prompt de Comando:
1. Pressione `Win + R` para abrir a janela "Executar".
2. Digite `cmd` e pressione `Enter`.
3. No Explorador de arquivos do windows, se você digitar `cmd` na barra de endereços, o Prompt de comandos será aberto no diretório que estiver aberto. Ex.: Você está no diretório de Downloads o Prompt será aberto em `C:\Users\username\Downloads`.

![Tela Windows Explorer](/assets/img/windows-explorer.jpg)

Você também pode abrir o Menu Iniciar, digitar "cmd" ou "Prompt de Comando" e selecionar o aplicativo.

#### 3. Estrutura Básica do Prompt de Comando
Quando você abre o Prompt de Comando, você verá uma janela com um prompt de comando. O prompt de comando é onde você digita os comandos. Ele geralmente aparece assim:

```
  C:\windows\system32>
```

#### 4. Navegando pelo Sistema de Arquivos

- **Comando `cd` (change directory)**: Muda para um diretório específico.
  ```sh
  cd NomeDaPasta
  ```
  **Resultado Esperado:** O prompt muda para o diretório especificado.
  ```
  C:\Users\username\NomeDaPasta>
  ```

  Use `cd ..` para voltar um diretório.
  
  ```sh
  cd ..
  ```
  **Resultado Esperado:** O prompt muda para o diretório pai.
  ```
  C:\Users\username>
  ```

  Use `cd /d` para mudar de unidade (por exemplo, de `C:` para `D:`):
  ```sh
  cd /d D:\
  ```
  **Resultado Esperado:** O prompt muda para a unidade `D:`.
  ```
  D:\>
  ```

- **Comando `dir`**: Lista os arquivos e pastas no diretório atual.
  ```sh
  dir
  ```
  **Resultado Esperado:** Uma lista de arquivos e pastas no diretório atual é exibida.

  ```
   O volume na unidade C não tem nome.
   O número de série do volume é XXXX-XXXX

   Diretório de C:\Users\username

   01/01/2024  12:34 PM    <DIR>          .
   01/01/2024  12:34 PM    <DIR>          ..
   01/01/2024  12:34 PM    <DIR>          NomeDaPasta
   01/01/2024  12:34 PM             1,024 nome_do_arquivo.txt
                  1 arquivo(s)            1,024 bytes
                  3 pasta(s)    100,000,000 bytes livres
  ```

- **Comando `cls`**: Limpa a tela do Prompt de Comando.
  ```sh
  cls
  ```
  **Resultado Esperado:** A tela do Prompt de Comando é limpa.

#### 5. Manipulando Arquivos e Pastas

- **Comando `mkdir` (make directory)**: Cria uma nova pasta.
  ```sh
  mkdir NomeDaNovaPasta
  ```
  **Resultado Esperado:** Uma nova pasta chamada `NomeDaNovaPasta` é criada no diretório atual. Você pode verificar usando `dir`.

- **Comando `type`**: Exibe o conteúdo de um arquivo.
  ```sh
  type nome_do_arquivo.txt
  ```
  **Resultado Esperado:** O conteúdo do arquivo `nome_do_arquivo.txt` é exibido no prompt.
  ```
  Este é o conteúdo do arquivo.
  ```

- **Comando `copy`**: Copia arquivos.
  ```sh
  copy arquivo_origem.txt arquivo_destino.txt
  ```
  **Resultado Esperado:** O arquivo `arquivo_origem.txt` é copiado para `arquivo_destino.txt`.
  ```
  1 arquivo(s) copiado(s).
  ```

- **Comando `move`**: Move ou renomeia arquivos ou pastas.
  ```sh
  move arquivo_origem.txt novo_nome.txt
  ```
  **Resultado Esperado:** O arquivo `arquivo_origem.txt` é movido ou renomeado para `novo_nome.txt`.
  ```
  1 arquivo(s) movido(s).
  ```

- **Comando `del` (delete)**: Remove arquivos.
  ```sh
  del arquivo.txt
  ```
  **Resultado Esperado:** O arquivo `arquivo.txt` é removido.
  ```
  C:\Users\username>
  ```

  Use `rmdir` para remover pastas (use `/s` para remover pastas e seu conteúdo recursivamente).
  ```sh
  rmdir NomeDaPasta
  ```
  **Resultado Esperado:** A pasta `NomeDaPasta` é removida, se estiver vazia.

  ```sh
  rmdir /s NomeDaPasta
  ```
  **Resultado Esperado:** A pasta `NomeDaPasta` e todo o seu conteúdo são removidos.
  ```
  NomeDaPasta, Tem certeza (S/N)? s
  ```

#### 6. Outros Comandos Úteis

- **Comando `echo`**: Exibe mensagens no Prompt de Comando.
  ```sh
  echo Hello, World!
  ```
  **Resultado Esperado:** A mensagem "Hello, World!" é exibida no prompt.
  ```
  Hello, World!
  ```

- **Comando `exit`**: Fecha o Prompt de Comando.
  ```sh
  exit
  ```
  **Resultado Esperado:** O Prompt de Comando é fechado.

- **Comando `help`**: Mostra ajuda para comandos.
  ```sh
  help
  ```
  **Resultado Esperado:** Uma lista de comandos disponíveis e suas descrições é exibida.

#### 7. Redirecionamento e Pipelines

- **Redirecionamento de Saída (`>` e `>>`)**: Redireciona a saída de um comando para um arquivo.
  ```sh
  dir > lista_de_arquivos.txt
  ```
  **Resultado Esperado:** A lista de arquivos e pastas é salva no arquivo `lista_de_arquivos.txt` (sobrescreve o arquivo se já existir).

  ```sh
  dir >> lista_de_arquivos.txt
  ```
  **Resultado Esperado:** A lista de arquivos e pastas é adicionada ao final do arquivo `lista_de_arquivos.txt`.


#### 7. Editores de Texto no Prompt de Comando

- **notepad**: Abre o Notepad para editar arquivos de texto.
  ```sh
  notepad nome_do_arquivo.txt
  ```
  **Resultado Esperado:** O Notepad é aberto com o arquivo `nome_do_arquivo.txt`.

#### Conclusão

Agora você conhece os comandos básicos do Prompt de Comando no Windows. Praticar esses comandos ajudará você a se sentir mais confortável navegando e manipulando arquivos e pastas usando a linha de comando. O Prompt de Comando é uma ferramenta poderosa que pode aumentar significativamente sua eficiência ao trabalhar no Windows.

Se tiver dúvidas ou precisar de ajuda adicional, a documentação do Windows e inúmeros tutoriais online podem oferecer mais suporte.