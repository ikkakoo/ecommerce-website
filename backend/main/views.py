from rest_framework.decorators import api_view
from rest_framework.response import Response

from .products import products

@api_view(['GET'])
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

    return Response(routes)


@api_view(['GET'])
def get_products(request):
    return Response(products)


@api_view(['GET'])
def get_product(request, pk):
    product = None

    for i in products:
        if i['id'] == pk:
            product = i
            break
            
    return Response(product)            
