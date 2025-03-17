from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
import uvicorn

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

def read_html(file_name):
    try:
        with open(f"templates/{file_name}.html", encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        return "<h1>404 - Page Not Found</h1>", 404

@app.get("/", response_class=HTMLResponse)
def home():
    return read_html("index")

@app.get("/home", response_class=HTMLResponse)
def home_page():
    return "<h1>Welcome to My Portfolio</h1><p>Explore my work and skills.</p>"

@app.get("/about", response_class=HTMLResponse)
def about_page():
    return "<h1>About Me</h1><p>I am a data scientist passionate about analytics.</p>"

@app.get("/projects", response_class=HTMLResponse)
def projects_page():
    return """
        <h1>My Projects</h1>
        <div class="project-grid">
            <div class="card">📊 Data Science Project 1</div>
            <div class="card">📂 Backend API Project</div>
            <div class="card">📈 Predictive Model</div>
        </div>
    """

@app.get("/contact", response_class=HTMLResponse)
def contact_page():
    return "<h1>Contact Me</h1><p>Email: example@domain.com</p>"

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
