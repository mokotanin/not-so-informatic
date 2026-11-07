from turtle import *

setup(400, 400)
speed(0)
angle = 90

def colimacon(n, longueur):
    if n == 0:
        forward(longueur)
        left(angle)
    else:
        forward(longueur - 5)
        left(angle)
        colimacon(n - 1, longueur - 5)

colimacon(20, 100)
exitonclick()
