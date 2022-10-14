import csv
from .models import Category, Product, Properties


def parse_products(file):
    if file.split('.')[-1] != 'csv':
        return [404, 'Это не csv!']
    with open(file, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=';')
        for i, row in enumerate(reader):
            if i == 0 or len(row) == 0:
                continue
            deepest_cat = None
            if row[2]:
                deepest_cat = Category.objects.update_or_create(name=row[2])[0]
                if row[3]:
                    deepest_cat = Category.objects.update_or_create(name=row[3], parent_category=deepest_cat)[0]
                    if row[4]:
                        deepest_cat = Category.objects.update_or_create(name=row[4], parent_category=deepest_cat)[0]

            product = Product.objects.update_or_create(
                article=row[0], name=row[1],
                price=float(row[5].replace(',', '.').replace('"', '')),
                special_price=float(row[6].replace(',', '.').replace('"', '')),
                count=int(float(row[7])), measurement=row[9],
                show_main=bool(row[10]), description=row[11], category=deepest_cat
            )[0]
            props = row[8].split('/')
            for prop in props:
                try:
                    key, value = prop.split(':')
                except Exception:
                    break
                Properties.objects.update_or_create(key=key, value=value, product=product)
        return [200, 'Файл успешно загружен!']
