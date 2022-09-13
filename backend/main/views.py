from itertools import product
from django.shortcuts import render
from django.http import JsonResponse
from . import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


def get_routes(request):
    routes = [
        'api/products/',
        'api/products/<id>',


        'api/products/create/',
        'api/products/delete/<id>',
        'api/products/update/<id>',

        'api/products/upload',

        'api/products/<id>/reviews/',

        'api/products/top',
    ]

    return JsonResponse(routes, safe=False)


def get_products(request):
    return JsonResponse(products, safe=False)
