from django.urls import path
from main.views import get_product, get_products, get_routes, MyTokenObtainPairView, get_user_profile

urlpatterns = [
    path('users/login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),
         

    path('', get_routes, name='routes'),

    path('users/profile/', get_user_profile, name='user-profile'),

    path('products/', get_products, name='products'),
    path('products/<str:pk>', get_product, name='product'),
]
