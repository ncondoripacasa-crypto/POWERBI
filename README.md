# Dashboard de Herramientas BI 📊

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=for-the-badge&logo=streamlit&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Kaggle](https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white)

Este proyecto contiene una aplicación desarrollada en Streamlit para visualizar datos sobre herramientas de Inteligencia de Negocios (BI), un análisis exploratorio en Jupyter Notebook y una Landing Page para ser alojada en GitHub Pages.

## Arquitectura del Proyecto

* `app/`: Contiene el código fuente de la aplicación Streamlit (`main.py`).
* `data/`: Almacenamiento local para copias de seguridad de los archivos CSV.
* `docs/`: Contiene el `index.html` utilizado como Landing Page en GitHub Pages.
* `notebooks/`: Cuaderno Jupyter (`analisis_bi.ipynb`) utilizado como insumo principal.

## Instrucciones de Instalación

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```
3. Para ejecutar la aplicación de Streamlit:
   ```bash
   python -m streamlit run app/main.py
   ```
4. Para ejecutar la Landing Page: Abre `docs/index.html` en tu navegador.

## Fuentes de Datos

Los datos son obtenidos dinámicamente utilizando `kagglehub` desde el repositorio público de Kaggle: [karlitaestre/herramientas-bi].
