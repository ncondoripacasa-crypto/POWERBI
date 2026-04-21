import streamlit as st
import pandas as pd
import plotly.express as px
import kagglehub
import os

# Configuración de página
st.set_page_config(
    page_title="BI Tools Analytics",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Estilo personalizado
st.markdown("""
    <style>
    .main {
        background-color: #0e1117;
    }
    .stMetric {
        background-color: #1e293b;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #334155;
    }
    h1 {
        color: #60a5fa !important;
    }
    </style>
""", unsafe_allow_html=True)

@st.cache_data(ttl=3600)
def load_data():
    try:
        # Descarga desde Kaggle usando kagglehub
        path = kagglehub.dataset_download("karlitaestre/herramientas-bi")
        csv_files = [f for f in os.listdir(path) if f.endswith('.csv')]
        
        if csv_files:
            df = pd.read_csv(os.path.join(path, csv_files[0]))
            return df
        else:
            st.error("No se encontraron archivos CSV en el dataset de Kaggle.")
            return None
    except Exception as e:
        st.warning(f"Error cargando de Kaggle: {e}. Intentando carga local...")
        # Fallback local
        local_path = os.path.join("data", "dataset.csv")
        if os.path.exists(local_path):
            return pd.read_csv(local_path)
        else:
            st.error("Tampoco se encontró un archivo de respaldo local en 'data/dataset.csv'.")
            return None

def main():
    st.title("📊 Dashboard de Herramientas BI")
    st.markdown("Explora los datos del ecosistema de Business Intelligence de manera interactiva.")

    with st.spinner("Cargando datos..."):
        df = load_data()

    if df is not None and not df.empty:
        # --- SIDEBAR (Filtros) ---
        st.sidebar.header("Filtros ⚙️")
        
        # Identificar columnas categóricas para filtros
        cat_cols = df.select_dtypes(include=['object', 'category']).columns.tolist()
        
        filtered_df = df.copy()
        
        if cat_cols:
            # Seleccionar la primera columna categórica para un filtro de ejemplo
            filter_col = st.sidebar.selectbox("Selecciona columna a filtrar", cat_cols)
            unique_vals = df[filter_col].dropna().unique().tolist()
            selected_vals = st.sidebar.multiselect(f"Valores de {filter_col}", unique_vals, default=unique_vals[:min(5, len(unique_vals))])
            
            if selected_vals:
                filtered_df = filtered_df[filtered_df[filter_col].isin(selected_vals)]
                
        st.sidebar.markdown("---")
        st.sidebar.info("Datos obtenidos dinámicamente usando kagglehub.")

        # --- TARJETAS (KPIs) ---
        st.markdown("### Métricas Generales")
        col1, col2, col3 = st.columns(3)
        
        with col1:
            st.metric("Total Registros", f"{len(filtered_df):,}")
        with col2:
            st.metric("Columnas", f"{len(df.columns)}")
        with col3:
            num_cols = len(df.select_dtypes(include=['number']).columns)
            st.metric("Variables Numéricas", f"{num_cols}")

        st.markdown("---")

        # --- GRÁFICOS ---
        st.markdown("### Visualizaciones")
        col_chart1, col_chart2 = st.columns(2)

        # Gráfico 1: Barras (si hay datos categóricos)
        with col_chart1:
            if cat_cols:
                top_cat = filtered_df[cat_cols[0]].value_counts().head(10).reset_index()
                top_cat.columns = [cat_cols[0], 'Frecuencia']
                fig_bar = px.bar(
                    top_cat, 
                    x=cat_cols[0], 
                    y='Frecuencia', 
                    title=f"Top 10 - Frecuencia de {cat_cols[0]}",
                    color='Frecuencia',
                    color_continuous_scale='Blues'
                )
                fig_bar.update_layout(paper_bgcolor='rgba(0,0,0,0)', plot_bgcolor='rgba(0,0,0,0)')
                st.plotly_chart(fig_bar, use_container_width=True)
            else:
                st.info("No hay variables categóricas para el gráfico de barras.")

        # Gráfico 2: Dispersión o Histograma (si hay datos numéricos)
        with col_chart2:
            num_cols_list = df.select_dtypes(include=['number']).columns.tolist()
            if len(num_cols_list) >= 2:
                fig_scatter = px.scatter(
                    filtered_df, 
                    x=num_cols_list[0], 
                    y=num_cols_list[1], 
                    title=f"Relación: {num_cols_list[0]} vs {num_cols_list[1]}",
                    color_discrete_sequence=['#60a5fa']
                )
                fig_scatter.update_layout(paper_bgcolor='rgba(0,0,0,0)', plot_bgcolor='rgba(0,0,0,0)')
                st.plotly_chart(fig_scatter, use_container_width=True)
            elif len(num_cols_list) == 1:
                fig_hist = px.histogram(
                    filtered_df, 
                    x=num_cols_list[0], 
                    title=f"Distribución de {num_cols_list[0]}",
                    color_discrete_sequence=['#34d399']
                )
                fig_hist.update_layout(paper_bgcolor='rgba(0,0,0,0)', plot_bgcolor='rgba(0,0,0,0)')
                st.plotly_chart(fig_hist, use_container_width=True)
            else:
                st.info("No hay variables numéricas para visualizar.")

        # --- TABLA DE DATOS ---
        st.markdown("### Vista Previa de Datos")
        st.dataframe(filtered_df.head(100), use_container_width=True)

if __name__ == "__main__":
    main()
