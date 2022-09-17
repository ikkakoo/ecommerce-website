from rest_framework.decorators import api_view
from rest_framework.response import Response
from main.models import Product
from main.serializers import ProductSerializer


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
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
