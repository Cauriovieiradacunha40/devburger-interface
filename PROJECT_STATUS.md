# PROJECT STATUS

# DevBurger Interface

## Status Geral

🟢 Projeto iniciado.

O frontend foi criado utilizando React + Vite e está preparado para o desenvolvimento da aplicação.

---

# Tecnologias

- React
- Vite
- JavaScript
- pnpm
- ESLint

---

# Ambiente

- Projeto criado com Vite.
- Dependências instaladas com pnpm.
- ESLint configurado.
- Servidor de desenvolvimento funcionando.
- Aplicação executando corretamente em:

http://localhost:5173

---

# Aulas Concluídas

## Aula 01 — Introdução

✔ Introdução ao módulo Frontend.

---

## Aula 02 — Iniciando Projeto

✔ Projeto criado utilizando Vite.
✔ React instalado.
✔ JavaScript selecionado.
✔ ESLint configurado.
✔ Dependências instaladas.
✔ Servidor iniciado.
✔ Aplicação executando corretamente.
✔ Estrutura inicial validada.

---

## Aula 03 — Organizando Projeto

✔ Organização inicial da arquitetura do frontend.
✔ Criação das pastas principais da aplicação.
✔ Estrutura preparada para crescimento do projeto.
✔ Criação do componente Login.
✔ Configuração inicial do main.jsx para renderizar a tela de Login.
✔ Correção de erro de exportação do componente Login.
✔ Estrutura validada.

---

# Documentação

✔ PROJECT_STATUS.md criado.
✔ PROJECT_STRUCTURE.md criado.

---

## Aula 04 — ESLint + Prettier no React

✔ Instalação do Prettier.
✔ Instalação do eslint-config-prettier.
✔ Instalação do eslint-plugin-prettier.
✔ Instalação do eslint-plugin-import-helpers.
✔ Criação do arquivo .prettierrc.json.
✔ Instalação da extensão ESLint no VS Code.
✔ Instalação do Material Icon Theme.
✔ Ambiente de desenvolvimento padronizado.

## Aula 05 — Estilos Globais com Styled Components

✔ Instalação do styled-components.
✔ Criação da pasta styles.
✔ Criação do arquivo globalStyles.js.
✔ Configuração do createGlobalStyle.
✔ Definição dos estilos globais da aplicação.
✔ Aplicação do GlobalStyles no main.jsx.
✔ Padronização da estilização global utilizando Styled Components.

# ✅ Atualização de Status — DevBurger Interface

## Aula 6 — Finalizada

- Criada a estrutura inicial da página de Login.
- Criado o arquivo `Login/styles.js`.
- Criados os componentes com Styled Components:
  - Container
  - LeftContainer
  - RightContainer
  - Title
  - Form
  - InputContainer
  - Link
  - Button
- Importada a logo do projeto.
- Montada a estrutura JSX da tela de Login.
- Corrigidos os erros de digitação (`InputContainer` e `<input>`).
- Tela preparada para receber a estilização conforme o layout do Figma na próxima aula.

## Histórico da Estrutura

### Aula 07

- Criação da pasta:
  - src/components/Button
- Criação dos arquivos:
  - src/components/Button/index.jsx
  - src/components/Button/styles.js

### Aula 08

- Implementação completa do componente reutilizável Button.
- Adição da validação de propriedades com PropTypes.
- Integração do componente Button à tela de Login.

## Aula 09 — React Hook Form e Yup

Status: Concluída ✅

Implementações realizadas:
- Instalação do React Hook Form.
- Instalação do Yup.
- Integração do Yup com React Hook Form através do @hookform/resolvers.
- Criação do schema de validação do formulário.

## Aula 10 — Validação do Formulário

Status: Concluída ✅

Implementações realizadas:
- Registro dos campos utilizando register().
- Configuração do handleSubmit().
- Captura dos erros de validação.
- Exibição das mensagens de erro abaixo dos campos.
- Testes da validação utilizando console.log(errors).

## Aula 11 — Finalização da Tela de Login

Status: Concluída ✅

Implementações realizadas:
- Finalização da estilização da tela de Login.
- Ajuste visual das mensagens de validação.
- Integração das mensagens de erro do React Hook Form com a interface.
- Refinamentos na experiência do usuário durante a validação do formulário.

## Aula 12 — Configuração da Comunicação com a API

Status: Concluída ✅

