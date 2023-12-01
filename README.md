# Sobre a API:
- Você desenvolverá uma API que disponibiliza 3 operações:
 1) Listagem de países (sua API só precisa nascer com 5 países)
 2) Consulta de Detalhes de um país
 3) Adição de um novo país
## O que esperamos:
1) Listagem:
A listagem deve retornar todos os países (não precisa de paginação). Somente os atributos 'nome' e 'codigo internacional iso' devem ser retornados

2) Consulta de Detalhes de um país:
Deve receber como parâmetro o 'codigo internacional iso' e devolver o país correspondente com todos os atributos preenchidos

3) A adição/criação de um país deve adicionar um novo país à lista de países existentes (pense em como pode fazer isso já que não pode utilizar um banco de dados). 
Todos os dados devem ser validados na entrada.
No caso de sucesso na inserção, retornar o novo país
## Premissas para esta API:
Neste projeto você não deve:
- Configurar e usar um Banco de Dados 
- subir o projeto numa Cloud (queremos rodando localhost mesmo)
- não se preocupe em configurar segurança na sua API (como API KEYS, Headers, etc)
-------------------------------------------------------------------------------------------------------

# Sobre o projeto WEB:
- Você desenvolverá um projetinho web pra utilizar a sua API com as seguintes especificações
1) Construa 1 tela que ao carregar faz a listagem de todos os países 
2) Ao clicar num país da listagem, exiba o detalhe do país (pode ser numa nova tela ou num div/p dinâmico na mesma tela)
3) Crie um form que salva um país (pode ser na mesma tela ou numa diferente). Ao salvar o país, exiba a tela 1 e/ou atualize a listagem.

## Premissas WEB:
- Pode ser feio, não se preocupe com styling/css
- Não se preocupe em rodar na cloud, rode localmente
-------------------------------------------------------------------------------------------------------
# Estrutura do objeto País:
- nome (string, não nula, não vazia)
- codigo internacional iso (string, não nula, não vazia)  [invente um ou se preferir, baseie-se nessa tabela aqui: https://countrycode.org/]
- continente (string, não nula, , não vazia)
- populacao (double, não nulo, não vazio, maior que 10 mil) [pode inventar um numero da sua cabeça ou procurar informação na internet]
- data de criação (LocalDateTime, não nulo)