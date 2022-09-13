from django.urls import path, include
from main.views import get_products, get_routes

urlpatterns = [
    path('', get_routes, name='routes'),
    path('products/', get_products, name='products'),
]
