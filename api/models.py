from django.db import models

class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    edad = models.IntegerField()
    fecha_registro = models.DateField(auto_now_add=True)

class Curso(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    duracion = models.IntegerField()
    nivel = models.CharField(max_length=50)