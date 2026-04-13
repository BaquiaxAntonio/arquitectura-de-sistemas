import graphene
from graphene_django import DjangoObjectType
from .models import Usuario, Curso

class UsuarioType(DjangoObjectType):
    class Meta:
        model = Usuario

class CursoType(DjangoObjectType):
    class Meta:
        model = Curso

class Query(graphene.ObjectType):
    usuarios = graphene.List(UsuarioType)
    cursos = graphene.List(CursoType)

    def resolve_usuarios(root, info):
        return Usuario.objects.all()

    def resolve_cursos(root, info):
        return Curso.objects.all()

schema = graphene.Schema(query=Query)