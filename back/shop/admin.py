from django.contrib import admin
from .models import Product, Category, Properties

admin.site.register(Product)
admin.site.register(Properties)
admin.site.register(Category)
