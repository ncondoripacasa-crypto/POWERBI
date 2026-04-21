import kagglehub
import pandas as pd
import os

try:
    path = kagglehub.dataset_download("karlitaestre/herramientas-bi")
    print("Downloaded to:", path)
    files = os.listdir(path)
    print("Files:", files)
    
    for f in files:
        if f.endswith('.csv'):
            df = pd.read_csv(os.path.join(path, f))
            print(f"--- {f} ---")
            print(df.head())
            print(df.columns)
            print(df.info())
except Exception as e:
    print("Error:", e)
