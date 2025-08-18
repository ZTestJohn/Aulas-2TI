class Musicas:
    def __init__(self, nome, interprete, compositor, genero, ano, duracao):
        self.nome = nome 
        self.interprete = interprete
        self.compositor = compositor
        self.genero = genero
        self.ano = ano
        self.duracao = duracao

musicasArr = []

def alterarMusica(musicaObj):
    opcao = int(input("""
O que você deseja alterar:
[1] - Nome
[2] - Intérprete
[3] - Compositor
[4] - Gênero
[5] - Ano
[6] - Duração
"""))
    match opcao:
        case 1:
            musicaObj.nome = input("Digite o novo nome da música: ")
        case 2:
            musicaObj.interprete = input("Digite o novo intérprete: ")
        case 3:
            musicaObj.compositor = input("Digite o novo compositor: ")
        case 4:
            musicaObj.genero = input("Digite o novo gênero: ")
        case 5:
            musicaObj.ano = int(input("Digite o novo ano: "))
        case 6:
            musicaObj.duracao = input("Digite a nova duração: ")
        case _:
            print("Opção inválida.")

while True:
    oQueFazer = int(input("""
O que fazer?
[1] - Inserir música
[2] - Exibir músicas
[3] - Excluir música
[4] - Alterar música
[5] - Sair
"""))
    
    match oQueFazer:
        case 1:
            musicasArr.append(Musicas(
                input("Digite o nome: "),
                input("Digite o intérprete: "),
                input("Digite o compositor: "),
                input("Digite o gênero: "),
                int(input("Digite o ano: ")),
                input("Digite a duração: ")
            ))
        case 2:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música.")
            else:
                for i, musica in enumerate(musicasArr, start=1):
                    print(f"""
[{i}] Nome: {musica.nome}
    Intérprete: {musica.interprete}
    Compositor: {musica.compositor}
    Gênero: {musica.genero}
    Ano: {musica.ano}
    Duração: {musica.duracao}
""")
        case 3:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música.")
            else:
                nomeExcluir = input("Digite o nome da música que deseja excluir: ")
                for musica in musicasArr:
                    if musica.nome.lower() == nomeExcluir.lower():
                        musicasArr.remove(musica)
                        print(f"Música '{musica.nome}' excluída.")
                        break
                else:
                    print("Música não encontrada.")
        case 4:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música.")
            else:
                nomeAlterar = input("Digite o nome da música que deseja alterar: ")
                for musica in musicasArr:
                    if musica.nome.lower() == nomeAlterar.lower():
                        alterarMusica(musica)
                        break
                else:
                    print("Música não encontrada.")
        case 5:
            print("Encerrando o programa.")
            break
        case _:
            print("Opção inválida.")