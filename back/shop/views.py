from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from django.core.files import File
from .serializers import ProductSerializer
from .utils import parse_products
from .models import Product

upload_path = 'upload/'


@api_view(['POST'])
def upload(request):
    file = request.FILES.get('file', None)
    if not file:
        return Response({'message': 'Ошибка'})
    filename = file.name
    dest_path = upload_path + filename
    with open(dest_path, 'w') as f:
        file_obj = File(f)
        for chunk in file.chunks():
            file_obj.write(chunk.decode('utf-8'))
    message = parse_products(dest_path)

    return Response(status=message[0], data={'message': message[1]})


class ProductList(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductSerializer



