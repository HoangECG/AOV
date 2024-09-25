import requests
datapull = {}
spreadsheet_id = '1oGLhEFKQGiPlk9iumj5y1D67m3NCaWr8NKZBlpBbAOw'
api_key = 'AIzaSyARx2UnEZ_gUra4BNBc6_xGYkTX-7TvWDY'
sheet_name = "data"
url = f'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/{sheet_name}!A1:B?alt=json&key={api_key}'
response = requests.get(url)
sheet_data = response.json()
print(sheet_data)
if sheet_data:
    for i in sheet_data['values']:
        datapull[i[0]] = i[1]
        
print(datapull)