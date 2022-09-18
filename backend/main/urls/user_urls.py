from django.urls import path
from main.views.user_views import MyTokenObtainPairView, get_user_profile, get_users, register_user

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('profile/', get_user_profile, name='user-profile'),
    path('', get_users, name='users'),

    path('register', register_user, name='register'),
]
