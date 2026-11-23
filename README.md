# MedUp — Landing Page

Landing page do projeto MedUp, desenvolvida com React, Vite e TypeScript.

## Requisitos

- Node.js 18 ou superior
- npm

## Como executar

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite (normalmente `http://localhost:5173`).

## Como configurar os links

Abra `src/App.tsx` e altere as duas constantes no início do arquivo:

```ts
const APP_DOWNLOAD_URL = 'https://seu-link-do-apk'
const PRESENTATION_FEEDBACK_URL = 'https://seu-link-do-formulario'
```

- `APP_DOWNLOAD_URL`: link público para baixar o APK (ou página de download).
- `PRESENTATION_FEEDBACK_URL`: link do formulário para avaliar a apresentação.

Enquanto os links estiverem como `#`, os botões não levarão a um destino externo.

## Gerar versão de produção

```bash
npm run build
npm run preview
```

Os arquivos prontos para publicação ficam na pasta `dist/`.

## Publicação

O projeto pode ser publicado em serviços de hospedagem estática como Vercel, Netlify ou GitHub Pages. Para publicar, gere primeiro a versão de produção com `npm run build` e envie o conteúdo da pasta `dist/` conforme as instruções da plataforma escolhida.
