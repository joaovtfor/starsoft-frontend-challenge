🚀 Starsoft NFT Marketplace Challenge

Este projeto é uma plataforma de marketplace de NFTs desenvolvida como parte de um desafio técnico para Desenvolvedor(a) Front-end. A aplicação foca em alta performance, animações fluidas e uma experiência de compra impecável utilizando o ecossistema moderno do React.
🛠️ Tecnologias e Decisões Técnicas

A stack foi escolhida para garantir escalabilidade, tipagem forte e uma UI reativa:

    Next.js 15+ & React 19: Utilização das versões mais recentes para aproveitar o novo React Compiler e otimizações de renderização.

    TypeScript: Implementado de forma estrita em todo o projeto para garantir segurança de dados e facilitar a manutenção.

    Redux Toolkit: Gerenciamento do estado global do carrinho, garantindo fluxo de dados previsível.

    TanStack Query (React Query) v5: Consumo da API com cache inteligente, estados de loading automatizados e sincronização de dados.

    Styled Components: Estilização scoped e dinâmica, permitindo o uso de temas e transient props para evitar conflitos no DOM.

    Framer Motion: Orquestração de micro-interações, transições de estado e o comportamento complexo de saída de componentes.

    Jest & React Testing Library: Suíte de testes para garantir a estabilidade das principais regras de negócio.

✨ Funcionalidades Implementadas
🛒 Carrinho de Compras (Mochila)

    Sidebar Animada: Surgimento lateral com efeito de mola (spring physics) e animação de entrada/saída via AnimatePresence.

    Contador Dinâmico: O valor total em ETH utiliza o componente AnimatedNumber, que anima a transição numérica para um feedback visual premium.

    Animações de Lista: Itens removidos do carrinho possuem animação de colapso e fade, enquanto os itens restantes deslizam suavemente via prop layout.

    Acessibilidade: Suporte a fechamento via tecla ESC, bloqueio de scroll do body ao abrir o modal e compensação dinâmica de largura da scrollbar para evitar "pulos" no layout.

🃏 Cards de Produto e Listagem

    Infinite Scroll: Implementado com o componente PaginationLoader para carregamento fluido.

    Botão de Ação com Estado: Botão inteligente que gerencia o ciclo: Compra -> Sucesso (Animação de Letras) -> Sweep Effect (Varredura) -> Reset.

    Feedback Visual: Tratamento de estados de carregamento com Skeleton Loaders e fallbacks para imagens com erro.

🧪 Qualidade de Código e Testes

    Clean Code: Separação clara entre componentes de apresentação, lógica de estado e serviços de API.

    Testes Abrangentes: Cobertura de componentes críticos (Header, Button, Modal, Pagination) com mocks de Redux e Framer Motion.

🚀 Como Executar o Projeto
via Docker (Recomendado)

A aplicação está totalmente dockerizada para garantir consistência entre ambientes.
Bash

# Iniciar a aplicação e serviços

docker-compose up --build

Acesse em: http://localhost:3000
Localmente
Bash

🧪 Executando Testes
Bash

# Executar testes no docker

docker-compose exec app npm run test

# Instalar dependências

npm install

# Rodar todos os testes

npm run test

# Gerar relatório de cobertura (coverage)

npm test -- --coverage

📁 Estrutura do Projeto
Plaintext

src/
├── _tests_/ # Arquivos de testes unitários e de integração
├── components/ # Componentes globais (Button, Modal, Header, Footer)
├── pages/ # Rotas e páginas da aplicação (Next.js)
├── services/ # Configuração do Axios e chamadas de API
├── store/ # Configuração Redux Toolkit e Slices (cartSlice)
├── styles/ # Temas, globais e configurações do Styled Components
├── types/ # Interfaces e tipos globais do TypeScript
├── utils/ # Helpers

📈 Melhorias Futuras

    Persistência de Dados: Implementar redux-persist para manter o carrinho mesmo após o fechamento do navegador.

    Dark Mode: Implementar alternância de temas aproveitando a estrutura já existente do ThemeProvider.

    SEO Avançado: Adicionar meta-tags dinâmicas e JSON-LD para melhor indexação de NFTs em motores de busca.

Desenvolvedor: João Vitor de For dos Santos.

Link do Figma Seguido: [Figma Design](https://www.figma.com/design/j9HHfWPPoLyObtlVBeMhTD/Front-end-Challenge?node-id=6-898&t=ba0dh4Ui2tE1MBRX-1)

API: https://api-challenge.starsoft.games/api/v1
