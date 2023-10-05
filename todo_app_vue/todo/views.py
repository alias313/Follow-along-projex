from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todo
from .serializer import TodoSerializer

class TodoView(APIView):

    def get(self, request):
        user = request.user
        todos = Todo.objects.filter(user = user)
        serializer = TodoSerializer(todos, many = True)
        return Response({
            'status': True,
            'data':  serializer.data,
            'message': 'todo fetched succesfully'
        })

    def post(self, request):
        try:
            user = request.user
            data = request.data
            data['user'] = user.uid
            serializer = TodoSerializer(data = data)

            id serializer.is_valid():
                return Response({
                    'status': False,
                    'message': 'invalid fields',
                    'data': serializer.errors
                }) 

            serializer.save()
            return Response({
                'status': True,
                'message': 'Todo is created',
                'data': serializer.data
            })
        except Exception as e:
            return Response({
                'status': False,
                'message': 'something went wrong',
                'data': {}
            })