from django.shortcuts import render
from .products import products
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST


# Create your views here.
@api_view(["GET"])
def getProducts(request):
    return Response(products)
