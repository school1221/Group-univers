
from django.urls import path

from apps import views

urlpatterns = [
    path('', views.home, name='accueil'),
    path('presenterlivre/', views.presenterlivre, name='presenterlivre'),
    path('apropos/', views.about, name='apropos'),
    path('services/', views.services, name='services'),
    path('news/', views.atualite, name='news'),
    path('contact/', views.contact, name='contact'),
    path('distributions/', views.distributions, name='distributions'),
    path('commande/', views.commande, name='commande'),
    path('nosagences/', views.nosagences, name='nosagences'),
]