Implementações realizadas:
- Instalação da biblioteca Axios.
- Preparação do frontend para comunicação com o backend.
- Início da configuração da camada de requisições HTTP da aplicação.

## Aula 13 — Resolvendo erro de conexão com CORS

Status: Concluída ✅

Implementações realizadas:
- Configuração do middleware CORS no backend.
- Liberação da comunicação entre o frontend e a API.
- Preparação do ambiente para as requisições HTTP utilizando Axios.
- Testes da integração entre frontend e backend.  

## Aula 14 — Personalizando notificações com React Toastify

Status: Concluída ✅

Implementações realizadas:

- Instalação da biblioteca React Toastify.
- Configuração do ToastContainer na aplicação.
- Integração do toast.promise() ao processo de Login.
- Criação da notificação de carregamento durante a verificação dos dados.
- Criação da notificação de sucesso para autenticação válida.
- Criação da notificação de erro para e-mail ou senha incorretos.
- Configuração do tempo de exibição das notificações.
- Configuração do tema colorido das notificações.
- Tratamento de erros da requisição utilizando try/catch.
- Testes da comunicação entre frontend e backend com retorno HTTP 401 para credenciais inválidas.
- Sistema de notificações da tela de Login validado e funcionando corretamente.

## Aula 15 — Criando usuário e configurando rotas

Status: Concluída ✅

Implementações realizadas:

- Criação de um usuário administrador para utilização no projeto.
- Teste de autenticação utilizando as credenciais do usuário criado.
- Validação da requisição de login com retorno HTTP 200.
- Instalação da biblioteca React Router DOM.
- Criação do arquivo src/routes/index.jsx.
- Configuração inicial das rotas da aplicação com createBrowserRouter.
- Configuração da rota "/" para a tela de Login.
- Integração do RouterProvider no main.jsx.
- Alteração do fluxo de renderização para utilizar o sistema de rotas.
- Manutenção do GlobalStyles e ToastContainer na raiz da aplicação.
- Sistema de Login integrado à API e sistema inicial de rotas funcionando corretamente.

## Aula 16 — Criação da Tela de Cadastro

Status: Concluída ✅

Implementações realizadas:

- Criação da página Register.
- Criação dos arquivos index.jsx e styles.js da página Register.
- Desenvolvimento da interface da tela de cadastro.
- Criação dos campos Nome, Email, Senha e Confirmar Senha.
- Integração do formulário com React Hook Form.
- Validação dos campos utilizando Yup.
- Validação da confirmação de senha.
- Exibição das mensagens de erro no formulário.
- Integração do cadastro com a API através do Axios.
- Envio dos dados para a rota POST /users.
- Integração das notificações com React Toastify.
- Configuração das notificações de carregamento, sucesso e erro.
- Adição da rota /cadastro utilizando React Router DOM.
- Testes da tela de cadastro e correção da estrutura JSX.
- Tela de cadastro funcionando corretamente.

## Aula 17 — Tratando Erros no Cadastro

Status: Concluída ✅

Implementações realizadas:

- Implementado tratamento de respostas da API no cadastro.
- Tratamento de cadastro realizado com sucesso.
- Tratamento de e-mail já cadastrado.
- Tratamento de falhas de comunicação com o backend.
- Configuração de notificações com React Toastify para cada situação.
- Adequação do tratamento ao status 400 retornado pela API para e-mail já cadastrado.
- Testes realizados com backend ativo e inativo.

## Aula 18 — Cuidando da navegação — EM ANDAMENTO

### Alterações realizadas

* Criada a nova container `home`.
* Criado o arquivo:

  * `src/containers/home/index.jsx`
* Atualizado `src/routes/index.jsx`.
* Adicionada a rota `/` apontando para o componente `Home`.
* Mantidas as rotas:

  * `/login` → `Login`
  * `/cadastro` → `Register`
* Implementado `useNavigate` no cadastro.
* Após um cadastro realizado com sucesso, a aplicação aguarda 2 segundos e redireciona automaticamente para `/login`.
* Mantido o tratamento do backend para sucesso com status `200` ou `201`.
* Teste realizado com novo usuário.
* Backend retornou `201 Created`.
* Redirecionamento automático para a tela de Login testado e funcionando corretamente.

### Fluxo confirmado

`Cadastro → usuário criado → toast de sucesso → aguarda 2 segundos → /login`

