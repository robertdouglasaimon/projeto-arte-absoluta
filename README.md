# Guia de Início do Projeto "projeto-arte-absoluta"

## Visão Geral

O "projeto-arte-absoluta" é um site desenvolvido para um cliente artista, desenhista e tatuador, utilizando React JS, Bootstrap 4 e TailwindCSS. O objetivo é criar um site visualmente atraente e funcional para destacar o trabalho artístico do cliente.

## Passos para Iniciar o Projeto

### 1. Configuração do Ambiente

Antes de começar, verifique se você tem o Node.js e o npm (Node Package Manager) instalados no seu sistema. Caso não tenha, você pode baixá-los [aqui](https://nodejs.org/).


### 2. Criação do Projeto

1. **Crie um novo projeto React usando Create React App:**

   ```bash
   npx create-react-app projeto-arte-absoluta

# Navegue até o diretório do projeto:
    cd projeto-arte-absoluta

# Instale o Bootstrap 4 e TailwindCSS:
    npm install bootstrap@4.6.0 tailwindcss

# Instale as dependências do React Bootstrap:
    npm install react-bootstrap bootstrap


### 3.**Configure o TailwindCSS:  
    Crie um arquivo de configuração do TailwindCSS:

    npx tailwindcss init



No arquivo tailwind.config.js, adicione as paths onde o Tailwind deve procurar classes:

        module.exports = {
        content: [
         "./src/**/*.{js,jsx,ts,tsx}",
         "./public/index.html"
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

No arquivo src/index.css, adicione as diretivas do Tailwind:

        @import 'bootstrap/dist/css/bootstrap.min.css';
        @import 'tailwindcss/base';
        @import 'tailwindcss/components';
        @import 'tailwindcss/utilities';
 

# 3. Estrutura do Projeto
<ul>
    <li>src/components/: Coloque seus componentes React aqui.</li>
    <li>src/pages/: Coloque suas páginas e layouts aqui.</li>
    <li>src/styles/: Adicione seus estilos CSS e Tailwind aqui.</li>
</ul>

### 4. Executar o Projeto
Para iniciar o servidor de desenvolvimento e ver o site em ação, execute:

    npm start

O site estará disponível em http://localhost:3000.


### 5. Desenvolvimento e Customização
<ul>
    <li>Adicione componentes: Comece a criar e estilizar os componentes usando React, Bootstrap e TailwindCSS.</li>
    <li>Personalize o design: Utilize o Bootstrap para componentes pré-estilizados e o TailwindCSS para estilos personalizados e utilitários.</li>
</ul>

### 6. Teste e Deploy
Antes de publicar, teste o site em diferentes navegadores e dispositivos. Para criar uma versão otimizada para produção, execute:

    npm run build

Isso gerará os arquivos estáticos que podem ser enviados para o servidor.

<h2>Recursos</h2>
<ul>
    <a href="https://react.dev/learn">
        <li>Documentação do React</li>
    </a>
    <a href="https://getbootstrap.com.br/docs/4.1/getting-started/introduction/">
        <li>Documentação do Bootstrap 4</li>
    </a>
    <a href="https://tailwindcss.com/docs">
        <li>Documentação do TailwindCSS</li>
    </a>
</ul>

Siga este guia para iniciar e desenvolver o projeto. :)
