from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("querypoll", views.query_poll_view, name="querypoll"),
    path("newdata/<str:title>/<int:value>/<str:unit>", views.new_data_view, name="newdata"),
]