from rest_framework import routers
from django.urls import path
from . import views


router = routers.SimpleRouter()
router.register('product', views.ProductList, basename='product')


urlpatterns = [
    path('upload/', views.upload)
]
urlpatterns += router.urls
