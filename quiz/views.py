from django.shortcuts import render
# Create your views here.


def home(request):
    return render (request, 'main/home.html')

def base(request):
    return render (request, 'main/base.html')

def questions(request):
    return render (request, 'main/questions.html')