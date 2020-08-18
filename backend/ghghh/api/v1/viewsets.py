from rest_framework import authentication
from ghghh.models import Hhggjhg
from .serializers import HhggjhgSerializer
from rest_framework import viewsets


class HhggjhgViewSet(viewsets.ModelViewSet):
    serializer_class = HhggjhgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Hhggjhg.objects.all()
