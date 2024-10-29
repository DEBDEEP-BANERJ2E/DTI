from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
import json
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_ollama import OllamaLLM
from dotenv import load_dotenv
from fuzzywuzzy import fuzz  # Import fuzzywuzzy for similarity checking

# Load environment variables
load_dotenv()
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = os.getenv("LANGCHAIN_API_KEY")

# Define the chat prompt
prompt = ChatPromptTemplate.from_messages(
    [
        ("system", 
         "You are a career counselor assistant. Based on the user's question, provide career advice and educational suggestions, "
         "including a recommended path and relevant universities. **Aim for answers within 200 words.**"
        "Provide meaningful responses without further questions."
        "If the question is something not related to career counseling, crack some nice jokes to lighten the mood and relate it to career somehow."),
        ("user", "Question: {question}")
    ]
)

# Initialize LLM
llm = OllamaLLM(model="llama2:latest", max_tokens=150)
output_parser = StrOutputParser()
chain = prompt | llm | output_parser

# Function to store prompts and responses in JSON
def store_prompt_in_json(question, output):
    prompt_data = {
        "question": question,
        "output": output
    }
    with open("prompt.json", "a") as json_file:
        json.dump(prompt_data, json_file)
        json_file.write("\n")

# Function to search for a similar question in the JSON file using fuzzy matching
def find_similar_question(question):
    try:
        with open("prompt.json", "r") as json_file:
            for line in json_file:
                data = json.loads(line)
                similarity_score = fuzz.ratio(data['question'].lower(), question.lower())
                if similarity_score >= 60:  # Adjust threshold as needed
                    return data['output']  # Return the previously stored output if found
    except FileNotFoundError:
        return None  # File doesn't exist yet
    return None  # No match found

app = FastAPI()

class CareerQuestion(BaseModel):
    question: str

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Career Counseling API! Use the /get_career_advice/ endpoint for advice."}

@app.post("/get_career_advice/")
async def get_career_advice(question: CareerQuestion):
    # Check for similar question first
    previous_response = find_similar_question(question.question)
    if previous_response:
        output = previous_response
    else:
        # Generate new response if no match is found
        output = chain.invoke({'question': question.question})
        store_prompt_in_json(question.question, output)

    # Return output
    return {
        "output": output
    }
