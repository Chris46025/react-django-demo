from django.shortcuts import render
from models import Fact
from rest_framework import generics
from serializers import FactSerializer

# Create your views here.
class FactDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Fact.objects.all()
	serializer_class = FactSerializer

def index(request):
	return render(request, 'fact/index.html')

def detail(request, fact_id):
	fact = Fact.objects.get(pk=fact_id)
	return render(request, 'fact/detail.html', {'fact':fact})
