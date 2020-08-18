from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HhggjhgViewSet

router = DefaultRouter()
router.register("hhggjhg", HhggjhgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
