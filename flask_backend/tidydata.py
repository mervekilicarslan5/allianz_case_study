import pandas as pd

def tidy_data(dataExcel):

    dataExcel = pd.read_excel('/ADP_Case_Study_Data.xlsx').dropna(axis=1, how='any').to_dict('list')
    root = ""
    sce = ""
    data_dict = {}
    for key in dataExcel:
        market = dataExcel[key][1]
        if not key.startswith('Unnamed'):
            root = key
            data_dict[root] = {}
            
        if sce != dataExcel[key][0] :
            sce = dataExcel[key][0]
            data_dict[root][sce]= {}

        data_dict[root][sce][market] ={}
        data_dict[root][sce][market]= dataExcel[key][2:]

    return data_dict 
            