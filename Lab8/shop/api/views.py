from django.shortcuts import render, redirect
from django.http import HttpResponse


# Create your views here.
def index(request):
    return render(request, 'index.html')


def products(request):
    return render(request, 'index.html')


def product(request):
    return render(request, 'index.html')


def categories(request):
    return render(request, 'index.html')


def category(request):
    return render(request, 'index.html')
