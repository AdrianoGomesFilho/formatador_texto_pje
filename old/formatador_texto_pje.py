import re
import language_tool_python

def format_text(input_text):
    # Split the text into lines
    lines = input_text.split('\n')
    
    # Strip leading and trailing whitespace from each line
    cleaned_lines = [line.strip() for line in lines]
    
    # Remove empty lines
    cleaned_lines = [line for line in cleaned_lines if line]
    
    # Join the cleaned lines into a single string with a single space separating each line
    formatted_text = ' '.join(cleaned_lines)
    
    # Replace multiple spaces with a single space
    formatted_text = re.sub(r'\s+', ' ', formatted_text)
    
    return formatted_text

def correct_text(text):
    tool = language_tool_python.LanguageTool('pt-BR')
    matches = tool.check(text)
    corrected_text = language_tool_python.utils.correct(text, matches)
    return corrected_text

if __name__ == "__main__":
    input_text = """DECISÃO 1 - O(A) autor(a)  requereu o início da execução. C  o (a)ite-se executado (a),  ,  para que pague (m) em 48 horas, ouatravés de seu patrono, via DEJT garanta(m) o juízo, sob pena de penhora. 2 -  Não havendo pagamento no prazo legal, a execução deverá prosseguir por meio dos sistemas   e  .SISBAJUD RENAJUD 3 - Quanto ao  , a Secretaria deverá juntar o relatório deRENAJUD todos  os  veículos  registrados  em  nome  do(s)  executado(s),  com  o  relatório  de gravames  porventura  incidentes,  voltando-me  os  autos  conclusos  para  análise  da viabilidade da inclusão do registro de restrição de intransferibilidade. 4  -  Inexistindo  êxito  nas  diligências  anteriores,  deverá  ser expedido   de tantos bens quantos bastem (caso a executada nãomandado de penhora esteja em lugar incerto e não sabido), bem como sua inclusão no   e no BNDT SERASAJUD . Observe-se que a inclusão no BNDT deverá observar o art. 883-A da CLT, ou seja, depois de transcorrido o prazo de 45 (quarenta e cinco dias) a contar da citação do executado, se não houver garantia do juízo. O  presente  despacho  segue  assinado  eletronicamente  pelo(a) Excelentíssimo(a) Senhor(a) Juiz(íza) do Trabalho abaixo identificado(a). RECIFE/PE, 12 de julho de 2024. PALOMA DANIELE BORGES DOS SANTOS COSTA Juíza do Trabalho Substituta"""
    formatted = format_text(input_text)
    corrected = correct_text(formatted)
    print("Formatted and Corrected Text:\n", corrected)