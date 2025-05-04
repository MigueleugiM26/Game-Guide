from . import views
from django.urls import path, re_path
from django.shortcuts import redirect
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', lambda request: redirect('/home', permanent=True)),  
    path('home', views.home, name='home'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
