# --- ESTRUTURA DE DADOS ---
perguntas_hpv = [
    {
        "tema": "Transmissão e Sintomas",
        "caso": "Caso de João (25 anos): João notou o surgimento de pequenas 'verrugas' na região genital. Ele só teve relações com preservativo.",
        "pergunta": "Como João pode ter contraído HPV, mesmo usando camisinha? O preservativo protege 100% da transmissão?",
        "opcoes": {
            "A": "Sim, o preservativo protege 100%, então João deve ter contraído de outra forma, como contato com objetos.",
            "B": "Não, o HPV é transmitido pelo contato pele-a-pele em áreas não cobertas pelo preservativo, por isso a proteção não é total.",
            "C": "O HPV só pode ser transmitido pelo sêmen, o que indica que o preservativo rasgou ou foi mal utilizado.",
            "D": "É impossível, o diagnóstico de João está incorreto, pois o HPV exige penetração para ser transmitido."
        },
        "resposta_correta": "B",
        "explicacao": "O HPV é transmitido primariamente pelo contato pele-a-pele ou mucosa-com-mucosa. Como o preservativo não cobre toda a área genital, a transmissão ainda é possível através do contato com a pele infectada na base do pênis, bolsa escrotal ou região perianal."
    },
    {
        "tema": "Diagnóstico e Tipos de HPV",
        "caso": "Caso de Sofia (35 anos): Sofia vai ao ginecologista anualmente. O último exame de Papanicolau dela deu alterado, indicando lesões precursoras.",
        "pergunta": "O Papanicolau é um exame para diagnosticar apenas o câncer de colo de útero, ou ele também serve para detectar as alterações iniciais causadas pelo HPV?",
        "opcoes": {
            "A": "Ele detecta apenas o câncer em estágio avançado.",
            "B": "Ele detecta somente as lesões de HPV de alto risco.",
            "C": "Ele é crucial para detectar células anormais (lesões precursoras) causadas pelo HPV, antes que se tornem câncer.",
            "D": "O Papanicolau não tem relação com o HPV, ele apenas verifica a saúde geral do útero."
        },
        "resposta_correta": "C",
        "explicacao": "O Papanicolau é o principal exame de rastreio. Ele não diagnostica o vírus HPV diretamente (para isso é o PCR), mas sim as alterações celulares (lesões precursoras) causadas pelo vírus no colo do útero, permitindo o tratamento antes que evoluam para câncer."
    }
]

# --- FUNÇÕES DO JOGO ---

def exibir_pergunta(pergunta_data):
    """Exibe o caso clínico, a pergunta e as opções formatadas."""
    print("\n" + "="*50)
    print(f"🔬 TEMA: {pergunta_data['tema']}")
    print(f"👤 CASO CLÍNICO: {pergunta_data['caso']}")
    print("-" * 50)
    print(f"❓ PERGUNTA: {pergunta_data['pergunta']}\n")
    
    # Exibe as opções de forma organizada
    for chave, valor in pergunta_data["opcoes"].items():
        print(f"[{chave}] {valor}")
    print("="*50)

# --- LOOP PRINCIPAL DO JOGO ---

def iniciar_jogo_da_vida_hpv(lista_perguntas):
    """Gerencia o fluxo do quiz, entrada de usuário e pontuação."""
    pontuacao = 0
    total_perguntas = len(lista_perguntas)

    print("\n🎉 Bem-vindo(a) ao Jogo da Vida HPV! Teste seu conhecimento em casos clínicos de conscientização.")
    print(f"Você responderá a {total_perguntas} perguntas.")

    for i, pergunta in enumerate(lista_perguntas):
        # Mostra a pergunta atual (ex: Pergunta 1 de 2)
        print(f"\n--- PERGUNTA {i + 1} DE {total_perguntas} ---")
        
        # Chama a função para mostrar o texto e opções
        exibir_pergunta(pergunta)
        
        # Pede a resposta do usuário (e garante que a letra esteja em maiúscula)
        resposta_usuario = input("Digite a letra da sua resposta (A, B, C ou D): ").strip().upper()

        # Verifica se a resposta está correta
        if resposta_usuario == pergunta["resposta_correta"]:
            pontuacao += 1
            print(f"✅ Parabéns! Resposta CORRETA! Sua pontuação: {pontuacao}")
        else:
            print(f"❌ Que pena! Resposta INCORRETA. A resposta certa era: [{pergunta['resposta_correta']}]")
            
        # Fornece o feedback educativo, independentemente do acerto
        print(f"\n💡 APRENDIZADO:")
        print(f"{pergunta['explicacao']}")
        print("\n" + "#"*50)

    # Mensagem final do jogo
    print("\n--- FIM DO JOGO ---")
    print(f"✨ RESULTADO FINAL: Você acertou {pontuacao} de {total_perguntas} perguntas.")
    print("Obrigado por participar deste importante quiz de conscientização!")

# Inicia o jogo
if __name__ == "__main__":
    iniciar_jogo_da_vida_hpv(perguntas_hpv)