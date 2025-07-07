# Portfólio Timeline Interativa - Mestrado FGV

Um site de portfólio moderno com timeline interativa, criado especificamente para apresentação no mestrado em Gestão: Liderança e Inovação da FGV.

## 🚀 Como Usar Este Projeto

### 1. Extrair e Instalar

```bash
# Extrair o arquivo ZIP
unzip portfolio-timeline-completo.zip

# Entrar na pasta do projeto
cd portfolio-timeline

# Instalar dependências
npm install
# ou
pnpm install
# ou
yarn install
```

### 2. Executar Localmente

```bash
# Iniciar servidor de desenvolvimento
npm run dev
# ou
pnpm run dev

# Abrir no navegador: http://localhost:5173
```

### 3. Personalizar Conteúdo

#### Substituir Imagens
As imagens estão em `src/assets/`:
- `childhood.jpg` - Foto da infância
- `high_school_graduation.jpg` - Formatura ensino médio
- `university_graduation.jpg` - Graduação
- `corporate_start.jpg` - Início da carreira
- `leadership_team.jpg` - Liderança/equipe
- `hobbies_interests.jpg` - Hobbies e interesses
- `fgv_masters.jpg` - Mestrado FGV

#### Editar Informações
Abra `src/components/Timeline.jsx` e modifique o array `timelineData`:

```javascript
const timelineData = [
  {
    id: 1,
    year: 'SEU_PERÍODO',
    title: 'SEU_TÍTULO',
    subtitle: 'SEU_SUBTÍTULO', 
    description: 'SUA_DESCRIÇÃO_DETALHADA',
    image: suaImagem,
    icon: SeuÍcone,
    color: 'from-cor1 to-cor2',
    details: [
      'Sua conquista 1',
      'Sua conquista 2',
      'Sua conquista 3',
      'Sua conquista 4'
    ]
  },
  // ... outros itens
]
```

#### Personalizar Título Principal
No mesmo arquivo, altere:
```javascript
<h1>SEU_NOME - Minha Jornada</h1>
<p>Portfólio - SEU_CURSO - SUA_INSTITUIÇÃO</p>
```

### 4. Build para Produção

```bash
# Gerar build otimizado
npm run build
# ou
pnpm run build

# Os arquivos estarão na pasta 'dist/'
```

## 🌐 Opções de Deploy Gratuito

### Vercel (Recomendado)
1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu GitHub
3. Faça upload da pasta do projeto
4. Deploy automático

### Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para o deploy
3. Site publicado instantaneamente

### GitHub Pages
1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

## 🎨 Funcionalidades Incluídas

- ✅ Timeline horizontal interativa
- ✅ Navegação por botões e setas
- ✅ Modal de detalhes expandidos
- ✅ Animações suaves (Framer Motion)
- ✅ Design responsivo (mobile/desktop)
- ✅ Cores profissionais personalizáveis
- ✅ Ícones modernos (Lucide)
- ✅ Performance otimizada

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI

## 📱 Estrutura do Projeto

```
portfolio-timeline/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Suas imagens aqui
│   ├── components/
│   │   ├── ui/          # Componentes base
│   │   └── Timeline.jsx # Componente principal
│   ├── hooks/
│   ├── lib/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── dist/                # Build de produção
├── package.json
└── vite.config.js
```

## 🎯 Dicas de Personalização

### Cores dos Gradientes
Cada seção tem cores únicas. Para alterar:
```javascript
color: 'from-blue-500 to-purple-500'  // Azul para roxo
color: 'from-green-500 to-emerald-500' // Verde para esmeralda
```

### Ícones
Importe novos ícones do Lucide:
```javascript
import { GraduationCap, Briefcase, Heart } from 'lucide-react'
```

### Animações
Personalize no Framer Motion:
```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
```

## 📞 Suporte

Se precisar de ajuda:
1. Verifique se todas as dependências estão instaladas
2. Teste localmente antes do deploy
3. Use as ferramentas de desenvolvedor do navegador para debug

## 🎓 Sucesso no seu Mestrado!

Este portfólio foi criado especialmente para impressionar os professores da FGV. Personalize com suas informações reais e compartilhe com orgulho!

---

**Criado com ❤️ para o seu sucesso acadêmico**

