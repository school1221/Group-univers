
from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, 'accueille.html')


def presenterlivre(request):
    return render(request, 'presenterlivre.html')


def about(request):
    return render(request, 'apropos.html')

def services(request):
    return render(request, 'services.html')


def atualite(request):
    return render(request, 'atualite.html')


def contact(request):
    return render(request, 'contact.html')


def distributions(request):
    return render(request, 'distributions_en_ligne.html')  

def commande(request):
    return render(request, 'commande.html')  

def nosagences(request):
    return render(request, 'nosagences.html')  


 


