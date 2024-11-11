import fitz  # PyMuPDF

def extract_text_from_pdf(pdf_path, page_number):
    # Open the PDF file
    pdf_document = fitz.open(pdf_path)
    
    # Select the page
    page = pdf_document.load_page(page_number - 1)
    
    # Extract text from the page
    text = page.get_text("text")
    
    return text

# Example usage
pdf_path = "path/to/your/pdf.pdf"
page_number = 1  # Page number to extract text from
extracted_text = extract_text_from_pdf(pdf_path, page_number)
print(extracted_text)