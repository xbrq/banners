import pandas as pd

data = pd.read_csv('data/latest.csv', names=["bannerName", "x", "url"]).drop(columns=["x"])
# print(data.head())
# print(data.tail())

with open('siteheader', 'r') as f:
    header = f.read()

with open('sitefooter', 'r') as f:
    footer = f.read()

contents = '<div class="grid-container">\n'

item_string = '<div class="items" id="{}"><img src="{}" alt="{}" title="{}" id="{}" onerror="killImage(this);" width="480" height="270"></div>\n'

for row in data.iterrows():
    row = row[1]
    name = row.bannerName
    url = row.url
    contents += item_string.format(name, url, name, name, name)

contents += "</div>"

with open('index.html', 'w') as f:
    f.write(header.format(len(data)) + contents + footer)
