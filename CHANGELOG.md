# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [Não lançado]

## [1.1.0] - 2026-11-05

Portal com cara e jeito de app nativo, nas cores e com o logotipo da
Supersonic (índigo #3E4095 para ação e âmbar #FFA401 de destaque).

### Adicionado

- **Perfil** (aba nova na barra): foto ou inicial, CPF/CNPJ mascarado e os
  grupos Minha conta (Meus dados, Contratos, Consumo, Declaração de quitação),
  Preferências (Aparência Sistema/Claro/Escuro, Segurança, Instalar o app),
  Ajuda (Dúvidas, WhatsApp, Sobre com a versão) e Sair da conta.
- **Botão Pagar** no centro da barra, com o símbolo do Pix: abre os boletos
  em aberto.
- **Declaração anual de quitação** (Lei nº 12.007/2009) em PDF, para os anos
  encerrados e totalmente pagos. Atalho em Boletos → Pago e no Perfil.
- **Recibo em PDF** com os dados da Supersonic (razão social, CNPJ, endereço
  em São Sebastião/AL), carimbo PAGO e demonstrativo com acréscimos:
  Compartilhar envia o arquivo; Salvar PDF baixa.
- **Diagnóstico de conexão** e **novo chamado em duas etapas**.
- **Alterar senha** em Perfil → Segurança.
- **Teste de velocidade**: confere a rede do celular e o roteador antes de
  medir (medição pelo fast.com).
- **Segurança**: proteção do app por PIN de 4 dígitos, só neste aparelho.
- **Login**: contas já usadas no aparelho (a senha nunca fica guardada) e
  "Não consigo entrar?" com três opções.
- **Lembrete de senha padrão** no Início; "Agora não" adia por 30 dias.
- **Foto de perfil** (só no aparelho), **guia da Início** na primeira vez e
  **selo central de "copiado"**.
- **Consumo**: tocar no período abre a escolha de mês e ano.
- **"Já paguei este boleto"** no cartão do Início e em Boletos.
- **Dúvidas** por assunto, com atalho direto para a tela de cada um.

### Alterado

- **Visual novo em todas as telas**: fonte Manrope local, cores e cantos do
  Material 3, blocos brancos com linhas e ícone em círculo, cartões grafite
  e abas em pílula.
- **Início**: saudação com a inicial, faixa da conexão que abre os detalhes,
  cartão grafite do próximo boleto com Copiar código Pix, acesso rápido em
  círculos e cartão do WhatsApp.
- **Boletos**: o mais urgente em cartão grafite (prazo em dias, conta de multa
  e juros, menu ⋯ com compartilhar, PDF e Já paguei); pagos em linhas com
  Recibo.
- **Login**: topo índigo com o logotipo em quadro branco e degradê pelo âmbar.
- **Janelas** centralizadas; o voltar do celular fecha a janela aberta.
- **Navegação**: sem botão de voltar nas telas (só no chat do Suporte); telas
  que abrem por cima têm X. O voltar do celular leva de qualquer aba ao Início
  e, do Início, sai do app.
- **Jeito de app nativo**: troca de tela deslizando, sem zoom, sem a página
  esticar, seleção de texto só em campos de entrada, aviso no estilo Snackbar.
- **Barras do sistema** na cor do fundo da tela (índigo só no login).

### Removido

- Chave Pix de reserva: o botão Copiar código Pix só aparece quando o boleto
  traz o próprio código (a Supersonic não usa chave de reserva; antes copiava
  um CNPJ que não era o da empresa).

### Segurança

- jsPDF 4.2.1 e `npm audit fix` nas dependências de build.

## [1.0.0] - 2026-11-03

### Adicionado

- Primeira versão publicada do portal do cliente Supersonic.

[Não lançado]: https://github.com/jmanoelslva/SUPERSONIC_CLIENTE_PWA_APP/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/jmanoelslva/SUPERSONIC_CLIENTE_PWA_APP/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/jmanoelslva/SUPERSONIC_CLIENTE_PWA_APP/releases/tag/v1.0.0
