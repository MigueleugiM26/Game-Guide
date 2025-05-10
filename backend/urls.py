from . import views
from django.urls import path, re_path
from django.shortcuts import redirect
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from . import views
from django.conf import settings

urlpatterns = [
    path('', lambda request: redirect('/home', permanent=True)),  
    path('home', views.home, name='home'),
    path("new-guide/", views.new_guide, name="new-guide"),
    path("login/", auth_views.LoginView.as_view(template_name="login.html"), name="login"),
    path("logout/", auth_views.LogoutView.as_view(next_page="home"), name="logout"),
    path("register/", views.register, name="register"),
    path("api/guides/", views.guide_list, name="guide-list"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
