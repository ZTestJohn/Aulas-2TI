class Musicas:
    def __init__(self, nome, interprete, compositor, genero, ano, duracao):
        self.nome = nome 
        self.interprete = interprete
        self.compositor = compositor
        self.genero = genero
        self.ano = ano
        self.duracao = duracao

musicasArr = []   
while True:
    oQueFazer = int(input("""
    O que fazer?
    [1] - Inserir música
    [2] - Exibir música
    [3] - Excluir música
    [4] - Alterar música
    """))
    match oQueFazer:
        case 1:
            musicasArr.append(Musicas(
                input("Digite o nome: "),
                input("Digite o interprete: "),
                input("Digite o compositor: "),
                input("Digite o genero: "),
                int(input("Digite o ano: ")),
                input("Digite a duração: "),
                ))
        case 2:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música")
            for i in musicasArr:
                print(i.nome)
        case 3:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música")
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
[2] - Interprete
[3] - Compositor
[4] - Genero
[5] - Ano
[6] - Duração

"""))

    match opcao:
        case 1:
            novo_nome = input("Digite o novo nome da música: ")
            musicaObj.nome = novo_nome
        case 2:
            novo_interprete = input("Digite o novo intérprete: ")
            musicaObj.interprete = novo_interprete
        case 3:
            novo_compositor = input("Digite o novo compositor: ")
            musicaObj.compositor = novo_compositor
        case 4:
            novo_genero = input("Digite o novo gênero: ")
            musicaObj.genero = novo_genero
        case 5:
            novo_ano = int(input("Digite o novo ano: "))
            musicaObj.ano = novo_ano
        case 6:
            nova_duracao = input("Digite a nova duração: ")
            musicaObj.duracao = nova_duracao
        case _:
            print("Opção inválida.")

while True:
    oQueFazer = int(input("""
    O que fazer?
    [1] - Inserir música
    [2] - Exibir música
    [3] - Excluir música
    [4] - Alterar música
    """))
    match oQueFazer:
        case 1:
            musicasArr.append(Musicas(
                input("Digite o nome: "),
                input("Digite o interprete: "),
                input("Digite o compositor: "),
                input("Digite o genero: "),
                int(input("Digite o ano: ")),
                input("Digite a duração: "),
                ))
        case 2:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música")
            for i in musicasArr:
                print(i.nome)
        case 3:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música")
            musicaPesquisada = input("Digite o nome da música de deseja apagar")
            for i in musicasArr:
                if i.nome == musicaPesquisada:
                    musicasArr.remove(i)
                    print(f"Excluindo {i.nome}")
            print("Musica não encontrada.")
        case 4:
            if len(musicasArr) == 0:
                print("Adicione ao menos uma música")
                
            musicaPesquisada = input("Digite o nome da música de deseja alterar")
            for i in musicasArr:
                if i.nome == musicaPesquisada:
                    alterarMusica(i)
                    
            print("Musica não encontrada.")
                    print(f"Excluindo {i.nome}")